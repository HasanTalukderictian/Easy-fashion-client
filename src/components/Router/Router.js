import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main/Main";
import Home from "../Page/Home/Home";
import Bookings from "../Page/Bookings/Bookings";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";

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
          element:<Bookings></Bookings>,
          loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
       
      ]
    },
  ]);