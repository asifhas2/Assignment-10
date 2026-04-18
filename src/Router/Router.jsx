import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root";
import Home from "../Pages/Home";
import AddCart from "../Pages/AddCart";
import MyListing from "../Pages/MyListing";
import MyBooking from "../Pages/MyBooking";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import BrowseCars from "../Pages/BrowseCars";
import CarDetails from "../Pages/carDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
          index:true,
          loader:()=>fetch('http://localhost:3000/cars'),
          Component:Home,  
        },
        {
            path:'/addCar',
            element:<PrivateRoute><AddCart></AddCart></PrivateRoute>
        },
        {
            path:'/myListing',
            element:<PrivateRoute><MyListing></MyListing></PrivateRoute>
        },
        {
            path:'/myBooking',
            element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        },
        {
            path:'/details/:id',
            loader:()=>fetch('http://localhost:3000/cars'),
            element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>
        },
        {
            path:'/browsCars',
            element:<BrowseCars></BrowseCars>
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
