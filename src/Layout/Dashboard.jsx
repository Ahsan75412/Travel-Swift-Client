import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendar, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';

import useAdmin from "../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseConfig";
import useHost from "../hooks/useHost";
import { signOut } from "firebase/auth";



const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [host] = useHost(user);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    // TODO:


    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
              
                <label htmlFor="my-drawer-2" className="btn btn-warning bg-[#FF9466] drawer-button lg:hidden mt-5">Open Dashboard</label>
                
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* <ul className=" "> */}
                <ul className="menu p-4 w-80 min-h-full bg-[#FF9466] ">

                    {/* admin and user conditional rendering code here! */}

                    {
                        admin ? (

                            <>

                                <h2 className="w-full text-center font-bold text-3xl bg-slate-900 text-white p-2 uppercase rounded-xl">Admin</h2>
                                {/* Admin side bar content here */}
                                <li className="font-semibold"><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/addhotels"><FaUtensils></FaUtensils> Add an Hotel</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/addservice"><FaUtensils></FaUtensils> Add an Service</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/managehotel"><FaWallet></FaWallet>Manage Hotels</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/manageservices"><FaWallet></FaWallet>Manage Services</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/addBlog"><FaBook></FaBook>Write Blog</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/bookings"><FaBook></FaBook>Bookings</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/users"><FaUsers></FaUsers>All Users</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/profile"><FaUsers></FaUsers>My Profile</NavLink></li>


                            </>
                        ) : host ?
                            <>
                                <h2 className="w-full text-center font-bold text-3xl bg-slate-900 text-white p-2 uppercase rounded-xl">Host</h2>
                                <li className="font-semibold"><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Host Home</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/addhotels"><FaUtensils></FaUtensils>Add Hotel</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/managehotel"><FaWallet></FaWallet>Manage Hotels</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/users"><FaUsers></FaUsers>All Users</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/profile"><FaUsers></FaUsers>My Profile</NavLink></li>

                            </> : (
                                <>

                                    {/* User side bar content here */}
                                    <h2 className="w-full text-center font-bold text-3xl bg-slate-900 text-white p-2 uppercase rounded-xl">user</h2>
                                    <li className="font-semibold mt-5 "><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/mybooking"><FaCalendar></FaCalendar>My Booking</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/bookingtable"><FaCalendar></FaCalendar>Booking Table</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/addreview"><FaCalendar></FaCalendar>
                                        Add Review</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/hostrequest"><FaCalendar></FaCalendar>
                                        Host Request</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/profile"><FaWallet></FaWallet>My Profile</NavLink></li>

                                    {/* <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge  badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li> */}
                                    {/* TODO: */}
                                    <li>
                                        {user ? (
                                            <button className="btn mt-5 font-bold btn-outline pt-3" onClick={logout}>
                                                Sign Out
                                            </button>
                                        ) : (
                                            <NavLink to="/login">Login</NavLink>
                                        )}
                                    </li>


                                </>
                            )}





                    <div className="divider"></div>

                    <li className="font-semibold"><NavLink to="/"><FaHome></FaHome> Main Home</NavLink></li>
                    <li className="font-semibold"><NavLink to="/hotels"><FaHome></FaHome>All Hotels</NavLink></li>
                    <li className="font-semibold"><NavLink to="/allServices"><FaHome></FaHome>Services</NavLink></li>

                </ul>

            </div>
        </div> 
    );
};

export default Dashboard;