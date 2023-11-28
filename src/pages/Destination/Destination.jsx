import React, { useState } from 'react';
import DestinationBanner from './DestinationBanner';
import SearchResults from './SearchResults';



const Destination = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    return (
        <div>
            <DestinationBanner onSearchResults={handleSearchResults}></DestinationBanner>


            {/* Display the search results using another component */}
            <SearchResults results={searchResults} />
        </div>
    );
};

export default Destination;