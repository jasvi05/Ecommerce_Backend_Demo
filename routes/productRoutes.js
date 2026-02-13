const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.get("/", getProducts);

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("price").isNumeric().withMessage("Price must be a number")
  ],
  createProduct
);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
