const express = require("express");
const CustomerController = require("../components/customers/CustomerController");
const router = express.Router();

router.get("/", CustomerController.getCustomer);
router.post("/", CustomerController.addCustomer
);

module.exports = router;
