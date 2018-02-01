const foreign = {
  type: 'FOREIGN KEY',
  onDelete: 'restrict',
  onUpdate: 'cascade'
}

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable('users', {
        address: {
          type: Sequelize.STRING(50),
          primaryKey: true
        },
        username: {
          type: Sequelize.STRING,
          unique: true,
          validate: {
            is: /^[a-z0-9_-]{2,36}$/
          }
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          validate: {
            isEmail: true
          }
        },

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }),

      queryInterface.createTable('contracts', {
        address: {
          type: Sequelize.STRING(50),
          primaryKey: true
        },
        ownerAddress: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        links: {
          type: Sequelize.ARRAY(Sequelize.STRING)
        },
        heroImage: Sequelize.STRING,
        coinImage: Sequelize.STRING,

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      })
    ]).then(() => {
      return [
        queryInterface.addConstraint('contracts', ['ownerAddress'], Object.assign(foreign, {
          references: {
            table: 'users',
            field: 'address'
          }
        }))
      ]
    })
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeConstraint('contracts', 'contracts_ownerAddress_users_fk')
    ]).then(() => {
      return [
        queryInterface.dropTable('users'),
        queryInterface.dropTable('contracts')
      ]
    })
  }
}
