const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.post("/", validate(["name", "price"]), productController.createProduct);

module.exports = router;