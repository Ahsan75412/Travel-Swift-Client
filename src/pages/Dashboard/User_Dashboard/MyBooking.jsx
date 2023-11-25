import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import auth from "../../../firebaseConfig";
import OrderCard from "../../OrderCard/OrderCard";







const MyBooking = () => {
    const [user, loading] = useAuthState(auth);

    const [MyBooking, setMyBooking] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(
                `http://localhost:5000/orders?email=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => {
                    console.log("res", res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        Navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data) {
                        setMyBooking(data);
                    }
                });
        }
    }, [user]);




    const handleDelete = (id) => {
        const warning = window.confirm(
            "Are you sure\nYou want to delete this order..!?"
        );
        if (warning) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = MyBooking.filter(
                            (order) => order._id !== id 
                        );
                        setMyBooking(remaining);
                    }
                });
        }
    };
    if (loading) {
        return <Loading />;
    }


    
    return (
        <div>
            <h1>my order</h1>
            {MyBooking.map((order) => (
                <OrderCard key={order._id} hotel={order}>
                    {order.paid ? (
                        ""
                    ) : (
                        <button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-error text-white mt-10"
                        >
                            Cancel order
                        </button>
                    )}
                    {order.price && !order.paid && (
                        <Link to={`/dashboard/payment/${order._id}`}>
                            <button className="btn btn-primary text-white mt-10 mx-3">
                                Payment
                            </button>
                        </Link>
                    )}
                    {order.price && order.paid && (
                        <button className="btn btn-active btn-ghost disabled">
                            Paid
                        </button>
                    )}
                </OrderCard>
            ))}
        </div>
    );
};

export default MyBooking;