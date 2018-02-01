const debug = require('debug')('app:contract-model')

module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define('contract', {
    address: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false
    },
    ownerAddress: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    heroImage: DataTypes.STRING,
    coinImage: DataTypes.STRING,
    holders: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    symbol: DataTypes.STRING,
    type: DataTypes.STRING,
    base: DataTypes.STRING,
    baseToken: DataTypes.STRING(50),
    networkId: DataTypes.INTEGER
  }, {
    defaultScope () {
      return {
        order: [['createdAt', 'DESC']],
        include: [
          { model: sequelize.models.user },
          { model: sequelize.models.user, as: 'supporters', attributes: ['address', 'username'] },
          { model: sequelize.models.link }
        ]
      }
    }
  })

  Contract.associate = (models) => {
    debug('∞ associating')
    Contract.belongsTo(models.user, { foreignKey: 'ownerAddress' })
    Contract.hasMany(models.link, { foreignKey: 'contract' })
    Contract.belongsToMany(models.user, { through: 'supporters', as: 'supporters' })
  }

  return Contract
}
