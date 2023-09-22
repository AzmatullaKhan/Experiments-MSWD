const express = require('express');
const jwt=require('jsonwebtoken');

const app=express();

app.use(express.json())
const port=3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
// Function to generate a refresh token
const generateRefreshToken = (user) => {
    const refreshToken = jwt.sign({ userId: user.id }, 'refresh_secret_key', { expiresIn: '7d' }); // Expires in 7 days
    // Store refreshToken in the database with user mapping
    // Example: refreshTokenModel.create({ userId: user.id, token: refreshToken });
    return refreshToken;
  };
  
  app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const accessToken = jwt.sign({ username }, 'access_secret_key', { expiresIn: '1h' });
  
      // Generate a refresh token
      const refreshToken = generateRefreshToken(user);
  
      // Create a new user with access and refresh tokens
      const newUser = new User({
        username,
        password, // You should hash the password in a real application
        accessToken,
        refreshToken,
      });
  
      await newUser.save();
  
      res.json({ message: 'Registration successful', accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  });
  
  // Refresh Token Route
  app.post('/refresh', (req, res) => {
    const { refreshToken } = req.body;
  
    // Verify the refresh token
    jwt.verify(refreshToken, 'refresh_secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid refresh token' });
      }
      // Generate a new access token if the refresh token is valid
      const newAccessToken = jwt.sign({ userId: decoded.userId }, 'access_secret_key', { expiresIn: '30m' }); // Expires in 30 minutes
  
      res.json({ accessToken: newAccessToken });
    });
  });
  