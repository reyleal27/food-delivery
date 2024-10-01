import React from 'react'

const CarouselItem = ({image,title}) => {
  return (
      <div className='flex flex-col justify-center items-center'>
          <img className='w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] rounded-full lg:h-[14rem] lg:w-[14rem]  object-cover object-center' src={image} alt={ title}/>
          <p className='py-5 font-semibold text-xl text-gray-400'>{title}</p>
      </div>
  )
}

export default CarouselItem;