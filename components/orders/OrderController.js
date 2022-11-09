const OrderService = require("../Orders/OrderService");
const sequelize = require("sequelize");

class OrderController {

  static async getOrder(req, res, next) {
    try {
      const Orders = await OrderService.getOrder();
      res.status(200).json(Orders);
    } catch (error) {
      next(error);
    }
  }

  static async getOrderById(req, res, next) {
    try {
      const {id} = req.params;
      const order = await OrderService.getOrderById(id);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  static async addOrder(req, res, next) {
    try {
      const { CustomerId } = req.params;
      const { ProductId, PaymentId } = req.body;

      if (!CustomerId || !ProductId || !PaymentId) { 
        throw { message: 'badRequest-addNewOrder' };
      }

      // input order 
      const inputValues = {
        CustomerId, ProductId, PaymentId
      };

      const newOrder = await OrderService.addNewOrder(
        inputValues
      );
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }

  static async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const deleteOrder = await OrderService.deleteOrder(id);
      res.status(201).json("Success Deleted Data");
    } catch (error) {
      next(error);
    }
  }
  
}
module.exports = OrderController;
