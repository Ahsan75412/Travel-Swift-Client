import React from "react";
import { useQuery } from "react-query";
import HotelRow from "./HotelRow";
import Loading from "../../Shared/Loading/Loading";

const ManageHotels = () => {
    const {
        data: hotels,
        isLoading,
        refetch,
    } = useQuery("hotels", () =>
        fetch("http://localhost:5000/hotels", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="p-10 mb-10">
            <h1 className="text-center font-bold text-2xl p-10">
                Manage Hotels
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price per unit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((hotel, index) => (
                            <HotelRow
                                key={hotel._id}
                                hotel={hotel}
                                index={index}
                                refetch={refetch}
                            ></HotelRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageHotels;