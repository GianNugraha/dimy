const {
  Order,
  ProductOrder,
  PaymentOrder,
  Payment,
  Customer,
  CustomerAddress,
  Product,
} = require("../../models");
const { sequelize } = require("../../models");

class OrderRepository {
  static async getOrder() {
    try {
      const order = await Order.findAndCountAll({
        //   attributes: ["id", "feed_id", "employee_id", "created_at"],

        include: [
          {
            model: Customer,
            as: "Customer",
            attributes: ["customer_name"],
            include: [
              {
                model: CustomerAddress,
                as: "Address",
                attributes: ["address"],
              },
            ],
          },
          {
            model: ProductOrder,
            as: "ProductOrder",
            include: [
              {
                model: Product,
                as: "Product",
                attributes: ["name", "price"],
              },
            ],
          },
        ],
      });
      return order;
    } catch (error) {
      throw error;
    }
  }

  static async getOrderById(id) {
    try {
      const order = await Order.findOne({
        include: [
          {
            model: Customer,
            as: "Customer",
            attributes: ["customer_name"],
            include: [
              {
                model: CustomerAddress,
                as: "Address",
                attributes: ["address"],
              },
            ],
          },
          {
            model: ProductOrder,
            as: "ProductOrder",
            include: [
              {
                model: Product,
                as: "Product",
                attributes: ["name", "price"],
              },
            ],
          },
          {
            model: PaymentOrder,
            as: "PaymentOrder",
            include: [
              {
                model: Payment,
                as: "Payment",
              },
            ],
          },
        ],
        where: {
          id,
        },
      });
      return order;
    } catch (error) {
      throw error;
    }
  }

  static async addNewOrder(inputValues, t) {
    try {
      return await Order.create(inputValues, { transaction: t });
    } catch (error) {
      throw error;
    }
  }

  static async addNewProductOrder(inputValues, t) {
    try {
      return await ProductOrder.create(inputValues, { transaction: t });
    } catch (error) {
      throw error;
    }
  }

  static async addNewPaymentOrder(inputValues, t) {
    try {
      return await PaymentOrder.create(inputValues, { transaction: t });
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrder(id, t) {
    try {
      const deleteOrder = await Order.destroy({
        where: {
          id: id,
        },
        transaction:t
      });

      if (!deleteOrder) {
        throw { message: "Failed to Delete Order" };
      }
      return deleteOrder;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProductOrder(OrderId, t) {
    try {
      const deleteProductOrder = await ProductOrder.destroy({
        where: {
          OrderId: OrderId,
        },
        transaction:t,
      });
      return deleteProductOrder;
    } catch (error) {
      throw error;
    }
  }

  static async deletePaymentOrder(OrderId, t) {
    try {
      const deletePaymentOrder = await PaymentOrder.destroy({
        where: {
          OrderId: OrderId,
        },
        transaction:t,
      });
      return deletePaymentOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderRepository;
