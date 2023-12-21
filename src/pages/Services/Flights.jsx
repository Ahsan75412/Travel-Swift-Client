import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useServices from '../../hooks/useServices';
import travel2 from '../../assets/Hotels/CoverVideo/travel2.png';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import ServicesForm from './ServicesForm';
// import { useParams, useNavigate } from "react-router-dom";

const Flights = () => {
  const [services] = useServices();
  // const navigate = useNavigate();

  const service = services.filter(item => item.category === 'Flight');


//   const handleBookNow = () => {
//     // Navigate to BookingInfo with props
//     navigate(`/serviceForm`, { state: { services } });

// };



  return (
    <section className=''>

      <section className="min-h-screen md:pt-28 py-32 flex lg:items-center lg:justify-center w-screen md:px-12">
        <div className="hero-content max-w-full flex-col lg:flex-row">
          <div className="text-center md:w-[700px] lg:text-left">
            <p className='uppercase font-semibold text-[#FF9466] pb-5'> Sky's the Limit: Seamless Flight Reservations </p>

            <h1 className="md:text-4xl text-3xl font-bold text-gray-800">
              Flight Explorer Where Your Next Adventure Takes Off
            </h1>
            <p className="py-6 font-semibold text-gray-500">
              Explore a vast array of destinations, from bustling metropolises to exotic beach paradises. Our extensive list of airlines ensures you have the freedom to choose the perfect flight for your journey.

            </p>

            <Link
              className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-[#FF9466] hover:bg-[#d57352] text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200 '
              href=''>
              Get Started
            </Link>
          </div>

          <div className="shrink-0 max-w-lg w-full px-3">
            <div className="flex lg:flex-row">
              <div>
                <img
                  className='w-[408px] h-[400px] px-3 rounded-xl'
                  src={travel2}
                  alt="hero"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <SectionTitle
        heading={"Popular Flight Deals"}
        subHeading={"Everything You Want & More"}
      ></SectionTitle>

      <div className='grid md:grid-cols-1  gap-8 pb-16 pt-12  '>

        {
          service.map((item, i ) => {
            return (
              <section key={i.toString()} className="mx-12">

                <div className="card card-side bg-base-100 shadow-xl p-5">
                  <figure><img className='' src={item.img} alt="image" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.description}</p>

                    <div className="card-actions justify-end">
                    <ServicesForm item={item} />   
                    </div>
                  </div>
                </div>
              </section>
            )
          })
        }

      </div>
    </section>
  );
};

export default Flights;