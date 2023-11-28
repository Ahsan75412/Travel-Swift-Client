import React, { useEffect, useState } from 'react';
// import auth from '../../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../../firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";







const Manage = () => {
    const [user, loading] = useAuthState(auth);
    const [manage, setManage] = useState([]);

    useEffect(() => {
        const fetchUserHotels = async () => {
            if (user) {
                try {
                    const response = await fetch(
                        `http://localhost:5000/hotels?email=${user.email}`,
                        {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                    'accessToken'
                                )}`,
                            },
                        }
                    );

                    if (response.status === 401 || response.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        Navigate('/');
                    }

                    const data = await response.json();
                    setManage(data || []);
                } catch (error) {
                    console.error('Error fetching user hotels:', error);
                }
            }
        };

        fetchUserHotels();
    }, [user]);

    if (loading) {
        // You can render a loading indicator here if needed
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Your Managed Hotels</h1>
            <ul>
                {manage.map((hotel) => (
                    <li key={hotel._id}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Manage;
