// HostRequestRow.jsx

import React from "react";
import Swal from 'sweetalert2';

const HostRequestRow = ({ hostRequest, index, refetch }) => {
    const { name, email, category, address, description, _id } = hostRequest;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allHostReq/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{category}</td>
            <td>{address}</td>
            {/* <td>{description}</td> */}
            <td>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-xs bg-red-600 text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default HostRequestRow;
