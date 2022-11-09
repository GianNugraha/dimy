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

  static async addNewCustomerAddress(inputValuesAddress) {
    try {
      const newCustomerAddress = await CustomerRepository.addNewCustomerAddress(
        inputValuesAddress
      );
      return newCustomerAddress;
    } catch (err) {
      throw { message: 'badRequest-addCustomerAddressFailed', error: err };
    }
  }

  static async deleteCustomer(id) {
    try {
      const deleteCustomer = await CustomerRepository.deleteCustomer(id);
      const deleteCustomerAddress = await CustomerRepository.deleteCustomerAddress(id);
      return deleteCustomer;
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = CustomerService;
