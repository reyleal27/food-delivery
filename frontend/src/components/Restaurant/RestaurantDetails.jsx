import Grid from '@mui/material/Grid2';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider } from '@mui/material';

const RestaurantDetails = () => {
  return (
      <div className='px-5 lg:px-20 lg:py-10'>
          <section>
              <h3 className='text-gray-500 py-2 mt-5'>Home/Philippines/fast food/3</h3>
              <div>
                  <Grid container spacing={2}>
                      <Grid size={12}>
                          <img
                              className='w-full h-[40vh] object-cover'
                              src='https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_1280.jpg' alt='' />
                      </Grid>
                     <Grid size={{xs: 12, lg:6}}>
                          <img
                              className='w-full h-[40vh] object-cover'
                              src='https://cdn.pixabay.com/photo/2015/06/30/18/35/st-826687_1280.jpg' alt='' />
                      </Grid>
                      <Grid size={{xs: 12, lg:6}}>
                          <img
                              className='w-full h-[40vh] object-cover'
                              src='https://cdn.pixabay.com/photo/2024/02/23/00/33/ai-generated-8591048_1280.jpg' alt='' />
                      </Grid>
                      </Grid>
              </div>
              <div className='pt-3 pb-5 flex flex-col gap-2'>
                  <h2 className='text-4xl font-semibold'>Indian fast food</h2>
                  <p className='text-gray-500 flex items-center gap-3 '>Fast food is your go-to spot for delicious, quick meals that don’t compromise on quality. Our menu features a variety of mouth-watering options, from juicy burgers and crispy fries to fresh salads and refreshing beverages. Whether you’re grabbing a quick lunch or enjoying a family dinner, our friendly staff and speedy service ensure you have a satisfying experience every time. Come visit us and taste the difference!</p>
                  <span className='text-gray-500 px-3'><LocationOnIcon/>Iloilo,Philippines </span>
                   <span className='text-gray-500 px-3'><CalendarTodayIcon/> Mon-Sun: 9:00 AM - 9:00 PM (Today) </span>
              </div>
          </section>
          <Divider />
          <section className='pt-[2rem] lg:flex relative'>
              <div className='space-y-10 lg:w-[20%] filter'>
                  
              </div>
              <div className='space-y-10 lg:w-[80%] filter'>
                  
              </div>
          </section>

      </div>
  )
}

export default RestaurantDetails