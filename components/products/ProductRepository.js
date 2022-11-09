const {
    Product
  } = require("../../models");
  const { sequelize } = require("../../models");
  
  class ProductRepository {
    static async getProduct() {
      try {
        const products = await Product.findAndCountAll();
        return products;
      } catch (error) {
        throw error;
      }
    }
  
    static async getProductById(id) {
      try {
        const product = await Product.findOne({
          where: {
            id,
          },
        });
        return product;
      } catch (error) {
        throw error;
      }
    }
  
    static async addNewProduct(inputValues) {
      try {
        return await Product.create(inputValues);
      } catch (error) {
        throw error;
      }
    }
  
  
    static async deleteProduct(id, t) {
      try {
        return await Product.destroy({
          where: {
            id: id,
          }
        });
      } catch (error) {
        throw error;
      }
    }
  
  }
  
  module.exports = ProductRepository;
  