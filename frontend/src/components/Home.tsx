import React from 'react';
import PostFeed from './PostFeed';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to DevCollab</h1>
      <p className="text-gray-600 mb-4">
        A platform where developers can collaborate, post queries, share snippets, and help each other grow.
      </p>
      <div className="border-t border-gray-300 pt-4">
        <h2 className="text-2xl font-semibold text-gray-800">Latest Discussions</h2>
        <PostFeed />
      </div>
    </div>
  );
};

export default Home;
