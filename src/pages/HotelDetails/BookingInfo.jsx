import React, { useEffect, useRef, useState } from 'react';
import Appointment from '../../components/Calender/Appointment';
import { differenceInDays, format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';
import { Controller, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { DateRange, DateRangePicker } from 'react-date-range';

const BookingInfo = () => {

    const location = useLocation();
    const { state } = location;


    const { hotel } = state || {};

    console.log(hotel.price)

    const getSelectedDays = () => {
        if (date[0]) {
            const startDate = date[0].startDate;
            const endDate = date[0].endDate;
            const days = differenceInDays(endDate, startDate) + 1; // Adding 1 to include the end date
            return days;
        }
        return 0;
    };

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    console.log(date);




    // .........................................................................................

    if (!hotel || !hotel.price) {
        // Render a loading state or an error message
        return <p>Loading...</p>;
    }

    const quantityRef = useRef();
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, watch } = useForm();
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(parseInt(hotel.price) * quantity);




    const selectedDates = watch('dateRange');
    const [dateRange, setDateRange] = useState([]);

    const updateSelectedDates = () => {
        if (selectedDates && selectedDates[0]) {
            const start = selectedDates[0].startDate;
            const end = selectedDates[0].endDate;
            setDateRange([{ startDate: start, endDate: end, key: 'selection' }]);
        } else {
            setDateRange([]);
        }
    };


    //    const selectedDates = watch('dateRange');
    //     const [selectedDatesText, setSelectedDatesText] = useState('');

    //     const updateSelectedDatesText = () => {

    //         if (selectedDates && selectedDates[0]) {
    //             const startDate = selectedDates[0].startDate.toDateString();
    //             const endDate = selectedDates[0].endDate.toDateString();
    //             setSelectedDatesText(`${startDate} - ${endDate}`);
    //         } else {
    //             setSelectedDatesText('');
    //         }
    //     };

    // console.log(startDate)



    const onSubmit = (data, event) => {
        event.preventDefault();
        data.img = hotel.hotel_img;
        data.hotelName = hotel.name;
        data.email = user?.email;
        data.quantity = quantityRef.current.value;
        data.price = parseInt(hotel.price * quantityRef.current.value);
        data.category = hotel.category;
        data.details = hotel.description;
        data.startDate = selectedDates.startDate;
        data.endDate = selectedDates.endDate;
        data.status = "Pending";

        // axios
        //     .post("http://localhost:5000", data)
        //     .then((res) => {
        //         if (res.data.insertedId) {
        //             alert("Room added to my order");
        //             reset();
        //             update(
        //                 `${parseInt(hotel.availableQty) -
        //                 quantityRef.current.value
        //                 }`
        //             );
        //         }
        //     });
    };

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };



    const handleQty = () => {
        if (quantityRef.current.value !== "") {
            const validateQty = debounce(() => {
                const newQuantity = parseInt(quantityRef.current.value);
                if (newQuantity < quantityRef.current.min) {
                    quantityRef.current.value = quantityRef.current.min;
                }
                if (newQuantity > quantityRef.current.max) {
                    quantityRef.current.value = quantityRef.current.max;
                }
                setQuantity(newQuantity);
                setPrice(`${parseInt(hotel.price) * newQuantity}`);
            }, 1500);
            validateQty();
        } else {
            setQuantity(1);
            setPrice(`${parseInt(hotel.price) * 1}`);
        }
    };

    useEffect(() => {
        // Remove the redundant calculation here
        updateSelectedDates();
    }, [quantity, hotel.price, selectedDates]);







    return (
        <div>
            <Appointment date={date} setDate={setDate} ranges={dateRange}></Appointment>

            {/* <p className='font-bold text-3xl'>{getSelectedDays()}</p> */}



            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-actions ">

                    {/* modal modal-bottom sm:modal-middle */}
                    <div className="border-4 sm:w-1/3">
                        <div className=" px-10 pt-14">
                            <div>
                                <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                    Billing Details
                                </h1>
                            </div>
                            <h4>
                                <span className="font-bold">Billing of:</span>{" "}
                                <span className="text-primary">{hotel.name}</span>
                            </h4>
                            <div className='flex '>
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
                                <div className='mx-5'>
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
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Reservation Date Count</span>
                                </label>
                                <input
                                    {...register("date")}
                                    type=""
                                    placeholder="Your Reservation Date"
                                    value={getSelectedDays()}
                                    //TODO:
                                    className="input input-bordered input-warning w-full"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Selection Date Range</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Selection Date"
                                    // value={format(date[0].startDate, 'MM/dd/yyyy') }
                                    value={`${format(date[0].startDate, 'dd/MM/yyyy')} - ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                                    className="input input-bordered input-warning w-full"
                                // readOnly
                                />
                            </div>

                            {/* format(date[0].endDate, 'MM/dd/yyyy') */}

                            <div>
                                <label className="label">
                                    <span className="label-text">Room Quantity</span>
                                </label>
                                <input
                                    {...register("quantity")}
                                    ref={quantityRef}
                                    type="number"
                                    placeholder="Quantity"
                                    className="input input-bordered input-warning w-full "
                                    max={hotel.availableQty}
                                    min={1}
                                    defaultValue={1}
                                    onChange={handleQty}
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    {...register("price")}
                                    type="number"
                                    placeholder="Price"
                                    value={price}
                                    className="input input-bordered input-warning w-full "
                                    disabled
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
                                    {...register(" phone")}
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

export default BookingInfo;


