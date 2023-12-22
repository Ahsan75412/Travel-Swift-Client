// import React from "react";
// import { Link } from "react-router-dom";

// // name, location,, description, price 

// const Hotel = ({ hotel, children }) => {
//     const { image = [] , hotelName,category, description, quantity, price, email } = hotel;
//     return (
//         // card w-full bg-gray-50 shadow-xl border 
//         <div>
//             {/* <div className=""> */}
//             {/* TODO: px-10 pt-10 {image[1]}*/}
//             {/* <figure className="">
//                     <Link to={`/hotel/${hotel._id}`}>
//                         <img src={image} alt="" className="rounded-xl object-cover w-[400px] h-[200px] " />
//                     </Link>

//                 </figure> */}

//             <div className="relative group">
//                 <img
//                     src={image}
//                     alt="My Image"
//                     className="rounded-xl object-cover w-[400px] h-[200px] group-hover:opacity-50 transition-opacity duration-300"
//                 />

//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
//                     <Link to={`/hotel/${hotel._id}`} className="bg-black font-semibold text-white px-4 py-2 rounded">
//                         Show Details
//                     </Link>

//                 </div>
//                 {children}
          
//             </div>

         
         

//             {/* <div className="card-body items-center text-center">
//             <h4>{category}</h4>
//             <h2 className="card-title">{name.slice(0, 18)}...</h2>
//             <p>{description.slice(0, 90)}...</p>
//             <h6><VscLocation></VscLocation> {location}</h6>
//             <p className='font-bold'>${price} / night</p>
//             <h6 className="text-neutral font-bold">Price: ${price}</h6> */}


//             {/* <div className="card-actions">
//                     TODO:     to={`/product/${product._id}`}
//                         <Link to={`/hotel/${hotel._id}`}>
//                             <button className="btn btn-primary">
//                                 Details
//                             </button>
//                         </Link>
//                     </div> */}
//             {/* </div> */}

//             {/* {children}

//             </div> */}

//         </div>
//     );
// };

// export default Hotel;




import React from "react";
import { Link } from "react-router-dom";

const Hotel = ({ hotel, children }) => {
    const { image, name, category, description, price, location } = hotel;

    return (
        <div>
            <div className="relative group">
                <img
                    src={image}
                    alt="Hotel Image"
                    className="rounded-xl object-cover w-[400px] h-[200px] group-hover:opacity-50 transition-opacity duration-300"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/hotel/${hotel._id}`} className="bg-black font-semibold text-white px-4 py-2 rounded">
                        Show Details
                    </Link>
                </div>

                {children}
            </div>
            
            {/* <div className="card-body items-center text-center">
                <h4>{category}</h4>
                <h2 className="card-title">{name.slice(0, 18)}...</h2>
                <p>{description.slice(0, 90)}...</p>
                <h6>Location: {location}</h6>
                <p className='font-bold'>${price} / night</p>
            </div> */}
        </div>
    );
};

export default Hotel;

