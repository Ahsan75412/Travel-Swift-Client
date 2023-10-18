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

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img className="w-[1000px] rounded-xl" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat atque ab sapiente eveniet nam fuga suscipit rem possimus ut sit veritatis beatae perferendis odit est ipsum, voluptatem amet voluptas inventore esse cumque at cum? Officia nostrum vel possimus numquam error id qui architecto molestiae culpa, ratione, at, molestias minima sit!</p>

                    <button className="btn btn-outline border-0 border-b-4 mt-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;