// import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { toast } from "react-toastify";




const UserRow = ({ user, refetch, index }) => {



    const { email, role } = user;


    const [myRole, setMyRole] = useState('');


    React.useEffect(() => {
        fetch('https://travel-tour-server-eight.vercel.app/my-role', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                )}`,
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log('pikures -> ', res)

                if (res.role) {
                    setMyRole(res.role);
                }
            })
    }, []);


    //Make an Admin here
    const makeAdmin = () => {
        fetch(
            `https://travel-tour-server-eight.vercel.app/user/admin/${email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => {
                if (res.status === 403) {
                    toast("You are not authorized to do this", {
                        type: "error",
                    });
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast("Successfully made an admin", { type: "success" });
                }
            });
    };

    // Make an hotel Host
    const makeHost = () => {
        fetch(
            `https://travel-tour-server-eight.vercel.app/user/host/${email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => {
                if (res.status === 403) {
                    toast("You are not authorized to do this", {
                        type: "error",
                    });
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast("Successfully made an Host", { type: "success" });
                }
            });
    };

    // const isAdminLoggedIn = admin && !host;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>



                <button
                    onClick={makeAdmin}
                    className="btn btn-outline btn-sm btn-success mx-5"
                    // disabled={role === "admin" || (host && !admin)}
                    disabled={myRole !== "admin" || role === 'admin'}
                >
                    Make Admin
                </button>

                <button
                    onClick={makeHost}
                    className="btn btn-outline btn-sm btn-success"
                    // disabled={role === "host" || (admin && !host)}
                    disabled={myRole === "user" || role === "host"}
                >
                    Make Host
                </button>


            </td>


            <td>
                <button className="btn btn-outline btn-sm btn-error" disabled={myRole !== "admin"}>
                    Remove User
                </button>
            </td>
        </tr>
    );
};

export default UserRow;