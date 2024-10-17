import React from 'react';
import { useSelector } from 'react-redux';
import { getLoginStatus, getUser } from '../State/Authentication/Selector';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isLogin = useSelector(getLoginStatus);
    const user = useSelector(getUser);

    console.log('privateroute',isLogin)
  return (
      <>
          {isLogin ? <Outlet/> : <Navigate to="/"/>}
       
      </>
  )
}

export default PrivateRoute;