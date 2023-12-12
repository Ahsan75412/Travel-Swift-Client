import SectionTitle from "../../../components/SectionTitle/SectionTitle";

//react rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20 md:mx-8">
            <SectionTitle
                subHeading="What our client say"
                heading="Reviews"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-10">


                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}

                    >
                    

                        <div className=" flex flex-col items-center md:my-16 mx-12 sm:mx-16 md:mx-22 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            ></Rating>
                            <p className="py-8">{review.description}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Review;