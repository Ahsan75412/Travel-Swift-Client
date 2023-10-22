import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import hotelImg from '../../../assets/Hotels/Room/bed-2.jpg';




const Hotels = () => {
    return (
        <div>
            <Helmet>
                <title>Travel-Swift | Hotels</title>
            </Helmet>
            <Cover img={hotelImg} title="Book hotel"></Cover>
            <h2>all Hotels</h2>
        </div>
    );
};

export default Hotels;