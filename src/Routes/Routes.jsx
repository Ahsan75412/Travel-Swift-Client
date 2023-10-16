import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";


  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, // this main from layout folder
      children: [
        {
            path: "/",
            element: <Home></Home>,
        }

      ]
    },
  ]);