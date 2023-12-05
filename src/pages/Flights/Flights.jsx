import React, { useEffect, useState } from 'react';


const Flights = () => {
    const [data, setData] = useState(null);


    // const API = `https://airlabs.co/api/v9/flights?api_key=ca8d9047-20ab-47de-ae81-be9e2cd4be46`;
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(API);
          const newData = await response.json();
          setData(newData);
          console.log(newData)
        };
    
        fetchData();
      }, []);
    return (
        <div>
            <h1>i'm from rest flight</h1>
        </div>
    );
};

export default Flights;