import React from 'react';
import { useSelector } from 'react-redux';
import { getLoginStatus } from '../State/Authentication/Selector';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isLogin = useSelector(getLoginStatus);
  return (
      <>
          {isLogin ? <Outlet/> : <Navigate to="/"/>}
      </>
  )
}

export default PrivateRoute;