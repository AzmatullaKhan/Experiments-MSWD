// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

const booksRouter = require('./Routes/BookRoute');
const authorsRouter = require('./Routes/Author');
const borrowersRouter = require('./Routes/Borrower');

app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);
app.use('/api/borrowers', borrowersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
