import Swal from "sweetalert2";
import { useForm } from 'react-hook-form';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useState } from "react";
import auth from "../../../firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddHotels = () => {
    const [openDate, setOpenDate] = useState(false);


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [user] = useAuthState(auth);



    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;



    // const onSubmit = async (data) => {
    //     try {

    //     console.log('p00 -> ', data.image);
    //         const files = data.image;
    //         const uploaded = [];


    //         for (let i = 0; i < files.length; i++) {
    //             const file = files[i];
    //             let url = '';

    //             const formData = new FormData();
    //             formData.append('image', file);


    //             const imgResponse = await fetch(img_hosting_url, {
    //                 method: 'POST',
    //                 body: formData,
    //             });

    //             const imgData = await imgResponse.json();

    //             if (imgData.success) {
    //                 const url = imgData.data?.medium?.url || imgData.data?.url;
    //                 uploaded.push(url);
    //             } else {
    //                 throw new Error('Image upload failed');
    //             }

    //         }


    //         // Once all images are uploaded, proceed with the rest of the data
    //         const { name, phone,image, location, description, price, category, availableQty, availableDate } = data;
    //         const newItem = {
    //             name,
    //             price: parseFloat(price),
    //             category,
    //             phone,
    //             location,
    //             description,
    //             availableQty,
    //             availableDate,
    //             image: uploaded=[],
    //         };

    //         // Post the data to your server
    //         const response = await axios.post('http://localhost:5000/hotels', newItem);

    //         if (response.data.insertedId) {
    //             reset();
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: 'Item added Successfully!',
    //                 showConfirmButton: false,
    //                 timer: 1500,
    //             });
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };


    const onSubmit = async (data) => {
        try {
            console.log('p00 -> ', data.image);
            const files = data.image;
            const uploaded = [];
    
            // Create an array of Promises for each image upload
            // const uploadPromises = files.map(async (file) => {
            //     const formData = new FormData();
            //     formData.append('image', file);
    
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                let url = '';

                const formData = new FormData();
                formData.append('image', file);
    
                const imgResponse = await fetch(img_hosting_url, {
                    method: 'POST',
                    body: formData,
                });
    
                const imgData = await imgResponse.json();
    
                if (imgData.success) {
                    const url = imgData.data?.medium?.url || imgData.data?.url;
                    uploaded.push(url);
                } else {
                    throw new Error('Image upload failed');
                }
            
    
            // Wait for all image uploads to complete
            // await Promise.all(uploadPromises);
            }
            // Once all images are uploaded, proceed with the rest of the data
            const { name,email, phone, location, description, price, category, availableQty, availableDate } = data;
            const newItem = {
                name,
                email,
                price: parseFloat(price),
                category,
                phone,
                location,
                description,
                availableQty,
                availableDate,
                image: uploaded,
            };
    
            // Post the data to your server
            const response = await axios.post('http://localhost:5000/hotels', newItem);
    
            if (response.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added Successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    


    return (
        <div className="w-full">
            <SectionTitle subHeading="What's new" heading="Add Hotel"></SectionTitle>

            <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Hotel Name*</span>

                    </label>
                    <input type="text" placeholder="Hotel Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">email*</span>

                    </label>
                    <input type="email" placeholder="email"
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full "
                        value={user?.email || ""}
                        />

                </div>



                <div className="flex my-4">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered ">
                            <option disabled >Pick One</option>
                            <option>popular</option>
                            <option>Medium</option>
                            <option>Luxury</option>
                        </select>

                    </div>



                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>

                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                </div>


                <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Phone*</span>

                        </label>
                        <input type="number" {...register("phone", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>


                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Hotel Address</span>

                        </label>
                        <input type="text" {...register("location", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>



                <div className="flex my-4">

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Room Quantity</span>

                        </label>
                        <input type="number" {...register("availableQty", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>



                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">*Available Date</span>
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
                            {...register("availableDate", { required: true })}
                            // value={`${date[0].startDate.toISOString()} to ${date[0].endDate.toISOString()}`}
                            value={`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                date[0].endDate,
                                "dd/MM/yyyy"
                            )}`}
                            className="input input-bordered w-full "
                        />
                    </div>
                </div>




                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Hotel Details</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio..."></textarea>

                </div>



                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Hotel Images*</span>
                    </label>
                    <input {...register("image", { required: true, validate: (value) => value.length > 0 })} type="file" multiple className="file-input file-input-bordered w-full " />
                    {/* Add the 'multiple' attribute to allow selecting multiple files */}
                </div>

                <input className="btn btn-sm my-4 bg-[#FF9466]" type="submit" value="Add Hotel"></input>



            </form>
        </div>
    );
};

export default AddHotels;