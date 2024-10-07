import React, { useEffect, useState } from 'react';

interface Comment {
  _id: string;
  content: string;
  author: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  // Fetch comments from the API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/comments');
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  // Handle adding a new comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return; // Prevent empty comments

    try {
      const response = await fetch('http://localhost:5000/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment, author: 'Anonymous' }), // Change 'Anonymous' to actual author if needed
      });

      if (!response.ok) {
        throw new Error('Failed to add comment');
      }

      const addedComment = await response.json();
      setComments((prevComments) => [...prevComments, addedComment]);
      setNewComment(''); // Clear the input after submission
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="comment-section mt-4">
      <h3 className="text-xl font-semibold mb-2">Comments</h3>
      <ul className="space-y-2">
        {comments.map((comment) => (
          <li key={comment._id} className="p-2 border border-gray-300 rounded-md">
            <strong>{comment.author}</strong>: {comment.content}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="border border-gray-300 rounded-md p-2"
        />
        <button onClick={handleAddComment} className="ml-2 bg-blue-500 text-white rounded-md p-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
