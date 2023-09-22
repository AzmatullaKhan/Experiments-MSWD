// app.js

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/experiment12', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a user schema/model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// Registration Route
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Create a JWT token
    const token = jwt.sign({ username }, 'your_secret_key');

    // Create a new user
    const newUser = new User({
      username,
      password, // You should hash the password in a real application
      token,
    });

    await newUser.save();

    res.json({ message: 'Registration successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Login Route




//  EXERCISE-2




app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username and password (you should validate the password properly in a real application)
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Create a JWT token
    const token = jwt.sign({ username }, 'your_secret_key');

    // Update the user's token in the database
    user.token = token;
    await user.save();

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});
