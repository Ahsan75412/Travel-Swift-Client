import { useEffect, useState } from "react";

const useHotelDetails = (hotelId) => {
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const url = `http://localhost:5000/hotels/${hotelId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setHotel(data));
    }, [hotelId]);
    return [hotel];
};

export default useHotelDetails;
