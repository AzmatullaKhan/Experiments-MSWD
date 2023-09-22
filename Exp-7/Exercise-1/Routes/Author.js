const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.post('/authors', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add author.' });
  }
});

module.exports = router;
