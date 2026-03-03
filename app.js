const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

/* =========================
   MongoDB Connection
========================= */
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

/* =========================
   Routes
========================= */
app.use("/products", require("./routes/productRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/orders", require("./routes/orderRoutes"));

/* =========================
   Error Handling Middleware
========================= */
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Server Error"
  });
});

/* =========================
   Start Server
========================= */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});