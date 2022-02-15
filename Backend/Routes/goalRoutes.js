const express = require("express");
const { del } = require("express/lib/application");
const router = express.Router();
const {
  getGoals,
  createGoals,
  updateGoal,
  deleteGoal,
} = require("../Controllers/goalControllers");

router.route("/").get(getGoals).post(createGoals);

router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
