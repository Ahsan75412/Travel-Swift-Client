import React, { useEffect, useRef, useState } from 'react';
import Appointment from '../../components/Calender/Appointment';
import { differenceInDays } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

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
    const { register, handleSubmit, reset } = useForm();
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(parseInt(hotel.price) * quantity);



    const onSubmit = (data, event) => {
        event.preventDefault();
        data.img = hotel.hotel_img;
        data.hotelName = hotel.name;
        data.email = user?.email;
        data.quantity = quantityRef.current.value;
        data.price = parseInt(hotel.price * quantityRef.current.value);
        data.category = hotel.category;
        data.details = hotel.description;
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
      }, [quantity, hotel.price]);





    return (
        <div>
            <Appointment date={date} setDate={setDate}></Appointment>

           <p className='font-bold text-3xl'>{getSelectedDays()}</p> 


           <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-actions justify-end">
                {/* <label htmlFor="my-modal-6" className="btn btn-primary">
                    purchase
                </label> */}

                <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                />
                {/* modal modal-bottom sm:modal-middle */}
                <div className=""> 
                    <div className="modal-box px-10 pt-14">
                        <div>
                            <h1 className="text-center font-bold text-3xl uppercase pb-5">
                                Billing Details
                            </h1>
                        </div>
                        <h4>
                            <span className="font-bold">Billing of:</span>{" "}
                            <span className="text-primary">{hotel.name}</span>
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
                        {/* <div>
                            <label className="label">
                                <span className="label-text">Room Reservation</span>
                            </label>
                            <input
                                {...register("date")}
                                type="date"
                                placeholder="Your Reservation Date"
                                
                              
                                       
                                //TODO:
                                className="input input-bordered input-warning w-full"
                            />
                        </div> */}
                        <div>
                            <label className="label">
                                <span className="label-text">Room Reservation</span>
                            </label>
                            <input
                                {...register("date")}
                                type="date"
                                placeholder="Your Reservation Date"

                                //TODO:
                                className="input input-bordered input-warning w-full"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                {...register("quantity")}
                                ref={quantityRef}
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered input-warning w-full "
                                max={hotel.availableQty}
                                min={1}
                                // defaultValue={1}
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
                                // disabled
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


