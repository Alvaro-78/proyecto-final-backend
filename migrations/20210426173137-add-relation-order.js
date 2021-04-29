'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'Orders',
      'customerId', 
      {
        type: Sequelize.INTEGER,
        references: {
            model: 'Customers', 
            key: 'id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
