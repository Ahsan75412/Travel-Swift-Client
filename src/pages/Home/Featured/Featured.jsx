import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/Hotels/Room/leaving-5.jpg';
import '../Featured/Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
             subHeading="Check it out"
             heading="Featured Hotel"
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-[#FF9466] bg-opacity-80 md:pb-20 md:pt-12 md:px-36 px-12 pb-12 pt-8">
                <div>
                    <img className="md:w-[1000px] rounded-xl" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10    ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase font-bold"> Where can i get some?</p>
                    <p className="font-medium pt-5">
                    Find Hotel Free Booking at Shopwebly, the Website to Compare Prices! Find and Compare Hotel Free Booking Online. Save Now at Shopwebly! Find Easily. Quick Results. Many Products. Search and Discover. Easy Access. Compare Products. Services: 24/7 Accessible, Instant Results.
                    </p>

                    <button className="btn btn-outline border-0 border-b-4 mt-4 font-bold">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;