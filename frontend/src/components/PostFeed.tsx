import React from 'react';

const PostFeed: React.FC = () => {
  // Sample posts data (you may later replace this with data fetched from your backend)
  const posts = [
    { id: 1, title: 'How do I integrate MongoDB with React?', author: 'Jane Doe' },
    { id: 2, title: 'Best practices for handling state in React.', author: 'John Smith' },
    { id: 3, title: 'Tips for optimizing performance in React applications.', author: 'Alice Johnson' },
    { id: 4, title: 'How to manage component lifecycle in React.', author: 'Bob Brown' },
  ];

  return (
    <div className="space-y-4 mt-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-600">Posted by {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
