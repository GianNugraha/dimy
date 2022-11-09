const express = require("express");
const ProductController = require("../components/products/ProductController");
const router = express.Router();

router.get("/", ProductController.getProduct);
router.get("/unique/:id", ProductController.getProductById);
router.post("/", ProductController.addProduct);
router.delete("/unique/:id", ProductController.deleteProduct);

module.exports = router;
