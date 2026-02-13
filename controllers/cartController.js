let cart = [];

exports.getCart = (req, res) => {
  res.json(cart);
};

exports.addToCart = (req, res) => {
  cart.push(req.body);
  res.status(201).json(req.body);
};
