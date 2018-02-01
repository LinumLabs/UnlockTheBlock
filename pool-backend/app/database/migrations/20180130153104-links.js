const foreign = {
  type: 'FOREIGN KEY',
  onDelete: 'restrict',
  onUpdate: 'cascade'
}

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable('links', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        contract: Sequelize.STRING(50),
        url: Sequelize.STRING,
        text: Sequelize.STRING,

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }),

      queryInterface.removeColumn('contracts', 'links')
    ]).then(() => {
      return queryInterface.addConstraint('links', ['contract'], Object.assign(foreign, {
        references: {
          table: 'contracts',
          field: 'address'
        }
      }))
    })
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('contracts', 'links', {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }),
      queryInterface.removeConstraint('links', 'links_contract_contracts_fk')
    ]).then(() => {
      return queryInterface.dropTable('links')
    })
  }
}
