import { Link, useLocation } from "react-router-dom";
import React from 'react';
import { signOut } from 'firebase/auth';
import Loading from "../Loading/Loading";
import auth from "../../../firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';



const NavBar = () => {

  // StickyNavbar.js



  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  // console.log(user);


  const currentPath = location.pathname;

  const isHotelsActive = currentPath === '/hotels';
  const isDestinationActive = currentPath === '/destination';

  const textColorClass = isHotelsActive || isDestinationActive ? 'text-white' : 'text-[#FF9466]';






  const navOptions = <>


    <li className='mx-2'><Link to="/">Home</Link></li>
    <li className="mx-2 "><Link to="/destination">Destination</Link></li>
    <li className="mx-2"><Link to="/hotels">Hotels</Link></li>
    {/* <li className={`mx-2 ${isHotelsActive ? 'text-white' : textColorClass}`}>
      <Link to="/hotels">Hotels</Link>
    </li>
    <li className={`mx-2 ${isDestinationActive ? 'text-white' : textColorClass}`}>
      <Link to="/destination">Destination</Link>
    </li> */}
    <li className="mx-2"><Link to="/flight">flight</Link></li>
    <li className="mx-2"><Link to="/packages">Packages</Link></li>

    {user && (
      <li className="mx-2">
        <Link to="/dashboard">Dashboard</Link>
      </li>

    )}
    <li className="block lg:hidden ">
      {user ? (
        <button
          className="bg-[#FF9466] text-black uppercase mx-2"
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
            className="bg-[#FF9466] text-black uppercase"
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
    // max-w-screen-xl mx-auto bg-opacity-50
    <section>
      <div className={`navbar fixed z-10 top-0 transition-all duration-300 
    ${isSticky ? 'bg-[#FF9466]' : 'bg-transparent'}`}>

        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          {/* 'text-[#FF9466]' */}
          <a className="font-bold text-xl md:px-12">Travel-<span className={`${isSticky ? 'text-[#FFFFFF]' : 'text-[#FF9466]'}`} >Swift</span></a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 font-semibold text-base">
            {navOptions}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;