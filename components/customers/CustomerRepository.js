const {
   Customer
  } = require("../../models");
  const { sequelize } = require("../../models");
  
  class CustomerRepository {
    static async getCustomer() {
      try {
        const customer = await Customer.findAndCountAll({
        //   attributes: ["id", "feed_id", "employee_id", "created_at"],
  
        //   include: [
        //     {
        //       model: Feed,
        //       as: "Feed",
        //       attributes: ["id", "article", "created_at"],
        //       include: [
        //         {
        //           model: FeedImage,
        //           as: "Image",
        //           attributes: ["id", "imageUrl"],
        //         },
        //       ],
        //     },
        //   ],
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
    
}

module.exports = CustomerRepository;
  