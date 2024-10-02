import { IconButton } from '@mui/material'
import React, { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Chip from '@mui/material/Chip';


const CartItem = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddQuantity = () => {
        setQuantity(prevQuantity => prevQuantity+1);
    }
      const handleMinusQuantity = () => {
 setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }
  return (
      <div className='px-5'>
          <div className='lg:flex items-center lg:space-x-5'>
         
          <div>
              <img className='w-[5rem] h-[5rem] object-cover' src='https://cdn.pixabay.com/photo/2023/04/14/19/09/ai-generated-7925774_640.jpg' alt=''/>
              </div>
              <div className='flex items-center justify-between lg:w-[70%]'>
                  <div className='space-y-1 lg:space-y-3 w-full'>
                      <p>biryani</p>
                      <div className='flex justify-between items-center'>
                          <div className='flex items-center space-x-1'>
                              <IconButton className='flex' onClick={handleMinusQuantity}>
                                  <RemoveCircleOutlineIcon  color='primary' />

                              </IconButton>
                              <div className='w-5 h-5 text-xs flex items-center justify-center'>{quantity }</div>
                              <IconButton className='flex' onClick={handleAddQuantity}>
                                 
                                  <AddCircleOutlineIcon color="primary" />
                              </IconButton>
                          </div>
                        </div>
                        
                  </div>
                  <p>&#8369;500</p>
              </div>
          </div>
          <div className='pt-3 space-x-2'>
              {[1, 1, 1,].map((item, index) => <Chip key={index } label='hello'/>)}
          </div>
           </div>
  )
}

export default CartItem