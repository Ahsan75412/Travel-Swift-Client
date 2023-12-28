// import VideoBackground from "./VideoBackground";
// import { BsArrowRight } from "react-icons/bs";






// const Banner = () => {
//     return (
//         // <div className="hero min-h-screen bg-[#f1fcfe]">
//         <div
//             className="hero min-h-screen"
//             style={{
//                 backgroundImage: "url(https://i.ibb.co/wh71zSp/Rectangle-1.png)",
//             }}>
//             <div className="hero-overlay bg-opacity-50 bg-black text-white"></div>

//             <div className="hero-content flex-col lg:flex-row-reverse  ">
//                 {/* <VideoBackground></VideoBackground> --lg:w-[1200px] */}
//                 <div>
//                     <VideoBackground></VideoBackground>
//                 </div>





//                 <div className="text-white">
//                     <h1 className="text-3xl font-bold uppercase">The ultimate tool for Tours and travel</h1>

//                     <p className="pt-5">Travel Swift for Business is an easy-to-use business travel platform where you can book and manage trips for free.
//                         <br />
//                         Enjoy exclusive business rates, earn loyalty points, and benefit from complimentary 24/7 support from the leading travel management company CWT.</p>

//                     <button className="mt-8 bg-[#F9A51A] text-black hover:bg-slate-200 hover:text-[#F9A51A] px-4 py-2 rounded flex items-center gap-2">
//                         Booking <BsArrowRight size={24} />
//                     </button>
//                 </div>
//             </div>

//         </div>

//     );
// };

// export default Banner;



import { Link } from 'react-router-dom';
import Traveling from '../../../assets/Hotels/CoverVideo/Travelling-bg.png'





const Banner =  () => {


    return (
        <section className="min-h-screen md:pt-28 py-32 flex lg:items-center lg:justify-center w-screen md:px-12">
            <div className="hero-content max-w-full flex-col lg:flex-row">
                <div className="text-center md:w-[700px] lg:text-left">
                    <p className='uppercase font-semibold text-[#FF9466] pb-5'> Best Destinations In Bangladesh </p>
                    <h1 className="md:text-4xl text-3xl font-bold text-gray-800">
                       Travel, Enjoy and live a new full life
                    </h1>
                    <p className="py-6 font-semibold text-gray-500">
                        Travel Swift for Business is an easy-to-use business travel platform where you can book and manage trips for free. 24/7 support from the leading travel management company CWT.
                    
                    </p>

                    <Link
                        className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-[#FF9466] hover:bg-[#d57352] text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200 '
                        href=''>
                        Get Started  
                     </Link>
                </div>

                <div className="shrink-0 max-w-lg w-full px-4">
                    <div className="flex lg:flex-row">
                        <div>
                            <img
                                className='  px-3 rounded-xl'
                                src={Traveling}
                                alt="hero"
                            />
                        </div>
                     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;