import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";






const AddServices = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


    const onSubmit = async (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const service = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        category: data.category,
                        StartDestination: data.dec_start,
                        EndDestination: data.dec_end,
                        location: data.location,

                        // availableQty: data.availableQty,
                        // minOrder: data.minOrder,
                        img: img,
                    };
                    axios
                        .post(
                            "http://localhost:5000/services",
                            service,
                            {
                                headers: {
                                    authorization: `Bearer ${localStorage.getItem(
                                        "accessToken"
                                    )}`,
                                },
                            }
                        )
                        .then((res) => {
                            if (res.data.insertedId) {
                                // alert("Product added successfully");
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Service added Successfully!',
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                reset();
                                console.log(data);
                            }
                        });
                }
                console.log(result);
            });


    };

    return (
        <div className="flex justify-center items-center p-10">
            <div className="card w-96 bg-gray-100 shadow-xl text-[#FF9466]">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">
                        Add a Service
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Services Category</span>
                            </label>
                            <select
                                {...register("category")}
                                className="select select-warning w-full max-w-xs"
                            >
                                <option>Flight</option>
                                <option>Car Rental</option>
                                <option>Tour Guid</option>
                                <option>Hall Room Rental</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name of your service"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                        </div>
                     

                  
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Start Destination </span>
                            </label>
                            <input
                                type="text"
                                placeholder="write start Destination "
                                className="input input-bordered w-full max-w-xs"
                                {...register("dec_start")}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">End Destination</span>
                            </label>
                            <input
                                type="text"
                                placeholder="write end Destination "
                                className="input input-bordered w-full max-w-xs"
                                {...register("dec_end")}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Air/car/Tour-guid Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location")}
                            />
                        </div>
                   



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="write Description "
                                className="input input-bordered w-full max-w-xs"
                                {...register("description")}
                            />
                        </div>


                        {/* <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Available Quantity
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQty")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Minimum Order
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Order"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minOrder")}
                            />
                        </div> */}


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Price
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price per service"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Upload Service Image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Image"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <input
                            className="btn btn-outline bg-[#FF9466] w-full mt-5"
                            type="submit"
                            value="Add Service"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;