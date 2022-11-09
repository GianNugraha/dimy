'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payment_method', [
      {
        name: 'BCA',
        is_active: true,
      },
      {
        name: 'Mandiri',
        is_active: true,
      },
      {
        name: 'Ovo',
        is_active: true,
      },
      {
        name: 'Dana',
        is_active: true,
      },
    ]);

    await queryInterface.bulkInsert('product', [
      {
        name: 'Xiaomy Poco X3 Pro',
        price: 3200000,
      },
      {
        name: 'Nike Air Max',
        price: 200000,
      },
      {
        name: 'Asus ROG',
        price: 20000000,
      }
    ]);
    await queryInterface.bulkInsert('customer', [
      {
        customer_name: 'Gian Nugraha'
      },
      {
        customer_name: 'Nugraha Gian'
      }
    ]);
    await queryInterface.bulkInsert('customer_address', [
      {
        customer_id: 1,
        address: 'Garut'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payment_method');
    await queryInterface.bulkDelete('product');
    await queryInterface.bulkDelete('customer');
    await queryInterface.bulkDelete('customer_address');
  }
};
