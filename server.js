const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const advantagesRoutes = require("./routes/advantages");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vadimog25:fT6E7KjIHbnVW2HO@freshandhot.otdm1g9.mongodb.net/freshandhot"
);

app.use("/api/advantages", advantagesRoutes);

app.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});
