import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-8 mx-8 md:mx-14">Search Results</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16 mx-8 md:mx-14">
        {results.map((result) => (
          // <li key={result._id} className="border p-4 rounded shadow">
          //   <img src={result.image} alt="" />
          //   <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
          //   <p className="text-gray-700">{result.location}</p>
          //   {/* Add more details as needed */}
          // </li>


          <div key={result._id} className="relative group">
            <img
              src={result.image}
              alt="My Image"
              className="rounded-xl object-cover w-[400px] h-[200px] group-hover:opacity-50 transition-opacity duration-300"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <Link to={`/hotel/${result._id}`} className="bg-black font-semibold text-white px-4 py-2 rounded">
                Show Details
              </Link>

            </div>
     
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
