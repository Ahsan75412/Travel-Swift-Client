import { Parallax } from "react-parallax"


const Cover2 = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >


            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 md:text-2xl text-xl lg:text-4xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Unleash boundless exploration with our trifecta of travel services. Elevate with seamless air bookings, hit the road with flexible car rentals, and delve deep into destinations with personalized tour guides. Your journey, your way – experience travel like never before!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </Parallax>
    );
};

export default Cover2;


// min-h-screen

//h-[800px]