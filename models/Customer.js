'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.CustomerAddress, { as: "Address", foreignKey: "CustomerId" });
    }
  }
  Customer.init({
    customerName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: "customer",
    underscored: true,
    timestamps: false,
  });
  return Customer;
};