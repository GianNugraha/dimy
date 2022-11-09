'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentOrder.belongsTo(models.Payment, { as: "Payment", foreignKey: "PaymentId" });
    }
  }
  PaymentOrder.init({
    OrderId: DataTypes.INTEGER,
    PaymentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PaymentOrder',
    tableName: "payment_orders",
    underscored: true,
    timestamps: false,
  });
  return PaymentOrder;
};