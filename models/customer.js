'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
  
    static associate(models) {
      this.hasMany(models.Cart_root, {
        foreignKey: "customerId",
        sourceKey: "id"
      });
    }
  };

  Customer.init({
    name: DataTypes.STRING,
    surName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    suscription: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    province: DataTypes.STRING,
    country: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  
  return Customer;
};