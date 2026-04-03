const express = require("express");
const router = express.Router();
const {
  getTotalIncome,
  getTotalExpense,
  getNetBalance,
  getCategorySummary,
  getRecentTransactions,
} = require("../controllers/summaryController");

const checkRole = require("../middleware/roleMiddleware");


// Analyst + Admin only
router.get("/income", checkRole(["admin", "analyst"]), getTotalIncome);
router.get("/expense", checkRole(["admin", "analyst"]), getTotalExpense);
router.get("/balance", checkRole(["admin", "analyst"]), getNetBalance);
router.get("/category", checkRole(["admin", "analyst"]), getCategorySummary);
router.get(
  "/recent",
  checkRole(["admin", "analyst"]),
  getRecentTransactions
);

module.exports = router;