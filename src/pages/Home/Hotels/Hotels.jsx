import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hotel from "../Hotel/Hotel";
import { Helmet } from "react-helmet-async";
import SemiCover from "../../Shared/SemiCover/SemiCover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Hotels = () => {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();


    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/hotels")
            .then((res) => res.json())
            .then((data) => {
                setHotels(data);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div>
            <Helmet>
                <title>Travel-Swift | Home</title>
            </Helmet>
{/* 
            {
                location.pathname === "/hotels" ? (
                    <SemiCover></SemiCover>
                ) : (
                    <></>
                )
            } */}

            {location.pathname === "/" ? (
                <div className="flex justify-between py-20 flex-col lg:flex-row px-20">
                    <SectionTitle
                        heading={"Featured Hotels Deals"}
                        subHeading={"Everything You Want and More"}
                    ></SectionTitle>
                    {/*<Link to="/hotels" className="link link-primary ">
                        SEE MORE
                    </Link>  */}
                </div>
            ) : (
                <SectionTitle
                    heading={"Featured Hotels Deals"}
                    subHeading={"Everything You Want and More"}

                ></SectionTitle>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 lg:px-20">
                {location.pathname === "/" || location.pathname === "/home "
                    ? hotels
                        .slice(0, 4)
                        .map((hotel) => (
                            <Hotel
                                key={hotel._id}
                                hotel={hotel}
                            ></Hotel>
                        ))

                    : location.pathname === "/hotels"
                        ? hotels.map((hotel) => (

                            <Hotel
                                key={hotel._id}
                                hotel={hotel}
                            ></Hotel>
                        ))
                        : hotels.map((hotel) => (
                            <Hotel
                                key={hotel._id}
                                hotel={hotel}
                            ></Hotel>
                        ))}
            </div>
        </div>
    );
};

export default Hotels;
