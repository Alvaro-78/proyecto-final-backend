'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'Cart_roots', 
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
    
      queryInterface.addColumn(
        'Cart_roots', 
        'cartId', 
      {
        type: Sequelize.INTEGER,
        references: {
            model: 'Carts', 
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
