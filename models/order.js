'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    id_customer: DataTypes.STRING,
    total_order: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    shipping_date: DataTypes.DATE,
    tracking_number: DataTypes.STRING,
    order_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};