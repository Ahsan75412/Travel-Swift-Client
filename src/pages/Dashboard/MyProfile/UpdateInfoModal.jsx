import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebaseConfig";
import Swal from 'sweetalert2';

const UpdateInfoModal = () => {
    const { register, handleSubmit, reset } = useForm();
    const [lives, setLives] = useState([]);
    const [study, setStudy] = useState([]);
    const [phn, setPhn] = useState([]);
    const [tweeter, setTweeter] = useState([]);
    const [fb, setFb] = useState([]);
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        const updatedLivesIn = data.livesIn;
        const updatedStudyIn = data.studyIn;
        const updatedPhone = data.phone;
        const updatedFacebook = data.facebook;
        const updatedTweeter = data.Tweeter;


        const bodyData = {
            updatedLivesIn,
            updatedStudyIn,
            updatedPhone,
            updatedFacebook,
            updatedTweeter,

        };
        fetch(
            `https://travel-tour-server-eight.vercel.app/info?email=${user.email}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const {
                        updatedNLivesIn,
                        updatedNStudyIn,
                        updatedNPhone,
                        updatedNFacebook,
                        updatedNTweeter,

                    } = {
                        ...lives,
                        ...study,
                        ...phn,
                        ...tweeter,
                        ...fb,

                    };
                    setLives(updatedNLivesIn);
                    setStudy(updatedNStudyIn);
                    setPhn(updatedNPhone);
                    setTweeter(updatedNTweeter);
                    setFb(updatedNFacebook);

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
        <div>
            <label htmlFor="my-modal-6" className="btn btn-primary">
                Update
            </label>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-actions justify-end">
                    <input
                        type="checkbox"
                        id="my-modal-6"
                        className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box px-10 pt-14">
                            <div>
                                <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                    Update Info
                                </h1>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Studied at
                                    </span>
                                </label>
                                <input
                                    {...register("studyIn")}
                                    type="text"
                                    placeholder="Studied at"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Your Email
                                    </span>
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Your email"
                                    value={user?.email || ""}
                                    className="input input-bordered input-warning w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Lives in</span>
                                </label>
                                <input
                                    {...register("livesIn")}
                                    type="text"
                                    placeholder="Lives in"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    {...register("phone")}
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Tweeter</span>
                                </label>
                                <input
                                    {...register("Tweeter")}
                                    type="text"
                                    placeholder="Tweeter URL"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Facebook</span>
                                </label>
                                <input
                                    {...register("facebook")}
                                    type="text"
                                    placeholder="facebook URL"
                                    className="input input-bordered input-warning w-full "
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
        </div>
    );
};

export default UpdateInfoModal;