import React, { useState } from 'react'
import ProfileNavigations from './ProfileNavigations'

const Profile = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const handleClose = () => {}

  return (
      <div className='lg:flex justify-between'>
          <div className='relative h-[80vh] lg:w-[20%]'>
              <ProfileNavigations open={openSidebar} handleClose={handleClose}/>
          </div>
          <div className='lg:w-[80%]'>
               
      </div>
      </div>
  )
}

export default Profile