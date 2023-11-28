import React, { useState } from 'react';
import axios from 'axios';





const DestinationBanner = ({ onSearchResults }) => {
    
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');






  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/hotels?name=${name}&destination=${location}`);
     
      const searchData = response.data;
      console.log(searchData)
      onSearchResults(searchData);
    } catch (error) {
      console.error('Error fetching data:', error);
      onSearchResults([]);
    }
  };


  

  

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/wh71zSp/Rectangle-1.png)" }}>
        <div className="hero-overlay bg-opacity-50  text-white bg-black"></div>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Search Hotel Name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input type="text" placeholder="Search your destination" className="input input-bordered" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div className="form-control mt-6">
                <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationBanner;
