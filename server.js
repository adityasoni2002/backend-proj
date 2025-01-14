const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000; 
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/productsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Mongoose schema and model for tasks
const taskSchema = new mongoose.Schema({
  Title: String,
  Price: Number,
  Description: String,
  Category: String,
  Image: String,
  Sold: Boolean,
  IsSale: Boolean,
  DateOfSale: Date,
});

const Task = mongoose.model("Task", taskSchema);

// API route to fetch tasks with optional filtering
app.get("/task", async (req, res) => {
  try {
    const { category } = req.query;

    // Build query object based on filters
    let query = {};
    if (category) {
      query.Category = category; // Add category filter if provided
    }

    const tasks = await Task.find(query); // Fetch tasks based on the query
    res.json(tasks);
  } catch (error) {
    console.log("Error fetching tasks:", error);
    res.status(500).send("Error fetching tasks");
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
