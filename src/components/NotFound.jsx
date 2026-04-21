import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGVlwDhbC-6RixbdgEwDrABJ6BD3hhM2eJA&s" alt="" />
      <p className="text-xl mt-4">Page Not Found</p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
    );
};

export default NotFound;