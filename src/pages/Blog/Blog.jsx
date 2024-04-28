import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import blogImage from '../../assets/Hotels/Booking/blogging.png';

const Blog = () => {
    const [blog, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        fetch("https://travel-tour-server-eight.vercel.app/allBlog")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <Loading></Loading>
    }

    return (

        <section className=''>

            <section className="min-h-screen md:pt-28 py-32 flex lg:items-center lg:justify-center w-screen md:px-12 ">
                <div className="hero-content max-w-full flex-col lg:flex-row">
                    <div className="text-center md:w-[700px] lg:text-left">
                        <p className='uppercase font-semibold text-[#FF9466] pb-5'> Embark on this historical odyssey </p>

                        <h1 className="md:text-4xl text-3xl font-bold text-gray-800">
                            Nature's Symphony with Historical Overtones
                        </h1>
                        <p className="py-6 font-semibold text-gray-500">
                            Bangladesh, a land steeped in history and cultural heritage, boasts a plethora of historical sites that tell the tale of a vibrant and diverse past. Join us on a captivating journey through some of the most significant historical sites that showcase Bangladesh's fascinating heritage.
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
                                    className='px-3 rounded-xl'
                                    src={blogImage}
                                    alt="hero"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <SectionTitle
                heading={" A Journey Through Historical Wonders"}
                subHeading={"Exploring Bangladesh's Cultural Mosaic"}
            ></SectionTitle>
            {/* grid md:grid-cols-1  gap-8 pb-16 pt-12 */}
            <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8 pb-16 pt-12 '>

                {
                    blog.map((item, i) => {
                        return (
                            <section key={i.toString()} className=" mx-12">

                                <div className="relative group">
                                    <img
                                        src={item.img}
                                        alt="site Image"
                                        className="rounded-xl object-cover w-[400px] h-[200px] group-hover:opacity-50 transition-opacity duration-300"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                        <Link to={`/blog/${item._id}`} className="bg-black font-semibold text-white px-4 py-2 rounded">
                                            Show Details
                                        </Link>
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

export default Blog;