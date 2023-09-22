const mongoose = require('mongoose');

const borrowerSchema = new mongoose.Schema({
  name: String,
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

module.exports = mongoose.model('Borrower', borrowerSchema);