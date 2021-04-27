'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return[queryInterface.addColumn(
      'Carts',
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
        'Carts', 
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
  
    ]
  },

  down: async (queryInterface, Sequelize) => {
 
  }
};
