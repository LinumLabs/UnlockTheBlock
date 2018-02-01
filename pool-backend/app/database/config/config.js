require('dotenv').config()

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.PGPASSWORD,
    database: 'pool',
    host: process.env.PGHOST,
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: 'postgres'
  }
}
