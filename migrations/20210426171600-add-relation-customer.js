'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return [queryInterface.addColumn(
      'Customers', 
      'cart_rootId', 
      {
          type: Sequelize.INTEGER,
          references: {
              model: 'Cart_roots', 
              key: 'id' 
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }),
      queryInterface.addColumn(
        'Customers', 
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
    ];
  },

  down: async (queryInterface, Sequelize) => {
  
  }
};
