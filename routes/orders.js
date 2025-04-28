const express = require("express");
const router = express.Router();
const order = require("../models/order");

router.post("/", async (req, res) => {
  const { id, items, price } = req.body;

  try {
    await order.addOrder(id, items, price);
    res.status(201).json({ message: "The order is added" });
  } catch (err) {
    res.status(500).json({ message: "Error saving the order" });
  }
});

module.exports = router;
