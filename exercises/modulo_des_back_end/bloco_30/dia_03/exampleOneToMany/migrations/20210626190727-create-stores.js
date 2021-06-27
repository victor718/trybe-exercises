'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoreTable = queryInterface.createTable("Stores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    
    return StoreTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Stores");
  },
};
