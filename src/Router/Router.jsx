import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root";
import Home from "../Pages/Home";
import AddCart from "../Pages/AddCart";
import MyListing from "../Pages/MyListing";
import MyBooking from "../Pages/MyBooking";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
          index:true,
          Component:Home,  
        },
        {
            path:'/addCar',
            element:<AddCart></AddCart>
        },
        {
            path:'/myListing',
            element:<MyListing></MyListing>
        },
        {
            path:'/myBooking',
            element:<MyBooking></MyBooking>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
    ],
  },
]);

export default router;
