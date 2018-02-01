const debug = require('debug')('app:link-model')

module.exports = (sequelize, DataTypes) => {
  debug('making Link')
  const Link = sequelize.define('link', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    contract: DataTypes.STRING(50),
    url: DataTypes.STRING,
    text: DataTypes.STRING
  })

  return Link
}
