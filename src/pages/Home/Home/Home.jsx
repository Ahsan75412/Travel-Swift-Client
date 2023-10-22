import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularHotels from "../PopularHotels/PopularHotels";
import Review from "../Reviews/Review";
import Hotels from "../Hotels/Hotels";


const Home = () => {
    return (

        <div>
            <Helmet>
                <title>Travel-Swift | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <PopularHotels></PopularHotels>
            <Featured></Featured>
            <Hotels></Hotels>
            <Review></Review>
        </div>
    );
};

export default Home;