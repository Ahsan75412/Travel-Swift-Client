import VideoBackground from "./VideoBackground";
import { BsArrowRight } from "react-icons/bs";




const Banner = () => {
    return (
        // <div className="hero min-h-screen bg-[#f1fcfe]">
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co/wh71zSp/Rectangle-1.png)",
            }}>
            <div className="hero-overlay bg-opacity-50 bg-black text-white"></div>

            <div className="hero-content flex-col lg:flex-row-reverse  ">
                {/* <VideoBackground></VideoBackground> --lg:w-[1200px] */}
                <div className="border-2">
                    <VideoBackground></VideoBackground>
                </div>





                <div className="text-white">
                    <h1 className="text-3xl font-bold uppercase">The ultimate tool for Tours and travel</h1>

                    <p className="pt-5">Travel Swift for Business is an easy-to-use business travel platform where you can book and manage trips for free.
                        <br />
                        Enjoy exclusive business rates, earn loyalty points, and benefit from complimentary 24/7 support from the leading travel management company CWT.</p>

                    <button className="mt-8 bg-[#F9A51A] text-black hover:bg-slate-200 hover:text-[#F9A51A] px-4 py-2 rounded flex items-center gap-2">
                        Booking <BsArrowRight size={24} />
                    </button>
                </div>
            </div>

        </div>

    );
};

export default Banner;