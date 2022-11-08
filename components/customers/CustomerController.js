const CustomerService = require("./CustomerService");
const sequelize = require("sequelize");

class CustomerController {

  static async getCustomer(req, res, next) {
    try {
      const customers = await CustomerService.getCustomer();
      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  }

  static async addCustomer(req, res, next) {
    try {
      const { customerName, address } = req.body;

      if (!customerName || !address ) {
        throw { message: 'badRequest-addNewCustomer' };
      }

      const inputValues = {
        customerName,
      };

      const newCustomer = await CustomerService.addNewCustomer(
        inputValues
      );
      
      // const CustomerId = newCustomer.id
      // const inputValuesAddress = {
      //   address,
      // };
      // const newCustomerAddress = await CustomerService.addNewCustomerAddress(
      //   inputValuesAddress
      // );

      res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = CustomerController;
