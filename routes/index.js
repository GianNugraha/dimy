const express = require('express');
const router = express.Router();
const customerRoutes = require('./customer');

router.use('/customers', customerRoutes);

module.exports = router;
