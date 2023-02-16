const express = require("express");
const port = 3000;
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

require("dotenv").config();

app.use(cors());

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", require("./routes/storeRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
