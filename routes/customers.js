const express = require("express");
const CustomerController = require("../components/customers/CustomerController");
const router = express.Router();

router.get("/", CustomerController.getCustomer);
router.post("/", CustomerController.addCustomer);
router.delete("/unique/:id", CustomerController.deleteCustomer);

module.exports = router;
