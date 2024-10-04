import React from 'react';

const UserProfile: React.FC = () => {
  const user = {
    name: 'John Doe',
    bio: 'A passionate React developer and tech enthusiast.',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    submissions: [
      {
        id: 1,
        title: 'Bug in State Management',
        date: '2024-09-25',
      },
      {
        id: 2,
        title: 'Error Handling in API Calls',
        date: '2024-09-26',
      },
      {
        id: 3,
        title: 'Issue with Component Re-rendering',
        date: '2024-09-27',
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="rounded-full w-32 h-32 mb-4 shadow-md"
      />
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600 text-center mb-4">{user.bio}</p>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Submissions</h3>
      <ul className="w-full space-y-2">
        {user.submissions.map((submission) => (
          <li key={submission.id} className="p-2 border border-gray-300 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">{submission.title}</h4>
            <p className="text-gray-500">Submitted on {submission.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
