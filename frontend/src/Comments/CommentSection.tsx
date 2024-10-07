import React, { useEffect, useState } from 'react';

interface Comment {
  _id: string;
  commentText: string;
  author: string;
  postId: string;
  createdAt: string;
}

const CommentSection: React.FC = () => {
  const postId = 'YOUR_POST_ID_HERE'; // Hardcode the postId or retrieve it in another way
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch comments for the specified post
  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}/comments`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Handle comment submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!commentText || !author) {
      alert('Please provide both author and comment text.');
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentText,
          author,
          postId,
        }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments((prevComments) => [...prevComments, newComment]);
        setCommentText('');
        setAuthor('');
      } else {
        console.error('Error adding comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  // Fetch comments on component mount
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          required
        />
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Your comment"
          required
        />
        <button type="submit">Submit Comment</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <strong>{comment.author}</strong>: {comment.commentText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
