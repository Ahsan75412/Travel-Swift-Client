import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebaseConfig";
import Swal from 'sweetalert2'




const InfoModal = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
console.log('i am from infomodal',user)

    const onSubmit = (data) => {
        axios
            .post("http://localhost:5000/info", data)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                }
            });
    };
    return (
        <div>
            <label htmlFor="my-modal-6" className="btn btn-primary">
                Add Info
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
                                    ADD Info
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
                            {/* <div>
                                <label className="label">
                                    <span className="label-text">LinkedIn</span>
                                </label>
                                <input
                                    {...register("linkedin")}
                                    type="text"
                                    placeholder="LinkedIn URL"
                                    className="input input-bordered input-warning w-full "
                                />
                            </div> */}
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
                            <div>
                                <label className="label">
                                    <span className="label-text">Tweeter</span>
                                </label>
                                <input
                                    {...register("tweeter")}
                                    type="text"
                                    placeholder="Tweeter URL"
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
                                    value="Add"
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

export default InfoModal;