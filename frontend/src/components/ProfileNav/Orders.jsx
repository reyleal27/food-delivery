import React from 'react'
import OrderCard from '../OrderCard/OrderCard'

const Orders = () => {
  return (
    <div className='flex items-center flex-col justify-center'>
      <h2 className='text-xl text-center py-7 font-semibold'>My Orders</h2>
      <div className='space-y-5 w-full lg:w-1/2'>
        <OrderCard/>
      {}
      </div>
    </div>
  )
}

export default Orders