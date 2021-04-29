'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_root extends Model {
   
    static associate(models) {
      this.belongsTo(models.Customer, {
        foreignKey: "cart_rootId",
        sourceKey: "id"
      });
      this.hasMany(models.Cart, {
        foreignKey: "cart_rootId",
        sourceKey: "id"
      });
    }
  };

  Cart_root.init({
    creation_date: DataTypes.DATE,
    discount: DataTypes.INTEGER,
    total_cart: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_root',
  });

  return Cart_root;
};