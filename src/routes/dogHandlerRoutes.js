// routes/dogHandlerRoutes.js

const express = require('express');
const DogHandler = require('../models/dogHandler');

const router = express.Router();

// Get all Dog Handlers
router.get('/', async (req, res) => {
  try {
    const dogHandlers = await DogHandler.find();
    res.json(dogHandlers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific Dog Handler by ID
router.get('/:id', getDogHandler, (req, res) => {
  res.json(res.dogHandler);
});

// Create a new Dog Handler
router.post('/', async (req, res) => {
  const dogHandler = new DogHandler({
    name: req.body.name,
    specialty: req.body.specialty,
    experience: req.body.experience,
    // Set other fields
  });

  try {
    const newDogHandler = await dogHandler.save();
    res.status(201).json(newDogHandler);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Middleware function to get a Dog Handler by ID
async function getDogHandler(req, res, next) {
  let dogHandler;
  try {
    dogHandler = await DogHandler.findById(req.params.id);
    if (dogHandler == null) {
      return res.status(404).json({ message: 'Dog Handler not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.dogHandler = dogHandler;
  next();
}

module.exports = router;
