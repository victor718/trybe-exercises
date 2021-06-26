'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
      [
        {
          title: 'Harry Potter e a Ordem da Fênix',
          author: 'J. K. Rowling',
          pageQuantity: '704',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'A Guerra dos Tronos',
          author: 'George R. R. Martin',
          pageQuantity: '694',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Retorno do Rei',
          author: 'J. R. R. Tolkien',
          pageQuantity: '416',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ], {}),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null, {}),
};
