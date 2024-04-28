import React, { useState } from 'react';
import Swal from "sweetalert2";



const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Subscribe added Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log('Subscription successful!');
        // You can update the UI or show a success message here
      } else {
        console.error('Subscription failed.');
        // Handle the error or show an error message
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      // Handle network errors or other issues
    }
  };

  return (
    <div className="bg-gray-100  pt-24  w-screen px-8 md:px-20  pb-36 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Subscribe to get the latest <br /> news about us
        </h2>
        <p className="text-gray-600 mb-6">
          Stay up-to-date with our latest news and updates.
        </p>

        <form className="max-w-md mx-auto" onSubmit={handleSubscribe}>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#F55F1D] text-white px-6 py-2 hover:bg-[#fd7b43] transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
