const express = require('express');
const mongoose = require('mongoose');
const { BlogPost, Comment } = require('./models'); // Assuming your models are in a separate file

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blogPlatform', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Insert a new blog post
app.post('/blogposts', async (req, res) => {
  try {
    const newBlogPost = new BlogPost(req.body);
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new blog post' });
  }
});

// Retrieve all blog posts sorted by date
app.get('/blogposts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().sort({ date: -1 });
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blog posts' });
  }
});

// Add a new comment to a specific blog post
app.post('/comments/:blogPostId', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.blogPostId);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    const newComment = new Comment(req.body);
    newComment.blogPost = blogPost._id;
    await newComment.save();

    blogPost.comments.push(newComment);
    await blogPost.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add a new comment' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
