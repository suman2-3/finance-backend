const asyncHandler = require("../middleware/asyncHandler");
const recordService = require("../services/recordService");

// CREATE
exports.createRecord = asyncHandler(async (req, res) => {
  const record = await recordService.createRecord(req.body);
  res.json(record);
});

// GET
exports.getRecords = asyncHandler(async (req, res) => {
  const records = await recordService.getRecords(req.query);
  res.json(records);
});

// UPDATE
exports.updateRecord = asyncHandler(async (req, res) => {
  const record = await recordService.updateRecord(
    req.params.id,
    req.body
  );

  if (!record) {
    const error = new Error("Record not found");
    error.statusCode = 404;
    throw error;
  }

  res.json(record);
});

// DELETE
exports.deleteRecord = asyncHandler(async (req, res) => {
  const record = await recordService.deleteRecord(req.params.id);

  if (!record) {
    const error = new Error("Record not found");
    error.statusCode = 404;
    throw error;
  }

  res.json({ message: "Deleted successfully" });
});