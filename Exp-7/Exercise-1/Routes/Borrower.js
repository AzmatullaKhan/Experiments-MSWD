const express = require('express');
const router = express.Router();
const Borrower = require('../models/borrower');

router.post('/borrowers', async (req, res) => {
  try {
    const borrower = new Borrower(req.body);
    await borrower.save();
    res.status(201).json(borrower);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add borrower.' });
  }
});