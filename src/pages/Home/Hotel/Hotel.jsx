import React from "react";
import { Helmet } from "react-helmet-async";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import hotelImg from '../../../assets/Hotels/Room/bed-2.jpg';

const Hotel = ({ hotel, children }) => {
    const { name, location, hotel_img, description, price } = hotel;
    return (
        
        <div>
            <div className="card w-full bg-gray-50 shadow-xl border ">
                <figure className="px-10 pt-10">
                    <img src={hotel_img} alt="" className="rounded-xl w-[400px] h-[300px]" />
                </figure>
                <div className="card-body items-center text-center">
                    {/* <h4>{category}</h4> */}
                    <h2 className="card-title">{name.slice(0, 18)}...</h2>
                    <p>{description.slice(0, 90)}...</p>
                    <h6><VscLocation></VscLocation> {location}</h6>
                    <p className='font-bold'>${price} / night</p>
                    {/* <h6 className="text-neutral font-bold">Price: ${price}</h6> */}
                    <div className="card-actions">
                        {/* TODO:     to={`/product/${product._id}`} */}
                        <Link >
                            <button className="btn btn-primary">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Hotel;
