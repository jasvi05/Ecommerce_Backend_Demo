const Cart = require("../models/Cart");

// GET cart
exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

// POST cart
exports.addToCart = async (req, res, next) => {
  try {
    const cartItem = await Cart.create(req.body);
    res.status(201).json({
      message: "Item added to cart",
      cartItem
    });
  } catch (err) {
    next(err);
  }
};