// ManageHostRequests.jsx

import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import HostRequestRow from "./HostRequestRow";

const ManageHostRequests = () => {
    const {
        data: hostRequests,
        isLoading,
        refetch,
    } = useQuery("hostRequests", () =>
        fetch("https://travel-tour-server-eight.vercel.app/allHostReq").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="p-10 mb-10">
            <h1 className="text-center font-bold text-2xl p-10">
                Manage Host Requests
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Address</th>
                            {/* <th>Description</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hostRequests.map((hostRequest, index) => (
                            <HostRequestRow
                                key={hostRequest._id}
                                hostRequest={hostRequest}
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

export default ManageHostRequests;
