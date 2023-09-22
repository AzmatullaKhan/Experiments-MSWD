const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  availability: Boolean,
});

module.exports = mongoose.model('Book', bookSchema);
