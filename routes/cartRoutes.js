const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const cartController = require("../controllers/cartController");

router.get("/", cartController.getCart);
router.post("/", validate(["userId", "productId", "quantity"]), cartController.addToCart);

module.exports = router;