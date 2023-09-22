const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  publishedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

module.exports = mongoose.model('Author', authorSchema);