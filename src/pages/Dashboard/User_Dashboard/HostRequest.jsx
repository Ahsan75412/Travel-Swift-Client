import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../../firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from "sweetalert2";






const HostRequest = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios
            .post("http://localhost:5000/host_request", data)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Host request added successfully...!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    reset();
                }
            });
    };
    return (
        <div className="flex justify-center items-center p-10 lg:p-20">
            <div class="card w-96  bg-base-100 shadow-xl ">
                <h1 className="text-center pt-8 text-2xl font-bold">Add a Request </h1>
                <div class="card-body">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        <input
                            type="text"
                            {...register("name")}
                            // defaultValue={user.displayName}
                            placeholder="Name"
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <input
                            type="text"
                            {...register("address")}
                            // defaultValue={user.displayName}
                            placeholder="your address....."
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />

                        <input
                            type="email"
                            {...register("email")}
                            value={user?.email || ""}
                            // defaultValue={user.displayName}
                            placeholder="Email"
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <br />

                        <div className="form-control w-full ">

                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered ">
                                <option disabled >Pick One</option>
                                <option>Host</option>

                            </select>

                        </div>

                        <textarea
                            {...register("description")}
                            placeholder="Your Traveling Business details...."
                            required
                            className="input input-bordered input-warning w-full max-w-xs"
                        />
                        <br />
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

export default HostRequest;