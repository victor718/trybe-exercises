'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'COMPUTADOR',
        description: 'i5 1000gb HD',
        amount: '3000.00',
        store_id: 2
      },
      {
        name: 'SMARTPHONE',
        description: 'SAMSUNG A10',
        amount: '2000.00',
        store_id: 2,
      },
      {
        name: 'TORRADEIRA',
        description: 'TRAMONTINA',
        amount: '210.00',
        store_id: 1,
      },
      {
        name: 'PANELA',
        description: 'AÇO INOX',
        amount: '56.00',
        store_id: 1,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
