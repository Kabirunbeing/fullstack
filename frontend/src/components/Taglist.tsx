import React from 'react';

const TagList: React.FC = () => {
  const tags = ['React', 'JavaScript', 'CSS', 'Node.js', 'API', 'Debugging'];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Tags</h2>
      <div className="flex flex-wrap space-x-2">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;
