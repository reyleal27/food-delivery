import React from 'react';
import { Avatar, Button } from '@mui/material';

const UserProfile = () => {
  const handleLogout = () =>{}
  return (
    <div className='flex items-center flex-col justify-center min-h-[80vh] text-center'>
      <Avatar
        className='cursor-pointer'
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
      />
      <h2 className='py-5 text-2xl font-semibold'>Hello World</h2>
      <p className='pb-5 text-sm'>Email: helloworld@gmail.com</p>
      <Button variant='contained' onClick={handleLogout } sx={{padding: '0.5rem 2rem', color:'white'}} >Logout</Button>
    </div>
  )
}

export default UserProfile