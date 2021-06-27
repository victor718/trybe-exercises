'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        name: 'Loja CEM',
        description: 'EletroEletronico'
      },
      {
        name: 'AMERICANAS',
        description: 'ELETRONICO, ALIMENTOS, ROUPAS',
      }
    ],
    {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
