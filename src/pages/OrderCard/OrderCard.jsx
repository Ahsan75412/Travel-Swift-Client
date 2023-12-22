



import React from "react";

const OrderCard = ({ children, order }) => {
    const { img, name,hotel_img,hotelName, category, details, travelers, price, email } = order;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl md:w-[750px] mt-10">
              <figure>
                {/* Use img if it exists, otherwise use image */}
                <img className="md:w-[600px] h-[300px] rounded-xl" src={img || hotel_img} alt="Order" />
            </figure>
            <div className="card-body flex flex-col">
                <div>
                    <h2 className="card-title text-3xl">{hotelName || name }</h2>
                    <p>
                        {" "}
                        <span className="font-bold">Category:</span> {category}
                    </p>
                    <p>
                        <span className="font-bold">Details:</span> {details}
                    </p>
                    <p>
                        <span className="font-bold">Travelers: </span> {travelers}
                    </p>
                    <p>
                        <span className="font-bold">Price:</span> ${price}
                    </p>
                    <p>
                        <span className="font-bold">Email:</span> {email}
                    </p>
                </div>

                <div>{children}</div>
            </div>
        </div>
    );
};

export default OrderCard;
