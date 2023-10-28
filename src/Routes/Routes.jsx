import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
// import Hotels from "../pages/Hotels/allHotels/Hotels";
import Login from "../pages/Account/Login";
import SignUp from "../pages/Account/SignUp";
import Hotels from "../pages/Home/Hotels/Hotels";
import HotelDetails from "../pages/HotelDetails/HotelDetails";
import Hotel from "../pages/Hotel/Hotel";
import { ToastContainer } from "react-toastify";
import BookingInfo from "../pages/HotelDetails/BookingInfo";



  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, // this main from layout folder
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        // {
        //     path: "",
        //     element: <Hotels></Hotels>,
        // },
        {
            path: "hotels",
            element: <Hotel></Hotel>,
        },
        {
            path: "hotel/:hotelId",
            element: <HotelDetails></HotelDetails>,
        },
        {
            path: "booking",
            element: <BookingInfo></BookingInfo>,
        },
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "signup",
            element: <SignUp></SignUp>,
        },

      ]
      
    },
    <ToastContainer></ToastContainer>
  ]);