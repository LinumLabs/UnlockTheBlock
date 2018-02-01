const foreign = {
  type: 'FOREIGN KEY',
  onDelete: 'restrict',
  onUpdate: 'cascade'
}

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('contracts', 'holders', {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }),
      queryInterface.addColumn('contracts', 'symbol', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('contracts', 'type', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('contracts', 'base', {
        type: Sequelize.STRING
      }),

      queryInterface.createTable('supporters', {
        contractAddress: {
          type: Sequelize.STRING(50),
          primaryKey: true
        },
        userAddress: {
          type: Sequelize.STRING(50),
          primaryKey: true
        },
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
      return Promise.all([
        queryInterface.addConstraint('supporters', ['contractAddress'], Object.assign(foreign, {
          references: {
            table: 'contracts',
            field: 'address'
          }
        })),
        queryInterface.addConstraint('supporters', ['userAddress'], Object.assign(foreign, {
          references: {
            table: 'users',
            field: 'address'
          }
        }))
      ])
    })
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('contracts', 'holders'),
      queryInterface.removeColumn('contracts', 'symbol'),
      queryInterface.removeColumn('contracts', 'type'),
      queryInterface.removeColumn('contracts', 'base'),

      queryInterface.removeConstraint('supporters', 'supporters_userAddress_users_fk'),
      queryInterface.removeConstraint('supporters', 'supporters_contractAddress_contracts_fk')
    ]).then(() => {
      return queryInterface.dropTable('supporters')
    })
  }
}
