import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebaseConfig";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { DateRange } from "react-date-range";





const ServicesForm = ({ item }) => {
    console.log(item.name)
    const [openDate, setOpenDate] = useState(false);


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, watch, setValue } = useForm();
    const [totalPrice, setTotalPrice] = useState(item.price);

    const numTravelers = watch("numTravelers");

    useEffect(() => {
        // Update the total price whenever the number of travelers changes
        const calculateTotalPrice = () => {
            const newTotalPrice = item.price * numTravelers;
            setTotalPrice(newTotalPrice);
            setValue("price", newTotalPrice);
        };

        calculateTotalPrice();
    }, [numTravelers, item.price, setValue]);




    const onSubmit = (data, event) => {
        event.preventDefault();

        // Extracting values from data
        const { name, email, location, address, phone, numTravelers, img, bookingDate } = data;

        // Use the updated total price from state
        const formData = {
            img: item.img,
            name: item.name,
            email: user?.email,
            category: item.category,
            details: item.description,
            status: "Pending",
            travelers: numTravelers,
            location,
            price: totalPrice, // Use the updated total price
            bookingDate,
            address,
            phone,
        };

        axios
            .post("http://localhost:5000/orders", formData)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Booking added on your my orders page Successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    // alert("Product added to my order");
                    reset();
                }
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
            });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-actions justify-end">
                <label htmlFor="my-modal-6" className="btn btn-warning bg-[#FF9466] font-bold">
                    Book Now
                </label>

                <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box px-10 pt-14">
                        <div>
                            <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                Billing Details
                            </h1>
                        </div>
                        <h4>
                            <span className="font-bold">Billing of:</span>{" "}
                            <span className="text-primary font-bold">{
                                item.name
                            }</span>
                        </h4>
                        <div>
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Your name"
                                value={user?.displayName || ""}
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Email</span>
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
                                <span className="label-text">Traveling Destination</span>
                            </label>
                            <input
                                {...register("location")}
                                type="text"
                                placeholder="Your Traveling Destination"

                                className="input input-bordered input-warning w-full"
                            />
                        </div>



                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">*Booking Date</span>
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
                                {...register("bookingDate", { required: true })}
                                // value={`${date[0].startDate.toISOString()} to ${date[0].endDate.toISOString()}`}
                                value={`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                    date[0].endDate,
                                    "dd/MM/yyyy"
                                )}`}
                                className="input input-bordered input-warning w-full "
                            />
                        </div>


                        <div>
                            <label className="label">
                                <span className="label-text">Number of Travelers</span>
                            </label>
                            <input
                                {...register("numTravelers")}
                                type="number"
                                placeholder="Number of Travelers"
                                className="input input-bordered input-warning w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Booking Price</span>
                            </label>
                            <input
                                {...register("price")}
                                type="Price"
                                placeholder="Your Price"
                                value={item.price}
                                className="input input-bordered input-warning w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Total Price</span>
                            </label>
                            <input
                                disabled
                                type="text"
                                value={totalPrice}
                                className="input input-bordered input-warning w-full"
                            />
                        </div>


                        <div>
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input
                                {...register("address")}
                                type="text"
                                placeholder="Address"
                                className="input input-bordered input-warning w-full "
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input
                                {...register("phone")}
                                type="text"
                                placeholder="Phone"
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
                                value="Add to my Order"
                                className="btn btn-warning bg-[#FF9466] w-full max-w-xs"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ServicesForm;