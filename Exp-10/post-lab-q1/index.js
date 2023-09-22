// app.js

const express = require('express');
const bodyParser = require('body-parser');
const users = require('./model/User.js'); // Import the user data from User.js

const app = express();
const port = 3000;

app.use(bodyParser.json());

// GET route to retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST route to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

// PUT route to update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      users[i] = { ...users[i], ...updatedUser };
      return res.json(users[i]);
    }
  }

  res.status(404).json({ error: 'User not found' });
});

// DELETE route to delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
    return res.json({ message: 'User deleted' });
  }

  res.status(404).json({ error: 'User not found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
