import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Post {
  _id: string;
  title: string;
  content: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (id: string) => {
    navigate(`/posts/${id}`); 
  };

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li 
              key={post._id} 
              className="p-4 border border-gray-300 rounded-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" 
              onClick={() => handlePostClick(post._id)} // Add onClick handler
            >
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
