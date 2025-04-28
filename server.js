const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");
const ordersRoutes = require("./routes/orders");
const reviewsRoutes = require("./routes/reviews");
const advantagesRoutes = require("./routes/advantages");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use("/api", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/advantages", advantagesRoutes);

app.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});
