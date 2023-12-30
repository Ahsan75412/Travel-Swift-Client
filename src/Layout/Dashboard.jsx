import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendar, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';

import useAdmin from "../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseConfig";
import useHost from "../hooks/useHost";
import { signOut } from "firebase/auth";
import { MdManageAccounts, MdMiscellaneousServices, MdOutlineAddBusiness, MdOutlineMiscellaneousServices, MdRequestPage } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";
import { TfiWrite } from "react-icons/tfi";
import { MdBookmarkAdded } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { LiaHotelSolid } from "react-icons/lia";
import { FaTableList } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { GrHostMaintenance } from "react-icons/gr";










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

                                <h2 className="w-full text-center font-bold text-3xl bg-slate-900 text-white p-2 uppercase rounded-xl mb-5">Admin</h2>
                                {/* Admin side bar content here */}
                                <li className="font-semibold"><NavLink to="/dashboard/adminhome"><FaHome className="text-xl"></FaHome>Admin Home</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/reqhost"><MdRequestPage className="text-xl" />Host Requests</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/addhotels"><MdOutlineAddBusiness className="text-xl" />Add an Hotel</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/managehotel"><MdManageAccounts className="text-xl" />Manage Hotels</NavLink></li>

                                {/* <li className="font-semibold"><NavLink to="/dashboard/packages"><FaUtensils></FaUtensils>Packages</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/manager"><FaUtensils></FaUtensils>Package Manager</NavLink></li> */}

                                <li className="font-semibold"><NavLink to="/dashboard/addservice"><HiViewGridAdd className="text-xl" /> Add an Service</NavLink></li>


                                <li className="font-semibold"><NavLink to="/dashboard/manageservices"><MdMiscellaneousServices className="text-xl" /> Manage Services</NavLink></li>




                                <li className="font-semibold"><NavLink to="/dashboard/addBlog"><TfiWrite className="text-xl" />Write Blog</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/bookings"><MdBookmarkAdded className="text-xl" />Bookings</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/users"><FaUsers className="text-xl"></FaUsers>All Users</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/profile"><RiProfileFill className="text-xl" />My Profile</NavLink></li>


                            </>
                        ) : host ?
                            <>
                                <h2 className="w-full text-center font-bold text-3xl bg-slate-900 text-white p-2 uppercase rounded-xl">Host</h2>

                                <li className="font-semibold mt-5"><NavLink to="/dashboard/adminhome"><FaHome className="text-xl"></FaHome>Host Home</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/addhotels"><MdOutlineAddBusiness className="text-xl" />Add Hotel</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/addservice"><HiViewGridAdd className="text-xl" /> Add an Service</NavLink></li>


                                <li className="font-semibold"><NavLink to="/dashboard/users"><FaUsers className="text-xl"></FaUsers>All Users</NavLink></li>

                                <li className="font-semibold"><NavLink to="/dashboard/profile"><RiProfileFill className="text-xl" />My Profile</NavLink></li>

                            </> : (
                                <>

                                    {/* User side bar content here */}
                                    <h2 className="w-full text-center font-bold text-3xl bg-slate-900 text-white p-2 uppercase rounded-xl">user</h2>
                                    <li className="font-semibold mt-5 "><NavLink to="/dashboard/adminhome"><FaHome className="text-xl"></FaHome>User Home</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/mybooking"><MdBookmarkAdded className="text-xl" />My Booking</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/bookingtable"><FaTableList className="text-xl" />Booking Table</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/addreview"><VscPreview className="text-xl" />
                                        Add Review</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/hostrequest"><GrHostMaintenance className="text-xl" />
                                        Host Request</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/addBlog"><TfiWrite className="text-xl" />Write Blog</NavLink></li>

                                    <li className="font-semibold"><NavLink to="/dashboard/profile"><RiProfileFill className="text-xl" />My Profile</NavLink></li>

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

                    <li className="font-semibold"><NavLink to="/"><FaHome className="text-xl"></FaHome> Main Home</NavLink></li>
                    <li className="font-semibold"><NavLink to="/hotels"><LiaHotelSolid className="text-xl" />All Hotels</NavLink></li>
                    <li className="font-semibold"><NavLink to="/allServices"><MdOutlineMiscellaneousServices className="text-xl" />Services</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;