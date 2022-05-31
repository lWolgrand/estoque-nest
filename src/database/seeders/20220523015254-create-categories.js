'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category', [{
        name: 'Móveis',
        id: 1
      }, {
        name: 'Notebook',
        id: 2
      },
      {
        name: 'Desktop',
        id: 3
      },
      {
        name: 'Teclado',
        id: 4
      },
      {
        name: 'Mouse',
        id: 5
      },
      {
        name: 'Monitor',
        id: 6
      },
      {
        name: 'Estabilizador',
        id: 7
      },
      {
        name: 'Chromebook',
        id: 8
      },
      {
        name: 'Peça-hardware',
        id: 9
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {   
     await queryInterface.bulkDelete('Category', null, {});    
  }
};