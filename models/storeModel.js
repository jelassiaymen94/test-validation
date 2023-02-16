const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  inStock: {
    type: Boolean,
  },
});

module.exports = mongoose.model("store", storeSchema);
