module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('contracts', 'networkId', {
      type: Sequelize.INTEGER
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('contracts', 'networkId')
  }
}
