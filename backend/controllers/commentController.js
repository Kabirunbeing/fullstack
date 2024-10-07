// controllers/commentController.js
const Comment = require('../models/commentModel');

// Controller to create a comment
exports.createComment = async (req, res) => {
  const { commentText, author, postId } = req.body;

  if (!commentText || !author || !postId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newComment = new Comment({ commentText, author, postId });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Error creating comment' });
  }
};

// Controller to fetch comments by post ID
exports.getCommentsByPostId = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

// Controller to delete a comment
exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Error deleting comment' });
  }
};
