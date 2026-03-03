const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const orderController = require("../controllers/orderController");

router.get("/", orderController.getOrders);
router.post("/", validate(["userId", "totalAmount"]), orderController.createOrder);

module.exports = router;