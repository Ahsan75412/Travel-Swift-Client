import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/Hotels/Room/hotel-1.jpg';
import slide2 from '../../../assets/Hotels/Room/hotel-2.jpg';
import slide3 from '../../../assets/Hotels/Room/hotel-3.jpg';
import slide4 from '../../../assets/Hotels/Room/hotel-4.jpg';
import slide5 from '../../../assets/Hotels/Room/hotel-5.jpg'
import slide6 from '../../../assets/Hotels/Room/hotel-6.jpg';


const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={slide1} className='h-[500px] w-[90%]'  alt="" />
                <h3 className="text-4xl uppercase text-center -mt-20 text-white">Cox Bazar</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} className='h-[500px] w-[90%]' alt="" />
                <h3 className="text-4xl uppercase text-center -mt-20 text-white ">Syllhet</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} className='h-[500px] w-[90%]'  alt="" />
                <h3 className="text-4xl uppercase text-center -mt-20  text-white ">Dhaka</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} className='h-[500px] w-[90%]'  alt="" />
                <h3 className="text-4xl uppercase text-center -mt-20  text-white ">Rajshahi</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} className='h-[500px] w-[90%]'  alt="" />
                <h3 className="text-4xl uppercase text-center -mt-20 text-white ">Chittagong</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide6} className='h-[500px] w-[90%]'  alt="" />
                <h3 className="text-4xl uppercase text-center -mt-10 text-white ">Khulna</h3>
            </SwiperSlide>
         
        </Swiper>
    );
};

export default Category;