const OrderRepository = require("./OrderRepository");
const { sequelize } = require('../../models');
class OrderService {
  static async getOrder() {
    try {
      const Order = await OrderRepository.getOrder();
      return Order;
    } catch (error) {
      throw error;
    }
  }

  static async getOrderById(id) {
    try {
      const order = await OrderRepository.getOrderById(id);
      return order;
    } catch (error) {
      throw error;
    }
  }

  static async getOrderByIdCustomer(CustomerId) {
    try {
      const order = await OrderRepository.getOrderByIdCustomer(CustomerId);
      return order;
    } catch (error) {
      throw error;
    }
  }

  static async addNewOrder(inputValues) {
    const transaction = await sequelize.transaction();
    try {
      // order
      const newOrder = await OrderRepository.addNewOrder({
        CustomerId:inputValues.CustomerId
      }, transaction);

      // product order
      for(let ProductId of inputValues.ProductId){
        const newProductOrder = await OrderRepository.addNewProductOrder({
          OrderId:newOrder.id,
          ProductId
        }, transaction);
      }

      // payment method
      for(let PaymentId of inputValues.PaymentId){
        const newPaymentOrder = await OrderRepository.addNewPaymentOrder({
          OrderId:newOrder.id,
          PaymentId
        }, transaction);
      }
      transaction.commit();
      return newOrder;
    } catch (err) {
      transaction.rollback();
      throw { message: 'badRequest-addOrderFailed', error: err };
    }
  }

  static async addNewProductOrder(inputValuesProduct) {
    try {
     
      const newOrderAddress = await OrderRepository.addNewProductOrder(
        inputValuesProduct
      );
      return newOrderAddress;
    } catch (err) {
      throw { message: 'badRequest-addProductOrderFailed', error: err };
    }
  }

  static async deleteOrder(id) {
    const transaction = await sequelize.transaction();
    try {
      const deleteOrder = await OrderRepository.deleteOrder(id, transaction);
      const deleteProductOrder = await OrderRepository.deleteProductOrder(id, transaction);
      const deletePaymentOrder = await OrderRepository.deletePaymentOrder(id, transaction);
      transaction.commit();
      return deleteOrder;
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }
  
}

module.exports = OrderService;
