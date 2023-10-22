import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
// import Hotels from "../pages/Hotels/allHotels/Hotels";
import Login from "../pages/Account/Login";
import SignUp from "../pages/Account/SignUp";
import Hotels from "../pages/Home/Hotels/Hotels";


  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, // this main from layout folder
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "hotels",
            element: <Hotels></Hotels>,
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
  ]);