'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
      await queryInterface.bulkInsert('Source', [{
      name: 'Doação',
      id: 1
    },{
      name: 'Compra',
      id: 2
    },{
      name: 'Alugado',
      id: 3
    }], {}); 
  },

  async down (queryInterface, Sequelize) {    
    await queryInterface.bulkDelete('Source', null, {});
    
  }
};
