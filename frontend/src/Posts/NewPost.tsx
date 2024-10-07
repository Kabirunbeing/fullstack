import React, { useState, FormEvent } from 'react';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage('Title and content are required');
      return;
    }
    const postData = { title, content };
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      setLoading(false);
      if (response.ok) {
        const result = await response.json();
        setResponseData(result);
        setMessage('Post created successfully');
        setTitle('');
        setContent('');
      } else {
        const errorResponse = await response.json();
        setMessage(`Error creating post: ${errorResponse.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setMessage('Error connecting to the backend');
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-700"
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 h-32 resize-none text-gray-700"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 bg-gray-800 text-white rounded ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <svg className="animate-spin inline-block mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" strokeLinecap="round" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z" fill="white" className="opacity-75" />
                </svg>
              ) : (
                <svg className="inline-block mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 6.75L16.5 12m0 0l-6 5.25M16.5 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {loading ? 'Posting...' : 'Post'}
            </button>
          </div>
        </form>
        {message && (
          <div className={`mt-4 p-3 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
        {responseData && (
          <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded">
            <h3 className="font-semibold text-gray-800">Comments:</h3>
            <pre className="text-sm text-gray-600 mt-2">{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPost;
