'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Todos', // name of table
      'completed', //name of attribute
      Sequelize.BOOLEAN // data type
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Todos', // name of table
      'completed' //name of column
    )
  }
};
