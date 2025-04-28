const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const advantagesRoutes = require("./routes/advantages");
const reviewsRoutes = require("./routes/reviews");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use("/api/advantages", advantagesRoutes);
app.use("/api/reviews", reviewsRoutes);

app.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});
