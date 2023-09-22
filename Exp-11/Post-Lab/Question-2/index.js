const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'local_database';

mongoose.connect(`${mongoURL}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// POST route to create a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT route to update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE route to delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Async function to handle CRUD operations with error handling
const handleCRUD = async (operation, req, res) => {
  try {
    const result = await operation(); // Perform the CRUD operation
    res.json(result); // Send a successful response
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' }); // Send an error response
  }
};

// POST route to create a new user
app.post('/users', async (req, res) => {
  const createNewUser = async () => {
    const newUser = new User(req.body);
    return await newUser.save();
  };

  handleCRUD(createNewUser, req, res);
});

// PUT route to update a user by ID
app.put('/users/:id', async (req, res) => {
  const updateUserById = async () => {
    return await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  };

  handleCRUD(updateUserById, req, res);
});

// DELETE route to delete a user by ID
app.delete('/users/:id', async (req, res) => {
  const deleteUserById = async () => {
    return await User.findByIdAndDelete(req.params.id);
  };

  handleCRUD(deleteUserById, req, res);
});


const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

