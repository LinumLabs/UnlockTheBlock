module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('contracts', 'baseToken', {
      type: Sequelize.STRING(50)
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('contracts', 'baseToken')
  }
}
