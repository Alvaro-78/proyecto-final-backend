'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "cartId",
        sourceKey: "id"
      });
      this.belongsTo(models.Cart_root, {
        foreignKey: "cartId",
        sourceKey: "id"
      })
    }
  };

  Cart.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  
  return Cart;
};