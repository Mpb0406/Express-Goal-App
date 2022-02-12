const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

router.get("/api/goals", (req, res) => {
  res.send("Get Goals");
});

router.get("/api/goals", (req, res) => {
  res.send("Get Goals");
});

router.get("/api/goals", (req, res) => {
  res.send("Get Goals");
});

module.exports = router;
