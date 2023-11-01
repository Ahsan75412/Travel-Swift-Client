import { useEffect, useState } from "react";

import {  useParams , useNavigate  } from "react-router-dom";

import HotelShow from "../../components/hotelShow/hotelShow";
import { VscLocation } from "react-icons/vsc";




const HotelDetails = () => {


    const { hotelId } = useParams();

    const [hotel, setHotel] = useState({});
   
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState("");
    const navigate = useNavigate(); // Use 'useNavigate' from 'react-router-dom'

    // useEffect(() => {
    //     setLoading(true);
    //     fetch(
    //         `http://localhost:5000/hotels/${hotelId}`
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setHotel(data);
    //             setQuantity(data.availableQty);
    //             setLoading(false);
    //         });
    // }, []);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/hotels/${hotelId}`);
                const data = await response.json();
                setHotel(data);
                setQuantity(data.availableQty);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching hotel details:", error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    const handleBookNow = () => {
        // Navigate to BookingInfo with props
        navigate(`/booking`, { state: { hotel } });
       
    };

    return (
        <div className="mt-[140px] p-5  ">
            <div className="lg:flex">
                <div className="item-center lg:w-1/2">
                    <HotelShow></HotelShow>
                </div>

            </div>
            <div className="card bg-base-100 shadow-xl">

                {/* <figure className="lg:w-1/2 md:w-5 p-5"></figure> */}
                <div className="card-body">
                    <h2 className="card-title pb-5">{hotel.name}</h2>
                    <div className="flex">
                        <div className=' text-yellow-600 font-bold'>
                            <VscLocation></VscLocation>
                        </div>
                        <div>
                            <p className='-mt-1'>{hotel.location}</p>
                        </div>
                    </div>
                    <p className="ml-2 ">{hotel.description}</p>
                    <p className="ml-2 ">Available-Rooms: {hotel.availableQty}</p>

                    <p className=" font-bold pb-5 ml-2">Price: ${hotel.price} /night</p>

                    <div className="card-actions">
                        <p className="btn btn-outline btn-secondary font-bold text-black" onClick={handleBookNow}>
                            Book Now
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;



