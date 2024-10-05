import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme  from './components/Theme/DarkTheme';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      <Profile/>
      </ThemeProvider>
  )
}

export default App