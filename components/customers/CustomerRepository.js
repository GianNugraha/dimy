const {
   Customer,
   CustomerAddress
  } = require("../../models");
  const { sequelize } = require("../../models");
  
  class CustomerRepository {
    static async getCustomer() {
      try {
        const customer = await Customer.findAndCountAll({
        //   attributes: ["id", "feed_id", "employee_id", "created_at"],
  
          include: [
            {
              model: CustomerAddress,
              as: "Address",
              attributes: ["address"],
            },
          ],
          distinct:true,
        });
        return customer;
      } catch (error) {
        throw error;
      }
    }

    static async addNewCustomer(inputValues) {
        try {
          const customer = await Customer.create(
            inputValues
          );
    
          if (!customer) {
            throw { message: 'Failed to Add Customer' };
          }
    
          return customer;
        } catch (error) {
          throw error;
        }
      }

      static async addNewCustomerAddress(inputValueAdrress) {
        try {
          const customerAddress = await CustomerAddress.create(
            inputValueAdrress
          );
    
          if (!customerAddress) {
            throw { message: 'Failed to Add Customer Address' };
          }
    
          return customerAddress;
        } catch (error) {
          throw error;
        }
      }  

      static async deleteCustomer(id) {
        try {
          const deleteCustomer = await Customer.destroy({
            where: {
              id: id,
            },
          });
    
          if (!deleteCustomer) {
            throw { message: "Failed to Delete Customer" };
          }
          return deleteCustomer;
        } catch (error) {
          throw error;
        }
      }
      
      static async deleteCustomerAddress(CustomerId) {
        try {
          const deleteCustomerAddress = await CustomerAddress.destroy({
            where: {
              CustomerId: CustomerId,
            },
          });
    
          if (!deleteCustomerAddress) {
            throw { message: "Failed to Delete Customer Address" };
          }
          return deleteCustomerAddress;
        } catch (error) {
          throw error;
        }
      }
    
}

module.exports = CustomerRepository;
  