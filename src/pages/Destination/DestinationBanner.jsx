// import React, { useState } from 'react';
// import axios from 'axios';




// const DestinationBanner = ({ onSearchResults }) => {

//     const [name, setName] = useState('');
//     const [location, setLocation] = useState('');


//     console.log(name)
//     console.log(location)



//     const handleSearch = async () => {
//         try {
//             //   const response = await axios.get(`http://localhost:5000/hotels?name=${name}&destination=${location}`);
//             let response = null;

//             if (location) {
//                 response = await axios.get(`http://localhost:5000/hotels?search=${location}&type=location`);
//             }

//             if (name) {
//                 response = await axios.get(`http://localhost:5000/hotels?search=${name}&type=name`);
//             }

//             const searchData = response.data;
//             console.log(searchData)
//             onSearchResults(searchData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             onSearchResults([]);
//         }
//     };






//     return (
//         <div>
//             <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/wh71zSp/Rectangle-1.png)" }}>
//                 <div className="hero-overlay bg-opacity-50  text-white bg-black"></div>
//                 <div className="hero-content flex-col lg:flex-row">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl text-white font-bold">Hello Destination</h1>
//                         <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" placeholder="Search Hotel Name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Location</span>
//                                 </label>
//                                 <input type="text" placeholder="Search your destination" className="input input-bordered" value={location} onChange={(e) => setLocation(e.target.value)} />
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DestinationBanner;








import React, { useState } from 'react';
import axios from 'axios';

const DestinationBanner = ({ onSearchResults }) => {
  const [searchType, setSearchType] = useState(''); // 'name' or 'location'
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      let response = null;

      if (searchType === 'location') {
        response = await axios.get(`http://localhost:5000/hotels?search=${searchTerm}&type=location`);
      } else if (searchType === 'name') {
        response = await axios.get(`http://localhost:5000/hotels?search=${searchTerm}&type=name`);
      }

      const searchData = response.data;
      console.log(searchData);
      onSearchResults(searchData);
    } catch (error) {
      console.error('Error fetching data:', error);
      onSearchResults([]);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/wh71zSp/Rectangle-1.png)" }}>
        <div className="hero-overlay bg-opacity-50 text-white bg-black"></div>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl pt-10 md:text-2xl  text-white font-bold">Mystical Marvels and Cultural Charms</h1>
            <p className="py-6 text-white">
            Embark on a journey to Dhaka, the beating heart of Bangladesh, where centuries-old traditions coexist with modern dynamism. This bustling metropolis is a gateway to a land of mystical marvels and cultural charms, offering a tapestry of experiences that seamlessly blend history, spirituality, and contemporary vibrancy.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Search Type</span>
                </label>
                <div className="relative">
                  <select
                    className="select select-bordered w-full pr-16 font-semibold"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                  >
                    <option  value="">Select Search Type</option>
                    <option value="name">Search by Name</option>
                    <option value="location">Search by Location</option>
                  </select>
                  <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
                    <svg className="text-gray-500 h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path
                        d="M10 12.583l4.95-4.95a1 1 0 011.414 0l2.828 2.828a1 1 0 010 1.414l-8.486 8.485a1 1 0 01-1.414 0L1.636 11.01a1 1 0 010-1.414l2.829-2.828a1 1 0 011.414 0L10 12.583z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{searchType === 'name' ? 'Hotel Name' : 'Destination'}</span>
                </label>
                <input
                  type="text"
                  placeholder={`Search ${searchType === 'name' ? 'Hotel Name' : 'Destination'}`}
                  className="input input-bordered"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="button" className="btn btn-primary" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationBanner;
