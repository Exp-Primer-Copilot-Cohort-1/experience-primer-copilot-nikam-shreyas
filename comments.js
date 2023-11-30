// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create Express App
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create comments array
const commentsByPostId = {};

// Create route to get comments
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create route to create comments
app.post('/posts/:id/comments', (req, res) => {
  // Create random id
  const commentId = randomBytes(4).toString('hex');
  // Get the comment
  const { content } = req.body;
  // Get the comments from the post
  const comments = commentsByPostId[req.params.id] || [];
  // Push the comment to the comments array
  comments.push({ id: commentId, content });
  // Update the comments array for the post
  commentsByPostId[req.params.id] = comments;
  // Send the comment back
  res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});