// Exercise-1
const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/experiment12', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Registration Route with Token Expiration
app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Create a JWT token with a 1-hour expiration time
      const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
  
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
  
  // Login Route with Token Expiration
  app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user by username and password (you should validate the password properly in a real application)
      const user = await User.findOne({ username, password });
  
      if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      // Create a JWT token with a 1-hour expiration time
      const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
  
      // Update the user's token in the database
      user.token = token;
      await user.save();
  
      res.json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ error: 'Login failed' });
    }
  });
  

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed: No token provided' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Authentication failed: Invalid token' });
    }

    // If the token is valid, add the decoded user information to the request object
    req.user = decoded;
    next();
  });
};

// Apply the authentication middleware to routes that require authentication
app.use('/protected', authenticate);

// Welcome route (doesn't require authentication)
app.get('/welcome', (req, res) => {
    res.json({ message: 'Welcome to the public route' });
  });
  

// question-2


app.get('/protected', authenticate, (req, res) => {
    // Check if the token is expired
    jwt.verify(req.user.token, 'your_secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token expired. Please re-authenticate.' });
      }
  
      // Token is valid, continue processing the request
      res.json({ message: 'This is a protected route', user: req.user });
    });
  });
  
  
