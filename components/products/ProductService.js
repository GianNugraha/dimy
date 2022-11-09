const ProductRepository = require("./ProductRepository");
const { sequelize } = require('../../models');
class ProductService {
  static async getProduct() {
    try {
      const Product = await ProductRepository.getProduct();
      return Product;
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(id) {
    try {
      return await ProductRepository.getProductById(id);
    } catch (error) {
      throw error;
    }
  }

  static async addNewProduct(inputValues) {
    try {
    const newProduct = await ProductRepository.addNewProduct({
        name:inputValues.name,
        price:inputValues.price
    });
      return newProduct;
    } catch (err) {
      throw { message: 'badRequest-addProductFailed', error: err };
    }
  }

  static async deleteProduct(id) {
    try {
      return await ProductRepository.deleteProduct(id);
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = ProductService;
