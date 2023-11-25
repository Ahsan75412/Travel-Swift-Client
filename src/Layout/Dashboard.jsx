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
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  ">

                    {/* admin and user conditional rendering code here! */}

                    {
                        admin ? (

                            <>

                                <h2>Admin</h2>
                                {/* Admin side bar content here */}
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addhotels"><FaUtensils></FaUtensils> Add an Hotel</NavLink></li>
                                <li><NavLink to="/dashboard/managehotel"><FaWallet></FaWallet>Manage Hotels</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/bookings"><FaBook></FaBook>All Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>All Users</NavLink></li>
                                <li><NavLink to="/dashboard/profile"><FaUsers></FaUsers>My Profile</NavLink></li>


                            </>
                        ) : host ?
                            <>
                                <h2>Host</h2>
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Host Home</NavLink></li>
                                <li><NavLink to="/dashboard/addhotels"><FaUtensils></FaUtensils>Add Hotel</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet>Manage Hotels</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>All Users</NavLink></li>
                                <li><NavLink to="/dashboard/profile"><FaUsers></FaUsers>My Profile</NavLink></li>

                            </> : (
                                <>

                                    {/* User side bar content here */}
                                    <h2>user</h2>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>

                                    <li><NavLink to="/dashboard/mybooking"><FaCalendar></FaCalendar>My Booking</NavLink></li>

                                    <li><NavLink to="/dashboard/bookingtable"><FaCalendar></FaCalendar>Booking Table</NavLink></li>

                                    <li><NavLink to="/dashboard/addreview"><FaCalendar></FaCalendar>
                                        Add Review</NavLink></li>

                                    <li><NavLink to="/dashboard/profile"><FaWallet></FaWallet>My Profile</NavLink></li>

                                    {/* <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge  badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li> */}
                                    {/* TODO: */}
                                    <li>
                                        {user ? (
                                            <button className="btn btn-link" onClick={logout}>
                                                Sign Out
                                            </button>
                                        ) : (
                                            <NavLink to="/login">Login</NavLink>
                                        )}
                                    </li>


                                </>
                            )}





                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/hotels"><FaHome></FaHome> Hotels</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;