
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";


const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://travel-tour-server-eight.vercel.app/allBlog/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog details:", error);
                setLoading(false);
            });
    }, [id]); // Include 'id' in the dependency array to fetch data when it changes

    return (
        <div className='flex justify-center items-center h-screen mb-96 mt-96'>
            {loading && <p>Loading...</p>} {/* Show loading indicator */}
            {blog && (
                <div className="card w-[800px] bg-base-100 shadow-xl flex justify-center">
                    <figure>
                        <img src={blog.img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{blog.name}</h2>
                        <div className='flex '>
                            <IoLocationOutline className='text-[#FF9466]' />
                            <p className='-mt-1 '> {blog.location}</p>
                        </div>


                        <p>{blog.description}</p>
                        <Link
                            className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-[#FF9466] hover:bg-[#d57352] text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200 text-center '
                            to='/allServices'>
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
            {!loading && !blog && <p>Blog not found.</p>} {/* Show message when blog is not found */}
        </div>
    );
};

export default BlogDetail;


