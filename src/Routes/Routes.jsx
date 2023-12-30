import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
// import Hotels from "../pages/Hotels/allHotels/Hotels";
import Login from "../pages/Account/Login";
import SignUp from "../pages/Account/SignUp";
// import Hotels from "../pages/Home/Hotels/Hotels";
import HotelDetails from "../pages/HotelDetails/HotelDetails";
import Hotel from "../pages/Hotel/Hotel";
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
import AddServices from "../pages/Dashboard/Admin/AddServices";
import Flights from "../pages/Services/Flights";
import ServicesForm from "../pages/Services/ServicesForm";
import Cars from "../pages/Services/Cars";
import Guid from "../pages/Services/Guid";
import AllServices from "../pages/Services/AllServices";
import HostRequest from "../pages/Dashboard/User_Dashboard/HostRequest";
import AddBlog from "../pages/Dashboard/Admin/AddBlog";
import Blog from "../pages/Blog/blog";
import BlogDetail from "../pages/Blog/blogDetail";
import ManageServices from "../pages/Dashboard/Admin/ManageServices";
import ManageHostRequests from "../pages/Dashboard/Admin/ManageHostRequests";
import AddPackages from "../pages/Dashboard/Admin/AddPackages";
import SubscribeMain from "../pages/Home/subscribe/SubscribeMain";






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
          path: "subscribe",
          element: <SubscribeMain></SubscribeMain>,
      },
      {
        path: "hotels",
        element: <Hotel></Hotel>,
      },
  
      {
        path: "destination",
        element: <Destination></Destination>,
      },
      {
        path: "flight",
        element: <Flights></Flights>,
      },
      {
        path: "rentalCars",
        element: <Cars></Cars>,
      },
      {
        path: "tourGuid",
        element: <Guid></Guid>,
      },
      {
        path: "allServices",
        element: <AllServices></AllServices>,
      },
  
      {
        path: "serviceForm",
        element: <ServicesForm></ServicesForm>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "blog/:id",
        element: <BlogDetail></BlogDetail>,
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
        path:'addservice',
        element: <AddServices></AddServices>
      },
      {
        path:'packages',
        element: <AddPackages></AddPackages>
      },
      {
        path:'managehotel',
        element: <ManageHotels></ManageHotels>
      },
      {
        path:'manageservices',
        element: <ManageServices></ManageServices>
      },
      {
        path:'reqhost',
        element: <ManageHostRequests></ManageHostRequests>
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
        path:'addBlog',
        element: <AddBlog></AddBlog>
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
        path: 'hostrequest',
        element: <HostRequest></HostRequest>,
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