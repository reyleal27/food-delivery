import React from 'react'
import AddressCard from '../Address/AddressCard'

const Address = () => {
  return (
      <div>
          <h2 className='text-xl text-center py-7 font-semibold'>Address</h2>
          <div className='flex flex-wrap gap-4 justify-center'>
              
          {[1,1,1,1,1].map(item => <AddressCard/>)}
          </div>
      </div>
  )
}

export default Address