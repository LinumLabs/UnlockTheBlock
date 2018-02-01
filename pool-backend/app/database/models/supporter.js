const debug = require('debug')('app:supporter-model')

module.exports = (sequelize, DataTypes) => {
  debug('making Supporter')
  const Supporter = sequelize.define('supporter', {
    contractAddress: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false
    },
    userAddress: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false
    }
  })

  return Supporter
}
