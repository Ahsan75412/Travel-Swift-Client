import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";






const AddPackages = () => {
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
                        title: data.title,
                        description: data.description,
                        price: data.price,
                        category: data.category,
                        location: data.location,
                        img: img,
                    };
                    axios
                        .post(
                            "https://travel-tour-server-eight.vercel.app/package",
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
                                    title: 'Packages added Successfully!',
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
                        Add a Package
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Package Category</span>
                            </label>
                            <select
                                {...register("category")}
                                className="select select-warning w-full max-w-xs"
                            >
                                <option>VIP</option>
                                <option>Festival</option>
                                <option>Self</option>

                            </select>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Package Title-</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Title of your packages"
                                className="input input-bordered w-full max-w-xs"
                                {...register("title")}
                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Trip location-</span>
                            </label>
                            <input
                                type="text"
                                placeholder="location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location")}
                            />
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Package Details-</span>
                            </label>
                            <input
                                type="text"
                                placeholder="write Description "
                                className="input input-bordered w-full max-w-xs"
                                {...register("description")}
                            />
                        </div>





                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Price
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price per package"
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
                            value="Add Package"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackages;