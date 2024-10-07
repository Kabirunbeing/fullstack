const express = require('express');
const { createComment, getCommentsByPostId, deleteComment } = require('../controllers/commentController');
const router = express.Router();

// Route to create a comment
router.post('/comments', createComment);

// Route to fetch comments by post ID
router.get('/posts/:postId/comments', getCommentsByPostId);

// Route to delete a comment
router.delete('/comments/:commentId', deleteComment);

module.exports = router;
