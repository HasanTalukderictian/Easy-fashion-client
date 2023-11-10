import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main/Main";
import Home from "../Page/Home/Home";
import Products from "../Page/Home/Products/Products";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        }, 
       
      ]
    },
  ]);