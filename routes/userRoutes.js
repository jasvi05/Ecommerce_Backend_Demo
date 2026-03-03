const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/", validate(["name", "email"]), userController.createUser);

module.exports = router;