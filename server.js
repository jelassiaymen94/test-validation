const express = require("express"); // Import express
const port = 3000; // Set port to 3000
const cors = require("cors"); // Import cors

const connectDB = require("./config/db"); // Import connectDB from config/db

const app = express(); // Create new express app

require("dotenv").config(); // Import dotenv

app.use(cors()); // Use cors

connectDB(); // Connect to database

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse JSON bodies

app.use("/api/products", require("./routes/storeRoutes")); // Use storeRoutes for /api/products

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Log port
});
