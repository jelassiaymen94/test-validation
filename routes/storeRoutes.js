const express = require("express");
const router = express.Router();
const { getStores, getStore, createStore, updateStore, deleteStore } = require("../controllers/storeController");

router.route("/").get(getStores).post(createStore);

router.route("/:id").get(getStore).put(updateStore).delete(deleteStore);

module.exports = router;
