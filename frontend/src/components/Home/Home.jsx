import React from 'react';
import './Home.css';
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';

import ModalComponent from '../Modal/Modal';


const restaurant = [1, 1, 1, 1, 1];

const Home = () => {
   
  return (
      <div className='pb-10'>
          <section className='banner -z-50 relative flex flex-col justify-center items-center'>
              <div className='w-[50vw] h-[50vh] z-10 text-center'>
                  <h2 className='text-2xl lg:text-6xl font-bold z-10 py-5'>Food Express</h2>
                  <h6 className='z-10 text-gray-300 text-xl lg:text-4xl'>Your Favorite Dishes, Delivered with Love and Care, Anytime, Anywhere</h6>
              </div>
              <div className='cover absolute top-0 left-0 right-0 '> </div>

              <div className='fadout'></div>
              
          </section>
          <section className='p-10 lg:py-10 lg:px-20'>
              <h4 className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</h4>
          <MultiItemCarousel/>
          </section>
          <section className='p-10 lg:py-10 lg:px-20 pt-8'>
              <h4 className='text-2xl font-semibold text-gray-400 py-3 pb-5'>Orders from Our Handpicked Favorites</h4>
              <div className='flex justify-around flex-wrap gap-5 items-center'>
                  
                  {restaurant.map((item, index) => <RestaurantCard key={index } />)} 
           </div>
          </section>
          <ModalComponent/>
      </div>
      
  )
}

export default Home