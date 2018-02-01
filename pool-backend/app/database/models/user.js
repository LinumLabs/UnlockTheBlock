const debug = require('debug')('app:user-model')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    address: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: /^[a-z0-9_-]{2,36}$/
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  }, {
    defaultScope () {
      return {
        attributes: ['address', 'username', 'createdAt', 'updatedAt']
      }
    }
  })

  User.associate = (models) => {
    debug('∞ associating')
    User.hasMany(models.contract, { foreignKey: 'ownerAddress' })
    User.belongsToMany(models.contract, { through: 'supporters' })
  }

  return User
}
