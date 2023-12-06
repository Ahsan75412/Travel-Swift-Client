
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-24 px-10 ">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* Column 1 */}
                <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Digital <span className="text-[#F55F1D]">Agency</span></h3>
                    <p className="mb-4 w-80">Some text about the company. Web logo and social icons can go here.</p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-xl" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 ">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/hotels">About Us</a>
                        </li>
                        <li>
                            <a href="/destination">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                   
                </div>

                {/* Column 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                    <p>123 Main Street, City, Country</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;