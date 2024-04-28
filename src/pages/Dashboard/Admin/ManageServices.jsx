import React from "react";
import { useQuery } from "react-query";

import Loading from "../../Shared/Loading/Loading";
import ServicesRow from "./ServicesRow";

const ManageServices = () => {
    const {
        data: services,
        isLoading,
        refetch,
    } = useQuery("services", () =>
        fetch("https://travel-tour-server-eight.vercel.app/services", {
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
                Manage your services
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <ServicesRow
                                key={service._id}
                                service={service}
                                index={index}
                                refetch={refetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;
