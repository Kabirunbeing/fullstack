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
        setTitle(''); // Clear title
        setContent(''); // Clear content
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
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {message && <p>{message}</p>}
      {responseData && <p>Response: {JSON.stringify(responseData)}</p>}
    </div>
  );
};

export default NewPost;
