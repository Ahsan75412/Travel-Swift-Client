import VideoBackground from "./VideoBackground";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#f1fcfe]">
            <div className="hero-content flex-col lg:flex-row-reverse  ">
                {/* <VideoBackground></VideoBackground> --lg:w-[1200px] */}
                <div className="border-2">
                <VideoBackground></VideoBackground>
                </div>


                <div>
                    <h1 className="text-3xl font-bold uppercase">The ultimate tool for Tours and travel</h1>

                    <p className="pt-5">Travel Swift for Business is an easy-to-use business travel platform where you can book and manage trips for free.
                        <br />
                        Enjoy exclusive business rates, earn loyalty points, and benefit from complimentary 24/7 support from the leading travel management company CWT.</p>

                    <button className="btn btn-primary mt-7">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;