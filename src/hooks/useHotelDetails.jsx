import { useEffect, useState } from "react";

const useHotelDetails = (hotelId) => {
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const url = `https://travel-tour-server-eight.vercel.app/hotels/${hotelId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setHotel(data));
    }, [hotelId]);
    return [hotel];
};

export default useHotelDetails;
