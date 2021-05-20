'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_customer: {
        type: Sequelize.STRING
      },
      total_order: {
        type: Sequelize.STRING
      },
      payment_type: {
        type: Sequelize.STRING
      },
      shipping_date: {
        type: Sequelize.DATE
      },
      tracking_number: {
        type: Sequelize.STRING
      },
      order_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('s');
  }
};