import React from 'react';
import Cover2 from './Cover2';
import carCover from '../../assets/Hotels/images/carCover.jpg';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useServices from '../../hooks/useServices';
import airCover from '../../assets/Hotels/images/flightCover.jpg';
import guidCover from '../../assets/Hotels/images/guideCover.jpg';
import ServicesForm from './ServicesForm';




const AllServices = () => {

    const [services] = useServices();

    const service = services.filter(item => item.category === 'Car Rental');
    const AirService = services.filter(item => item.category === 'Flight');
    const GuidService = services.filter(item => item.category === 'Tour Guid');

    return (

        <div>
            <Helmet>
                <title>Bistro Boss | Services</title>
            </Helmet>

            <Cover2 img={carCover} title="hello all ser"></Cover2>

            <SectionTitle subHeading="Navigate Your Next Escape" heading="Embark on a Journey with Our Car Rentals "></SectionTitle>




            <div className='grid  md:grid-cols-2 grid-cols-1 gap-8 pb-16 pt-12  '>

                {
                    service.map((item, i) => {
                        return (
                            <section key={i.toString()} className="mx-5 md:mx-12">
                                <div className="card bg-base-100  shadow-xl">
                                    <figure><img className=' w-full h-[300px] rounded-xl transition-transform transform hover:scale-105' src={item.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.description.slice(0, 90)}...</p>
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


            {

                <div>
                    <Cover2 img={airCover} title="hello all ser"></Cover2>

                    <SectionTitle subHeading="Seamless Flight Reservations" heading="Sky's the Limit "></SectionTitle>


                    <section>

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 pb-16 pt-12  '>

                            {
                                AirService.map((item, i) => {
                                    return (
                                        <section key={i.toString()} className="mx-5 md:mx-12">
                                            <div className="card bg-base-100  shadow-xl">
                                                <figure><img className=' rounded-xl transition-transform transform hover:scale-105' src={item.img} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.description.slice(0, 90)}</p>
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
                </div>





            }









            {

                <div>
                    <Cover2 img={guidCover} title="hello all ser"></Cover2>

                    <SectionTitle subHeading="Seamless Flight Reservations" heading="Sky's the Limit "></SectionTitle>


                    <section>

                        <div className='grid  md:grid-cols-2 grid-cols-1 gap-8 pb-16 pt-12  '>

                            {
                                GuidService.map((item, i) => {
                                    return (
                                        <section key={i.toString()} className="mx-5 md:mx-12">
                                            <div className="card bg-base-100 shadow-xl">
                                                <figure><img className='h-[300px] w-full rounded-xl transition-transform transform hover:scale-105' src={item.img} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.description.slice(0, 90)}</p>
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
                </div>


            }














        </div>
    );
};




export default AllServices;

