'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
      await queryInterface.bulkInsert('Status', [{
      name: 'Ativo',
      id: 1
    },{
      name: 'Emprestado',
      id: 2
    },{
      name: 'Manutenção',
      id: 3
    },{
      name: 'Offline',
      id: 4
    },], {}); 
  },

  async down (queryInterface, Sequelize) {    
    await queryInterface.bulkDelete('Status', null, {});
    
  }
};
