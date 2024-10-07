// models/commentModel.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commentText: { type: String, required: true },
  author: { type: String, required: true }, // You can also link this to a User model if needed.
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);
