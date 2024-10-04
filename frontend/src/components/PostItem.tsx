import React from 'react';
import ReactionButtons from './ReactionButtons';

const PostItem: React.FC = () => {
  const post = {
    title: 'How do I integrate MongoDB with React?',
    author: 'Jane Doe',
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
      <p className="text-gray-600">Posted by {post.author}</p>
      <ReactionButtons/>
    </div>
  );
};

export default PostItem;
