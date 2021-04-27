'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_detail extends Model {
  
    static associate(models) {
      this.belongsTo(models.product, {
        foreignKey: "order_detailId",
        sourceKey: "id"
      });

      this.hasMany(models.order, {
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