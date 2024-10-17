import React, { useState } from 'react'
import ProfileNavigations from './ProfileNavigations';
import { Route,Routes } from 'react-router-dom';
import UserProfile from '../ProfileNav/UserProfile';
import Orders from '../ProfileNav/Orders';
import Favorites from '../ProfileNav/Favorites';
import Address from '../ProfileNav/Address';
import Notification from '../ProfileNav/Notification';
import Payment from '../ProfileNav/Payment';
import Events from '../ProfileNav/Events';
import Home from '../Home/Home';
import Navigations from './Navigations';



const Profile = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

  return (
      <div className='lg:flex justify-between'>
          <div className='relative lg:h-[80vh] lg:w-[20%]'>
           <Navigations/>
              <ProfileNavigations open={openSidebar} />
          </div>
          <div className='lg:w-[80%]'>
              <Routes>
                  <Route path='/profile' element={<UserProfile />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/favorite' element={<Favorites/>} />
                  <Route path='/address' element={<Address/>}/>
                  <Route path='/notification' element={<Notification/>}/>
                  <Route path='/payment' element={<Payment />} />
                  <Route path='/events' element={<Events />} />
                  <Route path='/logout' element={<Home/>}/>
              </Routes>
               
      </div>
      </div>
  )
}

export default Profile