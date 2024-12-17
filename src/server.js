const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Port
const PORT = process.env.PORT

// Test Route
app.get('/', (req, res) => res.send('API is running!'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});