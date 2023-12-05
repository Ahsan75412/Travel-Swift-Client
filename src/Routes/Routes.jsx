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
import Dashboard from "../Layout/Dashboard";
import Users from "../pages/Dashboard/AllUsers/Users";
import Admin_Home from "../pages/Dashboard/Admin/Admin_Home";
import AddHotels from "../pages/Dashboard/Admin/AddHotels";
import ManageHotels from "../pages/Dashboard/Admin/ManageHotels";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import MyBooking from "../pages/Dashboard/User_Dashboard/MyBooking";
import BookingTable from "../pages/Dashboard/User_Dashboard/BookingTable";
import Bookings from "../pages/Dashboard/Admin/bookings";
import Payment from "../pages/Dashboard/Payment";
import AddReview from "../pages/Dashboard/User_Dashboard/AddReview";
import Manage from "../pages/Dashboard/Host_Dashboard/Manage";
import Destination from "../pages/Destination/Destination";
import Flights from "../pages/Flights/Flights";





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
        path: "destination",
        element: <Destination></Destination>,
      },
      {
        path: "flights",
        element: <Flights></Flights>,
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
      }

    ]

  },

   // Dashboard Route different path 
   {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'adminhome',
        element: <Admin_Home></Admin_Home>,

      },
   
      {
        path:'addhotels',
        element: <AddHotels></AddHotels>
      },
      {
        path:'managehotel',
        element: <ManageHotels></ManageHotels>
      },
      {
        path:'bookings',
        element: <Bookings></Bookings>
      },
      {
        path:'profile',
        element: <MyProfile></MyProfile>
      },
      {
        path:'manages',
        element: <Manage></Manage>
      },

      //admin routes
      // {
      //   path: 'adminhome',
      //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      // },
      {
        path: 'users',
        element: <Users></Users>,
      },
      {
        path: 'mybooking',
        element: <MyBooking></MyBooking>,
      },
      {
        path: 'bookingtable',
        element: <BookingTable></BookingTable>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      },
      {
        path: 'addreview',
        element: <AddReview></AddReview>
      },
    

      // {
      //   path: 'addItem',
      //   element: <AdminRoute><AddItem></AddItem></AdminRoute>
      // },

      // {
      //   path: 'manageitems',
      //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      // },

    ]
  }
 
]);