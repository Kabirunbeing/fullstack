import React from 'react';

const ReactionButtons: React.FC = () => {
  const handleReaction = (reaction: string) => {
    // Handle the reaction (e.g., send to backend)
    console.log(`User reacted with: ${reaction}`);
  };

  return (
    <div className="flex space-x-2 mt-2">
      <button
        onClick={() => handleReaction('like')}
        className="flex items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
      >
        👍 Like
      </button>
      <button
        onClick={() => handleReaction('love')}
        className="flex items-center bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition duration-200"
      >
        ❤️ Love
      </button>
      <button
        onClick={() => handleReaction('laugh')}
        className="flex items-center bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-200"
      >
        😂 Laugh
      </button>
    </div>
  );
};

export default ReactionButtons;
