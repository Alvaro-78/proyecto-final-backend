'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    
    static associate(models) {
      this.hasMany(models.product, {
        foreignKey: "cartId",
        sourceKey: "id"
      });
      this.belongsTo(models.cart_root, {
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