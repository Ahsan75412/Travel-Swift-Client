import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-8">Search Results</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {results.map((result) => (
          <li key={result._id} className="border p-4 rounded shadow">
            <img src={result.image} alt="" />
            <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
            <p className="text-gray-700">{result.location}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
