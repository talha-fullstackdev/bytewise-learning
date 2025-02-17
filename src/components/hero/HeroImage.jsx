import React from 'react'
import image from "../../assets/hero-img.svg"
const HeroImage = () => {
  return (
    <div className='md:max-[600px]  md:mt-32'>
        <img src={image} alt="hero image"  className='w-[260px] md:w-full md:pr-10 '/>
    </div>
  )
}

export default HeroImage