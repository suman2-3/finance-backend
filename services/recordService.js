const Record = require("../models/Record");

// Create
exports.createRecord = async (data) => {
  return await Record.create(data);
};

// Get with filters + pagination
exports.getRecords = async (query) => {
  const { type, category, startDate, endDate, page = 1, limit = 5 } = query;

  let filter = {};

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  const skip = (page - 1) * limit;

  return await Record.find(filter).skip(skip).limit(Number(limit));
};

// Update
exports.updateRecord = async (id, data) => {
  return await Record.findByIdAndUpdate(id, data, { new: true });
};

// Delete
exports.deleteRecord = async (id) => {
  return await Record.findByIdAndDelete(id);
};