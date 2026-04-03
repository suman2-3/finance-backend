const summaryService = require("../services/summaryService");

// Total Income
exports.getTotalIncome = async (req, res) => {
  try {
    const total = await summaryService.getTotalIncome();
    res.json({ totalIncome: total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Total Expense
exports.getTotalExpense = async (req, res) => {
  try {
    const total = await summaryService.getTotalExpense();
    res.json({ totalExpense: total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Net Balance
exports.getNetBalance = async (req, res) => {
  try {
    const balance = await summaryService.getNetBalance();
    res.json({ netBalance: balance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Category-wise Summary
exports.getCategorySummary = async (req, res) => {
  try {
    const data = await summaryService.getCategorySummary();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Recent Activity
exports.getRecentTransactions = async (req, res) => {
  try {
    const data = await summaryService.getRecentTransactions();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};