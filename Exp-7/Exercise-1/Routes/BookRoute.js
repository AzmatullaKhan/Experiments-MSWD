const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add book.' });
  }
});

module.exports = router;
