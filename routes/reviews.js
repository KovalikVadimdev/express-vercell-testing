const express = require("express");
const router = express.Router();
const review = require("../models/review");

router.get("/", async (req, res) => {
  try {
    const menu = await review.getReviews();
    res.json(menu);
  } catch (err) {
    console.error("Error at get review:", err.message);
    console.error(err.stack);
    res.status(500).json({ message: "Error server" });
  }
});

router.post("/", async (req, res) => {
  const { name, text } = req.body;

  try {
    await review.addReviews(name, text);
    res.status(201).json({ message: "Review added" });
  } catch (err) {
    res.status(500).json({ message: "Error when saving a review" });
  }
});

module.exports = router;
