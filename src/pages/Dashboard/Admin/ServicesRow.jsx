import React from "react";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const ServicesRow = ({ service, index, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const { img, name, category, price, _id } = service;

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
                fetch(`http://localhost:5000/services/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
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

    const onSubmit = (data) => {
        const updatedPrice = parseInt(data.price);
        const bodyData = {
            updatedPrice,
        };

        fetch(`http://localhost:5000/services/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Service Image" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>
                <div className="flex space-x-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label
                            htmlFor={`service-id-${_id}`}
                            className="btn btn-xs btn-accent text-black"
                        >
                            Update
                        </label>
                        <input
                            type="checkbox"
                            id={`service-id-${_id}`}
                            className="modal-toggle"
                        />

                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box px-10 pt-14">
                                <div>
                                    <h1 className="text-center  font-bold text-3xl uppercase pb-5">
                                        Update
                                    </h1>
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Price
                                        </span>
                                    </label>
                                    <input
                                        {...register("price")}
                                        type="number"
                                        placeholder="Price"
                                        className="input input-bordered input-warning w-full"
                                    />
                                </div>

                                <div className="modal-action justify-evenly">
                                    <label
                                        htmlFor={`service-id-${_id}`}
                                        className="btn btn-sm btn-circle absolute right-2 top-2"
                                    >
                                        ✕
                                    </label>
                                    <input
                                        type="submit"
                                        value="Update"
                                        className="btn bg-[#FF9466] btn-warning w-full max-w-xs"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>

                    <label>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-xs bg-red-600 text-white"
                        >
                            Delete
                        </button>
                    </label>
                </div>
            </td>
        </tr>
    );
};

export default ServicesRow;
