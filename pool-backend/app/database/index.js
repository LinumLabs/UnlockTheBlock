const debug = require('debug')('db:postgres')

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  port: process.env.PGPORT,
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: (l) => { debug(l) },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

let db = {}

fs.readdirSync(path.join(__dirname, '/models')).filter((file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js')
}).forEach((file) => {
  debug(`• schema ${file}`)
  let model = sequelize.import(path.join(__dirname, '/models', file))
  db[model.name] = model
})

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    debug(`should associate ${modelName}`)
    try {
      db[modelName].associate(db)
    } catch (err) {
      debug(err.message)
    }
  }
  if (typeof db[modelName].options.defaultScope === 'function') {
    debug('# defaultScope is a function')
    db[modelName].addScope('defaultScope', db[modelName].options.defaultScope(), { override: true })
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize.sync()

module.exports = db
