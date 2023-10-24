import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/Hotels/Room/bed-1.jpg'
import img2 from '../../assets/Hotels/Room/bed-2.jpg';
import img3 from '../../assets/Hotels/Room/bed-3.jpg';
import img4 from '../../assets/Hotels/Room/bed-4.jpg';
import img5 from '../../assets/Hotels/Room/bed-5.jpg';
import img6 from '../../assets/Hotels/Room/bed-6.jpg';




const HotelShow = () => {
    return (
        <div className="">
            <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img  src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
              
                <div>
                    <img  src={img5} />
                </div>
            
            </Carousel>
        </div>

    );
};

export default HotelShow;