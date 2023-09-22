const mongoose = require('mongoose');

// Create a schema for comments
const commentSchema = new mongoose.Schema({
  commenterName: String,
  commentText: String,
  blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }
});

// Create a schema for blog posts
const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

// Create models for both schemas
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { BlogPost, Comment };
