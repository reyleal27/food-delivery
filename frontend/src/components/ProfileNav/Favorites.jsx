import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'

const Favorites = () => {
  return (
       <>
          <h2 className='text-xl text-center py-7 font-semibold'>Favorites</h2>
          <div className='flex flex-wrap gap-4 justify-center'>
              {[1,1,1,,1,1].map(item => <RestaurantCard/>)}
            </div>
      </>
  )
}

export default Favorites