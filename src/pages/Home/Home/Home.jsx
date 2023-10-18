import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularHotels from "../PopularHotels/PopularHotels";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularHotels></PopularHotels>
            <Featured></Featured>
        </div>
    );
};

export default Home;