'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return [queryInterface.addColumn(
      'Admins',
      'productId',
      {
        type: Sequelize.INTEGER,
          references: {
              model: 'Products', 
              key: 'id' 
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }
    )]
  },

  down: async (queryInterface, Sequelize) => {
  
  }
};
