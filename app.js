const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Finance Backend Running");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Database connection
const connectDB = require("./config/db");

connectDB();

//routes connection
const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

//recored routes
const recordRoutes = require("./routes/recordRoutes");
app.use("/records", recordRoutes);

const summaryRoutes = require("./routes/summaryRoutes");
app.use("/summary", summaryRoutes);

//error handler 
const errorHandler = require("./middleware/errorHandler");

// after all routes
app.use(errorHandler);

