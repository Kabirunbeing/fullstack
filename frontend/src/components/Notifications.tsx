import React from 'react';

const Notification: React.FC = () => {
  const notifications = [
    { id: 1, message: 'John Doe commented on your post "Bug in State Management".', date: '2024-09-26' },
    { id: 2, message: 'Jane Smith replied to your query "Error Handling in API Calls".', date: '2024-09-27' },
    { id: 3, message: 'New user joined the platform.', date: '2024-09-28' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map(notification => (
          <li key={notification.id} className="p-2 border border-gray-300 rounded-lg">
            <p className="text-gray-800">{notification.message}</p>
            <p className="text-gray-500 text-sm">{notification.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
