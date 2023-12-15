// models/dogHandler.js

const mongoose = require('mongoose');

const dogHandlerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  
});

module.exports = mongoose.model('DogHandler', dogHandlerSchema);
