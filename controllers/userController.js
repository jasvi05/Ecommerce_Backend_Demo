const { validationResult } = require("express-validator");

let users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = {
    id: users.length + 1,
    ...req.body
  };

  users.push(user);
  res.status(201).json(user);
};
