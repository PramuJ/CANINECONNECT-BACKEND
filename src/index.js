
const express = require('express');
const mongoose = require('mongoose');
const dogHandlerRoutes = require('./routes/dogHandlerRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// Use Dog Handler routes
app.use('/dogHandlers', dogHandlerRoutes);

// Set up server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

