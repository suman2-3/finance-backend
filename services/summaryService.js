const Record = require("../models/Record");

// Total Income
exports.getTotalIncome = async () => {
  const result = await Record.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  return result[0]?.total || 0;
};

// Total Expense
exports.getTotalExpense = async () => {
  const result = await Record.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  return result[0]?.total || 0;
};

// Net Balance
exports.getNetBalance = async () => {
  const result = await Record.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);

  let income = 0,
    expense = 0;

  result.forEach((r) => {
    if (r._id === "income") income = r.total;
    if (r._id === "expense") expense = r.total;
  });

  return income - expense;
};

// Category-wise Summary
exports.getCategorySummary = async () => {
  return await Record.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);
};

// Recent Transactions
exports.getRecentTransactions = async () => {
  return await Record.find()
    .sort({ date: -1 })
    .limit(5);
};