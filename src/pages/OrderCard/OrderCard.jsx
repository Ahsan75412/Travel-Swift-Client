import React from "react";

const OrderCard = ({ children, hotel }) => {
    const { img, image, hotelName,category, description, quantity, price, email } =
        hotel;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-20">
            <figure>
                <img className="w-[250px]" src={img || image} alt="Album" />
            </figure>
            {/* //TODO:ekhn er sob nam ba email er samne react icon use korbo  */}
            <div className="card-body flex flex-col">
                <div>
                    <h2 className="card-title text-3xl">{hotelName}</h2>
                    <p>
                        {" "}
                        <span className="font-bold">Category:</span> {category}
                    </p>
                    <p>
                        <span className="font-bold">Details:</span>
                        {description}
                    </p>
                    <p>
                        <span className="font-bold">Quantity: </span>
                        {quantity}
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