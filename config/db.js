const mongoose = require("mongoose"); // Import mongoose module

mongoose.set("strictQuery", true); // Set strictQuery to true

const connectDB = async () => {
  // Create an async function called connectDB
  try {
    // Try to connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI); // Connect to MongoDB
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Log success message
  } catch (error) {
    // If connecting fails, catch error
    console.log(error); // Log error
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB; // Export connectDB
