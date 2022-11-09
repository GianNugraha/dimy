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
      Order.hasMany(models.ProductOrder, { as: "ProductOrder", foreignKey: "OrderId" });
      Order.hasMany(models.PaymentOrder, { as: "PaymentOrder", foreignKey: "OrderId" });
      Order.belongsTo(models.Customer, { as: "Customer", foreignKey: "CustomerId" });
    }
  }
  Order.init({
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    tableName: "orders",
    underscored: true,
    timestamps: false,
  });
  return Order;
};