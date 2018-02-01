const debug = require('debug')('app:router')
const Router = require('koa-router')
const eth = require('ethjs')
// const Wallet = require('ethers-wallet').Wallet
// const fecha = require('fecha')

const db = require('../database')
// const Op = db.Sequelize.Op

const app = new Router()

function checkAddress (ctx, address) {
  if (!eth.isAddress(address)) {
    ctx.throw(400, 'Invalid ETH address')
  }
}

app.get('/', (ctx) => {
  debug('it the index')
  ctx.body = '<h1>Join the pool party 🏊🏽‍♀️</h1>'
})

// app.get('/sig/:sig', async (ctx) => {
//   const { sig } = ctx.params
//   const msg = fecha.format(new Date(), 'YYYY-MM-DD')
//   const address = Wallet.verifyMessage(msg, sig)
//   ctx.body = address
// })

app.get('/pools', async (ctx) => {
  let { networkId } = ctx.query
  if (!networkId) networkId = 1
  try {
    ctx.body = await db.contract.findAll({ where: { networkId } })
  } catch (err) {
    debug(err)
    ctx.throw(400)
  }
})

app.post('/pools', async (ctx) => {
  const {
    address,
    ownerAddress,
    name,
    description,
    heroImage,
    coinImage,
    symbol,
    type,
    base,
    baseToken,
    links,
    networkId
  } = ctx.request.body

  try {
    ctx.body = await db.contract.create({
      address,
      ownerAddress,
      name,
      description,
      heroImage,
      coinImage,
      symbol,
      type,
      base,
      baseToken,
      links,
      networkId
    }, {
      include: [{ model: db.link }]
    })
  } catch (err) {
    debug(err)
    ctx.throw(500, err)
  }
})

app.get('/pools/:address', async (ctx) => {
  const { address } = ctx.params
  checkAddress(ctx, address)
  const pool = await db.contract.findOne({ where: { address } })
  if (!pool) ctx.throw(404)
  ctx.body = pool
})

app.post('/pools/:address/support', async (ctx) => {
  const { address } = ctx.params
  const { user } = ctx.request.body
  checkAddress(ctx, address)
  checkAddress(ctx, user)

  await db.supporter.create({
    contractAddress: address,
    userAddress: user
  }).then(() => {
    return db.contract.findOne({ where: { address } }).then((contract) => {
      contract.increment('holders')
    })
  }).catch((err) => {
    debug(err)
    ctx.throw(500, err)
  })
  ctx.body = { msg: 'OK' }
})

app.put('/pools/:address', async (ctx) => {
  const { address } = ctx.params
  checkAddress(ctx, address)

  // check request validity
  // const { authorization } = ctx.request.headers
  // if (!authorization) ctx.throw(401)
  // const token = authorization.replace('Basic ', '')
  // const msg = fecha.format(new Date(), 'YYYY-MM-DD')
  // let signedAddress = Wallet.verifyMessage(msg, token)
  // if (signedAddress !== address) ctx.throw(401)

  const pool = await db.contract.findOne({ where: { address } })
  if (!pool) ctx.throw(404)
  // make sure ownerAddress matches header signature
  const allowed = ['name', 'description', 'heroImage', 'coinImage']
  const { links } = ctx.request.body
  const fields = allowable(ctx.request.body, allowed)
  await pool.update(ctx.request.body, { fields })
  if (links && links.length) {
    let saved = []
    for (let i = links.length - 1; i >= 0; i--) {
      if (links[i].id) {
        saved.push(...links.splice(i, 1))
        continue
      }
      links[i].contract = pool.address
    }
    for (let l of saved) {
      delete l.createdAt
      delete l.updatedAt
      delete l.contract
      await db.link.update(l, { where: { id: l.id } })
    }
    let indb = await pool.getLinks()
    indb.forEach(async (il) => {
      let e = saved.findIndex(d => d.id === il.id)
      if (e < 0) {
        await il.destroy()
      }
    })
    if (links.length) {
      await db.link.bulkCreate(links)
    }
  } else {
    await pool.setLinks([])
  }
  ctx.body = pool
})

app.delete('/pools/:address', async (ctx) => {
  const { address } = ctx.params
  checkAddress(ctx, address)
  const pool = await db.contract.findOne({ where: { address } })
  if (!pool) ctx.throw(404)
  // verify ownerAddress and delete
  try {
    pool.destroy()
    ctx.body = { msg: `pool ${address} deleted` }
  } catch (err) {
    ctx.throw(500, err)
  }
})

app.get('/users', async (ctx) => {
  ctx.body = await db.user.findAll()
})

app.post('/users', async (ctx) => {
  const { address, username, email } = ctx.request.body
  checkAddress(ctx, address)

  try {
    let user = await db.user.findOne({ where: { address } })
    if (user) {
      ctx.body = user
    } else {
      ctx.body = await db.user.create({
        address, username, email
      })
    }
  } catch (err) {
    debug(err)
    ctx.throw(500, err)
  }
})

app.get('/users/:address', async (ctx) => {
  const { address } = ctx.params
  checkAddress(ctx, address)
  const user = await db.user.findOne({ where: { address } })
  if (!user) ctx.throw(404)
  ctx.body = user
})

app.put('/users/:address', async (ctx) => {
  const { address } = ctx.params
  checkAddress(ctx, address)
  const user = await db.user.findOne({ where: { address } })
  if (!user) ctx.throw(404)
  // modify the user
  ctx.body = user
})

app.delete('/users/:address', async (ctx) => {
  const { address } = ctx.params
  checkAddress(ctx, address)
  const user = await db.user.findOne({ where: { address } })
  if (!user) ctx.throw(404)
  // verify
  try {
    user.destroy()
    ctx.body = { msg: `user ${address} deleted` }
  } catch (err) {
    ctx.throw(500, err)
  }
})

module.exports = app

function allowable (obj, allowed) {
  let remaining = []
  for (let key of Object.keys(obj)) {
    if (allowed.indexOf(key) < 0) {
      delete obj[key]
    } else {
      remaining.push(key)
    }
  }
  return remaining
}
