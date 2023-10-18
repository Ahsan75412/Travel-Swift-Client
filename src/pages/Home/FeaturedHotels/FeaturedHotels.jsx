import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import SingleHotel from '../../Shared/singleHotel/SingleHotel';

const FeaturedHotels = () => {
    const [hotel , setHotel] = useState([]);
  
    useEffect(() => {
        fetch('hotels.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setHotel(popularItems)});
    } ,[])

    return (
        <section>
            <SectionTitle
              heading={"Featured Hotels Deals"}
              subHeading={"Everything You Want & More"}
            ></SectionTitle>

        <div className='grid md:grid-cols-3 gap-4 mb-10 mx-12'>

            {
                hotel.map(item => <SingleHotel
                    key={item._id}
                    item={item}
                ></SingleHotel>)
            }

        </div>
        </section>
    );
};

export default FeaturedHotels;