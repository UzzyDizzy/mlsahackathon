const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());  // Parse JSON requests
app.use(cors());  // Enable CORS for frontend communication

// MongoDB connection URL (replace it with your MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/yourdbname';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Sample JSON data endpoint
app.get('/api/data', (req, res) => {
  const sampleData = {
    message: "Welcome to the backend!",
    data: [
      { id: 1, name: "Item 1", description: "Description for Item 1" },
      { id: 2, name: "Item 2", description: "Description for Item 2" }
    ]
  };
  res.json(sampleData);
});

// Default route
app.get('/', (req, res) => {
  res.send('Backend server running...');
});

// Port and server start
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
