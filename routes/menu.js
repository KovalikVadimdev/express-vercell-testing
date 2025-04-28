const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItem");

router.get("/", async (req, res) => {
  try {
    const menu = await MenuItem.getAllMenuItems();
    res.json(menu);
  } catch (err) {
    console.error("Error when receiving a menu:", err.message);
    console.error(err.stack);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  const {
    id,
    menu,
    name,
    orderName,
    nameHighlight,
    image,
    price,
    reviews,
    quantity,
  } = req.body;

  try {
    await MenuItem.addMenuItem(
      id,
      menu,
      name,
      orderName,
      nameHighlight,
      image,
      price,
      reviews,
      quantity
    );
    res.status(201).json({ message: "Dish added" });
  } catch (err) {
    res.status(500).json({ message: "Error when saving a dish" });
  }
});
module.exports = router;
