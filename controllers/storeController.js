const store = require("../models/storeModel");

const getStores = async (req, res) => {
  const stores = await store.find();
  if (!stores) {
    res.status(400);
    throw new Error("No Goals Found");
  }
  res.status(200).json({ products: stores });
};

const getStore = async (req, res) => {
  const { id } = req.params;
  const stored = await store.findById(id);
  if (!stored) {
    res.status(400);
    throw new Error("No Goal Found");
  }
  res.status(200).json({ product: stored });
};

const createStore = async (req, res) => {
  const newStore = new store(req.body);
  try {
    await newStore.save();
    res.status(201).json(newStore);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateStore = async (req, res) => {
  const { id } = req.params;
  const updatedStore = req.body;
  try {
    const storeUpdate = await store.findByIdAndUpdate(id, updatedStore, {
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
