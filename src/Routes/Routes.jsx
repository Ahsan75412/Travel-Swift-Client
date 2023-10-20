import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Hotels from "../pages/Hotels/allHotels/Hotels";


  
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
        }

      ]
    },
  ]);