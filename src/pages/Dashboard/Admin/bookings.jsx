import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import OrderCards from "../../OrderCard/OrderCards";





const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        fetch("https://travel-tour-server-eight.vercel.app/allOrders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setBookings(data);
                setStatus(false);
            });
    }, [status]);

    const handleDelete = (id) => {
        const warning = window.confirm("Are you sure you want to delete this order?");
        if (warning) {
            const url = `https://travel-tour-server-eight.vercel.app/orders/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter((order) => order._id !== id);
                        setBookings(remaining);
                    }
                });
        }
    };

    const handleApprove = (id, index) => {
        const warning = window.confirm("Are you sure?");
        if (warning) {
            fetch(`https://travel-tour-server-eight.vercel.app/orders/status/${id}`, { method: "PUT" })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Order Shipped Successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        // alert("Product Shipped...!!!");
                        setStatus(false);
                    }
                });
        }
    };

    return (
        <div>
            {bookings[0] ? (
                <h2 className="font-bold text-2xl text-center p-10">
                    Total bookings: {bookings.length}
                </h2>
            ) : (
                <h2 className="font-bold text-2xl text-center p-10">
                    No Orders Yet
                </h2>
            )}

            {bookings.map((order, index) => (
                <OrderCards key={order._id} order={order}>
                    <div>
                        <div className="flex">
                            <p>
                                Status: &nbsp;
                                {order.paid !== true ? (
                                    <span className="text-primary">{order.status}</span>
                                ) : (
                                    <span className="text-success">{order.status}</span>
                                )}
                            </p>
                        </div>

                        <button
                            onClick={() => handleApprove(order._id, index)}
                            className="btn btn-success"
                            disabled={order.status === "paid"}
                        >
                            <i className="fas fa-check"></i> &nbsp;
                            {order.paid === false ? "Approve Booking" : "Shipped"}
                        </button>
                        <button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-error ml-2"
                            disabled={order.status === "paid"}
                        >
                            <i className="far fa-trash-alt"></i> &nbsp;Delete Order
                        </button>
                    </div>
                </OrderCards>
            ))}
        </div>
    );
};

export default Bookings;



