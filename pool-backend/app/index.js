require('dotenv').config()

const debug = require('debug')('app:index')
const appError = require('debug')('app:ERROR')
const Koa = require('koa')
const app = new Koa()
const path = require('path')

const cors = require('kcors')
const serve = require('koa-static')

const bodyparser = require('koa-bodyparser')

app.use(serve(path.join(__dirname, 'public')))

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  debug(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(bodyparser())

app.use(cors({
  // allow all for now
  origin: '*',
  // origin: process.env.CORS_ORIGIN || 'http://localhost:8080',
  credentials: true
}))

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    appError(err.toString())
    ctx.status = err.status || 500
    ctx.body = err.message
  }
})

const index = require('./routes')
app.use(index.routes())
app.use(index.allowedMethods())

app.listen(process.env.PORT || 8080)
debug(`App available on ${process.env.PORT}`)

/*
app.use(session({
  key: 'objct',
  overwrite: true,
  httpOnly: true,
  signed: true
}, app))

// auth

app.use(bodyparser())

app.use(cors({
  origin: 'https://www.objctify.io',
  credentials: true
}))

const index = require('./platform/routes')
app.use(index.routes())
app.use(index.allowedMethods())
*/
