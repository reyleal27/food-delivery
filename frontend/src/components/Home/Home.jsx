import React from 'react';
import './Home.css';

const Home = () => {
  return (
      <>
          <section className='banner -z-50 relative flex flex-col justify-center items-center'>
              <div className='w-[50vw] z-10 text-center'>
                  <h2 className='text-2xl lg:text-6xl font-bold z-10 py-5'>Food Express</h2>
                  <h6 className='z-10 text-gray-300 text-xl lg:text-4xl'>Your Favorite Dishes, Delivered with Love and Care, Anytime, Anywhere</h6>
              </div>
              <div className='cover absolute top-0 left-0 right-0 '> </div>

                <div className='fadout'></div>
          </section>
          </>
  )
}

export default Home