'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'Order_details', 
      'orderId',
      {
        type: Sequelize.INTEGER,
        references: {
            model: 'Orders', 
            key: 'id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }),
    
      queryInterface.addColumn(
        'Order_details', 
        'productId', 
      {
        type: Sequelize.INTEGER,
        references: {
            model: 'Products', 
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
