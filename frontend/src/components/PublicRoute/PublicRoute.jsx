import React from 'react';
import { useSelector } from 'react-redux';
import { getLoginStatus } from '../State/Authentication/Selector';
import { Navigate, Outlet} from 'react-router-dom';


const PublicRoute = () => {
    const isLogin = useSelector(getLoginStatus);
    console.log(isLogin);
  return (
      <>
          {!isLogin ? (
              <Outlet/> 
          )  :(<Navigate to='/myprofile'/>) }
      </>
  )
}

export default PublicRoute;