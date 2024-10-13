import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme  from './components/Theme/DarkTheme';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import CustomerRoute from './components/Routers/CustomerRoute';
import { useDispatch, useSelector} from 'react-redux';
import { getUser } from './components/State/Authentication/Action';

const App = () => {
  const jwt = localStorage.getItem('jwt');
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.auth)

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(userData.jwt || jwt))
    }
  },[dispatch,jwt])

  // useEffect(() => {
  //   if (jwt && (!userData.jwt || userData.jwt !== jwt)) {
  //       dispatch(getUser(jwt));
  //   }
  // }, [dispatch, jwt, userData.jwt]);
  console.log('userData',userData)

  
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
      {/* <Navbar /> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile /> */}
      <CustomerRoute/>
      </ThemeProvider>
  )
}

export default App