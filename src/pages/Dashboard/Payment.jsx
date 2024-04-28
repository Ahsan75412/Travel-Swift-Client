import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";




const stripePromise = loadStripe(
    "pk_test_51L4mFqKQIqqGSKoDEJ0UxwGD4U0AUW5Q6BCQg7CRusz8eahiNd3fF1XXVNOhscOqWKWrHl8g19VxjACRA3MY0gwG00aHVyrIdK"
);

const Payment = () => {
    const { id } = useParams();
    const url = `https://travel-tour-server-eight.vercel.app/orders/${id}`;

    const { data: hotel, isLoading } = useQuery(["orders", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="p-10">
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="text-primary font-bold text-2xl">
                        Hello {hotel.name}
                    </h2>
                    <h2 className="card-title">
                        Please Pay for: {hotel.hotelName}
                    </h2>

                    <p>Your Email: {hotel.email}</p>
                    <p>Your phone number: {hotel.phone}</p>
                    <p>Your address: {hotel.address}</p>

                    <p>Your order quantity: {hotel.quantity}</p>
                    <p>
                        Please pay:{" "}
                        <span className="text-error">${hotel.price}</span>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm hotel={hotel} />{" "}
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;