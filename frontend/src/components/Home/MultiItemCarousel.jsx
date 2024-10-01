import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {topMeals} from "./topMeals";
import CarouselItem from './CarouselItem';
import Slider from 'react-slick';


const MultiItemCarousel = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         arrows: false,
    responsive: [
    {
      breakpoint: 769, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
        },
        {
      breakpoint: 480, // Additional breakpoint for smaller screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
  };
  return (
      <div className=''>
          <Slider {...settings}>
              {topMeals.map((item, index) => <CarouselItem key={index} title={item.title} image={item.image}/> )}
          </Slider>
      </div>
  )
}

export default MultiItemCarousel