'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE: JSON.stringify(process.env.LOCAL_API || 'https://api.pool.ac')
})
