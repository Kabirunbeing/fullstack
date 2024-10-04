import React, { useState } from 'react';

const UserBadge: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const user = {
    name: 'John Doe',
    role: 'Frontend Developer',
    status: 'Active',
    avatar: 'https://via.placeholder.com/50', // Placeholder for avatar image
    profileLink: '/profile/johndoe', // Example profile link
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="flex items-center p-4 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg bg-white">
      <a href={user.profileLink}>
        <img
          src={user.avatar}
          alt={`${user.name}'s Avatar`}
          className="w-14 h-14 rounded-full border-2 border-blue-500 shadow-md"
        />
      </a>
      <div className="ml-4">
        <a href={user.profileLink}>
          <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {user.name}
          </h3>
        </a>
        <p className="text-sm text-gray-600">{user.role}</p>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full mt-1 ${
            user.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'
          }`}
        >
          {user.status}
        </span>
        <button
          onClick={toggleFollow}
          className={`mt-2 px-4  rounded-full font-semibold text-white transition-colors duration-200 ${
            isFollowing ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default UserBadge;
