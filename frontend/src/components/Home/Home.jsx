import React from 'react';
import './Home.css';
import MultiItemCarousel from './MultiItemCarousel';

const Home = () => {
   
  return (
      <>
          <section className='banner -z-50 relative flex flex-col justify-center items-center'>
              <div className='w-[50vw] h-[50vh] z-10 text-center'>
                  <h2 className='text-2xl lg:text-6xl font-bold z-10 py-5'>Food Express</h2>
                  <h6 className='z-10 text-gray-300 text-xl lg:text-4xl'>Your Favorite Dishes, Delivered with Love and Care, Anytime, Anywhere</h6>
              </div>
              <div className='cover absolute top-0 left-0 right-0 '> </div>

              <div className='fadout'></div>
              
          </section>
          <section className='p-10 lg:py-10 lg:px-20'>
              <h6 className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</h6>
          <MultiItemCarousel/>
          </section>
          <section>
              <h2>Orders from Our Handpicked Favorites</h2>
          </section>
          </>
  )
}

export default Home