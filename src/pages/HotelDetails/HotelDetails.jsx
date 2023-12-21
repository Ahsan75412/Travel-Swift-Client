import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HotelShow from "../../components/hotelShow/hotelShow";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";







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
        <div className="mt-[140px] p-5 md:px-8 pb-24">
            <div className="lg:flex">
                <div className="item-center lg:w-1/2">
                    <HotelShow></HotelShow>
                </div>

            </div>
            <div className="card bg-base-100 shadow-xl py-5">

                {/* <figure className="lg:w-1/2 md:w-5 p-5"></figure> */}
                <div className="card-body">
                    <h2 className="card-title pb-5">{hotel.name}</h2>
                    <div className="flex">
                        <div className=' text-yellow-600 font-bold'>
                            <VscLocation></VscLocation>
                        </div>
                        <div>
                            <p className='-mt-1 font-medium'>{hotel.location}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <MdOutlineDescription className="w-8 mt-1"></MdOutlineDescription>
                        <p className="ml-2 ">{hotel.description}</p>
                    </div>

                    <div className="flex">
                        <MdOutlineEventAvailable className=" mt-1"></MdOutlineEventAvailable>
                        <p className="ml-2 font-semibold">Available-Rooms: {hotel.availableQty}</p>
                    </div>

                    <div className="flex">
                        <IoPricetagsOutline className=" mt-1"></IoPricetagsOutline>
                        <p className=" font-bold pb-5 ml-2">Price: ${hotel.price} /night</p>

                    </div>


                    <div className="card-actions">
                        <button className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-[#FF9466] hover:bg-[#d57352] text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" onClick={handleBookNow}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;



