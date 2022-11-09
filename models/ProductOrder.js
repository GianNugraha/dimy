'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductOrder.belongsTo(models.Product, { as: "Product", foreignKey: "ProductId" });
    }
  }
  ProductOrder.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductOrder',
    tableName: "product_orders",
    underscored: true,
    timestamps: false,
  });
  return ProductOrder;
};