const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

router.get("/", getUsers);

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be 6 characters")
  ],
  createUser
);

module.exports = router;
