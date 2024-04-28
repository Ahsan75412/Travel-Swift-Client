import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from "sweetalert2";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import auth from "../../../firebaseConfig";





const AddBlog = () => {

    const [openDate, setOpenDate] = useState(false);


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);





    const [user] = useAuthState(auth);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();


    const blog_image_token = import.meta.env.VITE_Image_Upload_token;




    const onSubmit = async (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${blog_image_token}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;

                    const blog = {

                        name: data.title,
                        email: data.email,
                        description: data.description,
                        writtenDate: data.writtenDate,
                        location: data.location,
                        img: img,
                    };
                    axios
                        .post(
                            "https://travel-tour-server-eight.vercel.app/add_blog", blog,
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
                                    title: 'blog added Successfully!...',
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
        <div className="flex justify-center items-center p-10 lg:p-20">
            <div class="card w-96  bg-base-100 shadow-xl ">
                <h1 className="text-center pt-8 text-xl md:text-2xl font-bold">Write Simple Blog</h1>
                <div class="card-body">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >

                        <input
                            type="email"
                            {...register("email")}
                            value={user?.email || ""}
                            // defaultValue={user.displayName}
                            placeholder="Email"
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />



                        <input
                            type="text"
                            {...register("title")}
                            // defaultValue={user.displayName}
                            placeholder="write blog title..."
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <input
                            type="text"
                            {...register("location")}
                            // defaultValue={user.displayName}
                            placeholder="location.... "
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />





                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">*Written Date</span>
                            </label>
                            <>

                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </>
                            <input
                                onClick={() => setOpenDate(!openDate)}
                                type="text"
                                {...register("writtenDate", { required: true })}
                                // value={`${date[0].startDate.toISOString()} to ${date[0].endDate.toISOString()}`}
                                value={`${format(date[0].startDate, "dd/MM/yyyy")} `}
                                className="input input-bordered input-warning w-full "
                            />
                        </div>






                        <br />




                        <div className="form-control w-full max-w-xs">

                            <input
                                type="file"
                                placeholder="Image"
                                className="input input-bordered input-warning w-full max-w-xs"
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


                        <textarea
                            {...register("description")}
                            placeholder="Your Traveling Business details...."
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />



                        <input
                            className="btn btn-warning font-bold bg-[#FF9466]"
                            type="submit"
                            value="Add Request"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;