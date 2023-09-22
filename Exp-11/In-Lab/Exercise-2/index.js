const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'users';

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

app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/',async(req,res)=>{
  res.send('Hello World');
})
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
