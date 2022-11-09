const express = require('express');
const router = express.Router();
const customerRoutes = require('./customers');
const orderRoutes = require('./orders');
const productRoutes = require('./products');

router.use('/customers', customerRoutes);
router.use('/orders', orderRoutes);
router.use('/products', productRoutes);

module.exports = router;
