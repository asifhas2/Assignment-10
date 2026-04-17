import React, { use } from "react";
import { NavLink } from "react-router";
import AuthContext from "../Provider/AuthContext";
import Swal from "sweetalert2";

const Navber = () => {
  const { user, signOutUser } = use(AuthContext);
  console.log(user);
  const handelSignOut = () => {
    signOutUser()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logout Successful!",
          text: "Logout Successful !",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const links = (
    <>
      <li className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink to="/addCar">Add-Car</NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink to="/myListing">My-Listings</NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink to="/myBooking">My-Bookings</NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink to="/browsCars">Browse-Cars</NavLink>
      </li>
      {user ? (
        <li className="font-semibold hidden">
          <NavLink to="/login">Login</NavLink>
        </li>
      ) : (
        <li className="font-semibold">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      <li className="font-semibold ">
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center">
            <img className="h-10 w-10 rounded-full object-cover" src="https://www.shutterstock.com/image-vector/handshake-car-logo-vector-illustration-600nw-2636774943.jpg" alt="" />
        <a className=" text-xl font-semibold ml-4">EasyRent</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="flex gap-2 navbar-end">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between text-[18px] font-semibold">
                  {user?.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="font-semibold">{user?.email}</a>
              </li>
              <li>
                <button className="font-semibold" onClick={handelSignOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
