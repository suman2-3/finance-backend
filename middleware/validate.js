const validateRecord = (req, res, next) => {
  const { amount, type, category, date } = req.body;

  if (!amount || !type || !category || !date) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  if (!["income", "expense"].includes(type)) {
    return res.status(400).json({
      error: "Type must be income or expense",
    });
  }

    if (amount <= 0) {
    return res.status(400).json({
      error: "Amount must be positive",
    });
  }
  
  next();
};

module.exports = validateRecord;