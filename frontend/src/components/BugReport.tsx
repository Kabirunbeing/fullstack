import React, { useState } from 'react';

const BugReport: React.FC = () => {
  const [code, setCode] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle bug report submission logic (to be implemented later)
    console.log('Buggy code submitted:', code);
    console.log('Query submitted:', query);
    
    // Clear the inputs after submission
    setCode('');
    setQuery('');
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Report a Bug</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="code" className="block text-gray-700">
            Buggy Code Snippet
          </label>
          <textarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={6}
            placeholder="Paste your buggy code here..."
            className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="query" className="block text-gray-700">
            Your Query
          </label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your issue..."
            className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BugReport;
