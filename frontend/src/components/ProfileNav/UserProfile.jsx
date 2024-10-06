import React from 'react';
import { Avatar, Button } from '@mui/material';

const UserProfile = () => {
  return (
    <div className='flex items-center flex-col justify-center min-h-[80vh] text-center'>
      <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
      />
      <h2 className='py-5 text-2xl font-semibold'>Hello World</h2>
      <h6 className='pb-5 text-sm'>Email: helloworld@gmail.com</h6>
      <Button variant='contained' sx={{padding: '0.5rem 2rem'}} >Logout</Button>
    </div>
  )
}

export default UserProfile