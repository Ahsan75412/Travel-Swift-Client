import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import HotelShow from "../../components/hotelShow/hotelShow";
import { VscLocation } from "react-icons/vsc";
import Appointment from "../../components/Calender/Appointment";
// import PurchaseModal from "./PurchaseModal";

const HotelDetails = () => {
    const { hotelId } = useParams();

    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch(
            `http://localhost:5000/hotels/${hotelId}`
        )
            .then((res) => res.json())
            .then((data) => {
                setHotel(data);
                setQuantity(data.availableQty);
                setLoading(false);
            });
    }, []);

    return (
        <div className="mt-[140px] p-5  ">
            <div className="lg:flex">
                <div className="item-center lg:w-1/2">
                    <HotelShow></HotelShow>
                </div>
                <div className="ml-10">
                    <Appointment></Appointment>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">

                {/* <figure className="lg:w-1/2 md:w-5 p-5"></figure> */}
                <div className="card-body">
                    <h2 className="card-title">{hotel.name}</h2>
                    <div className="flex">
                        <div className=' text-yellow-600'>
                            <VscLocation></VscLocation>
                        </div>
                        <div>
                            <p className='-mt-1'>{hotel.location}</p>
                        </div>
                    </div>
                    <p className="ml-2">{hotel.description}</p>

                    <p className=" font-bold ml-2">Price: ${hotel.price} /night</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;