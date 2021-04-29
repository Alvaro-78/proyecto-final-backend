'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_detail extends Model {
  
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "order_detailId",
        sourceKey: "id"
      });

      this.hasMany(models.Order, {
        foreignKey: "order_detailId",
        sourceKey: "id"
      });
    }
  };

  Order_detail.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_detail',
  });

  return Order_detail;
};