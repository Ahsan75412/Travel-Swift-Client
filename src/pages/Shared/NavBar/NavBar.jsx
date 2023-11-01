import { Link, useLocation } from "react-router-dom";
import React from 'react';
import { signOut } from 'firebase/auth';
import Loading from "../Loading/Loading";
import auth from "../../../firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {

  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  console.log(user);


  const navOptions = <>


    <li><Link to="/">Home</Link></li>
    <li><Link to="/hotels">Hotels</Link></li>
    <li><Link to="/packages">Packages</Link></li>

    {user && (
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

    )}
    <li className="block lg:hidden ">
      {user ? (
        <button
          className="btn btn-link"
          onClick={logout}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </li>
    <ul className="hidden lg:block text-primary">
      <li>
        {user ? (
          <button
            className="btn btn-link"
            onClick={logout}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </ul>

    <div
      className={
        user
          ? "avatar online ml-4 hidden lg:block"
          : "avatar online ml-4 hidden"
      }
    >
      {user ? (
        <div className="w-10 rounded-full ">
          <img src={user?.photoURL} alt="" />
        </div>
      ) : (
        <p className="hidden lg:hidden"></p>
      )}
    </div>

  </>
  return (
    <div className="navbar fixed z-10 top-0 p-5 bg-opacity-50 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <a className="font-bold text-xl">Travel-<span className='text-yellow-500'>Swift</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;