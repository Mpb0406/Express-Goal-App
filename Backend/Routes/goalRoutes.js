const express = require("express");
const { del } = require("express/lib/application");
const router = express.Router();
const {
  getGoals,
  createGoals,
  updateGoal,
  deleteGoal,
} = require("../Controllers/goalControllers");
const { protect } = require("../Middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, createGoals);

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
