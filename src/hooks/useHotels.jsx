import { useEffect, useState } from "react";


const useHotels = () => {
    const [hotel, setHotel] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => {
                setHotel(data);
                setLoading(false)
            })

    }, [])

    return [hotel, loading]

}

export default useHotels;