// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import SingleHotel from '../../Shared/singleHotel/SingleHotel';
import useHotels from '../../../hooks/useHotels';


const PopularHotels = () => {
    // const [hotel , setHotel] = useState([]);
  
    // useEffect(() => {
    //     fetch('hotels.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setHotel(popularItems)});
    // } ,[])


    // use here hooks to alter first useEffect

    const [hotel] = useHotels();
    const popular = hotel.filter(item => item.category === 'popular');
    console.log(popular)

    return (
        <section className='pt-12'>
            <SectionTitle
              heading={"Popular Hotels Deals"}
              subHeading={"Everything You Want & More"}
            ></SectionTitle>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 pb-16 pt-12 mx-8 '>

            {
                popular.map(item => <SingleHotel
                    key={item._id}
                    item={item}
                ></SingleHotel>)
            }

        </div>
        </section>
    );
};

export default PopularHotels;