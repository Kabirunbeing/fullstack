const express = require('express');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/postController');

// Route to get all posts
router.get('/posts', getAllPosts);

// Route to create a new post
router.post('/posts', createPost);

module.exports = router;
