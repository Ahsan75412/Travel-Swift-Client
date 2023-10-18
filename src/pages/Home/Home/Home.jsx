import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularHotels from "../PopularHotels/PopularHotels";
import Review from "../Reviews/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularHotels></PopularHotels>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;