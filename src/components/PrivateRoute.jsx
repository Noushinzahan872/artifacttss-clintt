import React, {useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    // console.log(user);
    const location=useLocation()
    // console.log(location);

    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }

    if(user && user?.email){
        return  children;
    }
return <Navigate state={location.pathname} to='/login'></Navigate>
    
   
};

export default PrivateRoute;