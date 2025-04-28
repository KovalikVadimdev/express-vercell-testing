const express = require("express");
const router = express.Router();
const advantage = require("../models/advantage");

router.get("/", async (req, res) => {
  try {
    const menu = await advantage.getAdvantages();
    res.json(menu);
  } catch (err) {
    console.error("Error at get advantages:", err.message);
    console.error(err.stack);
    res.status(500).json({ message: "Error server" });
  }
});

router.post("/", async (req, res) => {
  const { id, image, title, text, alt } = req.body;

  try {
    const menu = await advantage.addAdvantages(id, image, title, text, alt);
    res.json(menu);
  } catch (err) {
    console.error("Error at get advantages:", err.message);
    console.error(err.stack);
    res.status(500).json({ message: "Error server" });
  }
});

module.exports = router;
