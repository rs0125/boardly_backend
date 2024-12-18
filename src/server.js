const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
//const connectDB = require('./config/db');

const app = express();
app.use(express.json());

// Connect to MongoDB
//connectDB();

// Port
//const PORT = process.env.PORT
PORT = 3000

const userRouter = require("./routes/user")
app.use("/users", userRouter)

const authRouter = require("./routes/auth")
app.use("/api/auth", authRouter)



// Test Route
app.get('/', (req, res) => res.send('API is running!'));

app.get('/users', (req, res) => res.send('API is running!'));


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});