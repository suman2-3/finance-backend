const express = require("express");
const router = express.Router();

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

const checkRole = require("../middleware/roleMiddleware");
const validateRecord = require("../middleware/validate");

// Admin only → create/update/delete

// create 
router.post("/", checkRole(["admin"]), validateRecord, createRecord);

//update
router.put("/:id", checkRole(["admin"]), updateRecord);

//delete
router.delete("/:id", checkRole(["admin"]), deleteRecord);

// All roles can view
// GET (with pagination + filters)
router.get("/", checkRole(["admin", "analyst", "viewer"]), getRecords);

module.exports = router;