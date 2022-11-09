const express = require("express");
const OrderController = require("../components/orders/OrderController");
const router = express.Router();

router.get("/", OrderController.getOrder);
router.get("/unique/:id", OrderController.getOrderById);
router.post("/:CustomerId", OrderController.addOrder);
router.delete("/unique/:id", OrderController.deleteOrder);

module.exports = router;
