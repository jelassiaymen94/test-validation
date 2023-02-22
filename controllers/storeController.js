const store = require("../models/storeModel");

const getStores = async (req, res) => {
  // get all stores from DB
  const stores = await store.find();
  // if no stores found, send error
  if (!stores) {
    res.status(400);
    throw new Error("No stores found");
  }
  // send stores as JSON
  res.status(200).json({ stores: stores });
};

const getStore = async (req, res) => {
  // Get id from req.params
  const { id } = req.params;
  // Find the product by id
  const stored = await store.findById(id);
  // If the product is not found, send a 400 status code and error message
  if (!stored) {
    res.status(400);
    throw new Error("No product found");
  }
  // If product is found, send a 200 status code and json object with product data
  res.status(200).json({ product: stored });
};

const createStore = async (req, res) => {
  // Create a new store from the request body
  const newStore = new store(req.body);
  try {
    // Save the store
    await newStore.save();
    // Send the response with status 201 and the new store
    res.status(201).json(newStore);
  } catch (error) {
    // Send the response with status 409 and the error message
    res.status(409).json({ message: error.message });
  }
};

const updateStore = async (req, res) => {
  const { id } = req.params;
  const updatedStore = req.body;
  try {
    await store.findByIdAndUpdate(id, updatedStore, {
      new: true,
    });
    res.status(200).json({ message: "Modified!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    await store.findByIdAndRemove(id);
    res.status(200).json({ message: "Deleted!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getStores,
  getStore,
  createStore,
  updateStore,
  deleteStore,
};
