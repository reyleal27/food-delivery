import React, { Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import RestaurantDetails from "../Restaurant/RestaurantDetails";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import ModalComponent from "../Modal/Modal";
import PublicRoute from "../PublicRoute/PublicRoute";
import RegisterForm from "../RegisterForm/RegisterForm";
import Login from "../LoginForm/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const CustomerRoute = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route> */}
          <Route element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="/account/register" element={<Home />} />
            <Route path="/account/login" element={<Home />} />
            <Route
              path="/restaurant/:city:title/:id"
              element={<RestaurantDetails />}
            />
            <Route path="/cart" element={<Cart />} />
          </Route>
          {/* <Route> */}
          <Route path="/myprofile/*"  element={<PrivateRoute />}>
            <Route path='*' element={<Profile />} />
          </Route>
        </Routes>

        <ModalComponent />
      </Suspense>
    </div>
  );
};

export default CustomerRoute;
