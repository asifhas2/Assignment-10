import React, { useState } from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
      const [search, setSearch] = useState("");
    return (
        <div>
            <Navber setSearch={setSearch}></Navber>
            <div>
                <Outlet context={{search}}></Outlet>
            </div>
            <Footer></Footer>
                 <ToastContainer position="top-right" />
        </div>
    );
};

export default Root;