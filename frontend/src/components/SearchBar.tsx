import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the search logic (to be implemented later)
    console.log('Search query:', query);

    // Clear the search input after submitting (optional)
    setQuery('');
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
