import React, { use } from 'react';
import AuthContext from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    const location = useLocation();

    if(loading){
         return <span className="loading loading-ring loading-md"></span>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/register'></Navigate>
    }
    
};

export default PrivateRoute;