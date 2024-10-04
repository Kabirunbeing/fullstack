import React from 'react';

const PostDetail: React.FC = () => {
  const post = {
    title: 'Bug in State Management',
    author: 'John Doe',
    date: '2024-09-25',
    content: `I am facing an issue with my state management. 
    The component is not re-rendering when the state updates. 
    Here’s my code:
    
    \`\`\`jsx
    import React, { useState } from 'react';

    const Counter = () => {
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };

    export default Counter;
    \`\`\`
    
    Any help would be appreciated!`,
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-1">Posted by {post.author} on {post.date}</p>
      <hr className="my-4" />
      <div className="text-gray-800 mb-4 whitespace-pre-wrap">
        {post.content}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
        <div className="border border-gray-300 rounded-lg p-2">
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
