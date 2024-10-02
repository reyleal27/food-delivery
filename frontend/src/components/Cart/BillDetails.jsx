import { Divider } from '@mui/material'
import React from 'react'

const BillDetails = () => {
  return (
      <div className='billDetails px-5 text-sm pb-[5rem]'>
          <p className='font-extralight py-5'>Bill Details</p>
          <div className='space-y-3'>
              <div className='flex justify-between text-gray-400'>
                  <h6>Item Total</h6>
                  <p>&#8369;500</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                  <h6>Delivery Fee</h6>
                  <p>&#8369;100</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                  <h6>Platform Fee</h6>
                  <p>&#8369;300</p>
              </div>
              <Divider />
               <div className='flex justify-between text-gray-400'>
                  <h6>Total Pay</h6>
                  <p>&#8369;5000</p>
              </div>
          </div>
          </div>
  )
}

export default BillDetails