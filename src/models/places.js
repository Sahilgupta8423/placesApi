const mongoose = require("mongoose");
const validator = require("validator");


// defining schema for Place Collection
const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
    unique: [true, "Email is already registered"],
  },
  longitude: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  photo: String,
  
  visitTime: [String]
});

// We will create a new collection

const Place = new mongoose.model("Place", placeSchema);
module.exports = Place;