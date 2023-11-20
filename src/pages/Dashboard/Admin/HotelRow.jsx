import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';





const HotelRow = ({ hotel, index, refetch }) => {

    const { register, handleSubmit, reset } = useForm();
    const { image, name, category, availableQty, price, _id } = hotel;
    const [quantity, setQuantity] = useState({});
    const [newPrc, setNewPrc] = useState({});

    const { quantityRef, priceRef } = useRef(null);

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


                console.log(id)
                fetch(`http://localhost:5000/hotels/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount) {
                            refetch();
                        }
                    });
            }
        });
    };



    const onSubmit = (data) => {
        const updatedQuantity = parseInt(data.qty) //+ parseInt(availableQty); // //+ 

        const updatedPrice = parseInt(data.prc);
        const bodyData = {
            updatedQuantity,
            updatedPrice,
        };

        fetch(`http://localhost:5000/hotels/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const { updatedAvailableQuantity, updatedPrc } = {
                        ...quantity,
                        ...newPrc,
                        quantity: updatedQuantity,
                        newPrc: updatedPrice,
                    };
                    setQuantity(updatedAvailableQuantity);
                    setNewPrc(updatedPrc);
                    reset();
                    // Toast.success("Restocked Successfully", { type: "success" });
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
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name.slice(0, 20)}
                <br />
                <span className="badge badge-ghost badge-sm">{category}</span>
            </td>

            <td>{availableQty}</td>
            <td>{price}</td>
            <td>
                <div className="flex space-x-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-actions justify-end">
                            {/* <label
                                htmlFor="my-modal-6"
                                className="btn btn-xs btn-accent"
                            >
                                Update
                            </label>

                            <input
                                type="checkbox"
                                id="my-modal-6"
                                className="modal-toggle"
                            /> */}
                            <label
                                htmlFor={`id${hotel._id}`}
                                className="btn btn-xs btn-accent text-black "

                            >
                                Update
                            </label>

                            <input
                                type="checkbox"
                                id={`id${hotel._id}`}
                                className="modal-toggle"
                            />

                       

                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box px-10 pt-14">
                                    <div>
                                        <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                            Update
                                        </h1>
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Quantity
                                            </span>
                                        </label>
                                        <input
                                            ref={quantityRef}
                                            {...register("qty")}
                                            type="number"
                                            placeholder="Quantity"
                                            min={0}
                                            className="input input-bordered input-warning w-full "
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">
                                                Price
                                            </span>
                                        </label>
                                        <input
                                            ref={priceRef}
                                            {...register("prc")}
                                            type="number"
                                            placeholder="Price"
                                            className="input input-bordered input-warning w-full"
                                        />
                                    </div>

                                    <div className="modal-action justify-evenly">
                                        <label
                                            htmlFor="my-modal-6"
                                            className="btn btn-sm btn-circle absolute right-2 top-2"
                                        >
                                            ✕
                                        </label>
                                        <input
                                            type="submit"
                                            value="Update"
                                            className="btn btn-secondary w-full max-w-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* 
                    <label
                        for={`id${hotel._id}`}
                        className="btn btn-xs modal-button bg-error text-white "
                    >
                        Delete
                    </label>

                    <input
                        type="checkbox"
                        id={`id${hotel._id}`}
                        className="modal-toggle"
                    /> */}
                    {/* <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">
                                Are you sure you want to delete this{" "}
                                {hotel.name}
                            </h3>

                            <div className="modal-action">
                                <label
                                    onClick={() => handleDelete(hotel._id)}
                                    for={`id${hotel._id}`}
                                
                                    className="btn"
                                >
                                 
                                    Yes
                                </label>
                                
                            </div>
                        </div>
                    </div> */}

                    <label>
                        <button onClick={() => handleDelete(hotel._id)} className="btn btn-xs bg-red-600  text-white">Delete</button>
                    </label>

                </div>
            </td>
        </tr>
    );
};

export default HotelRow;