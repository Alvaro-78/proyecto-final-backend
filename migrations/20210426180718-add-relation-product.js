'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'Products', 
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
