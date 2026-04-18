import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
                 <ToastContainer position="top-right" />
        </div>
    );
};

export default Root;