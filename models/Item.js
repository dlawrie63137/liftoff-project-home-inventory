const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  serial_number: {
    type: String,
    required: true
  },
  year_acquired: {
    type: String,
    required: true
  },
  purchase_price: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("items", ItemSchema);