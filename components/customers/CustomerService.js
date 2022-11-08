const CustomerRepository = require("./CustomerRepository");
class CustomerService {
  static async getCustomer() {
    try {
      const customer = await CustomerRepository.getCustomer();
      return customer;
    } catch (error) {
      throw error;
    }
  }

  static async addNewCustomer(inputValues) {
    try {
      const newCustomer = await CustomerRepository.addNewCustomer(
        inputValues
      );
      return newCustomer;
    } catch (err) {
      throw { message: 'badRequest-addCustomerFailed', error: err };
    }
  }
}

module.exports = CustomerService;
