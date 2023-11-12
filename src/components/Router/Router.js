import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main/Main";
import Home from "../Page/Home/Home";
import Bookings from "../Page/Bookings/Bookings";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import MyBookings from "../Page/MyBookings/MyBookings";
import PrivateRoutes from "./PrivateRoutes";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        }, 
        {
          path:'/bookings/:id',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
          loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/mybookings',
          element:<PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
        }
       
      ]
    },
  ]);