import React from 'react'
import HeroPara from './HeroPara'
import HeroImage from './HeroImage'
const Hero = () => {
  return (
    <div className=' bg-[#078791] text-white pt-4 flex flex-col gap-6 items-center md:flex-row md:justify-around md:pb-48 '>
        <HeroPara/>
        <HeroImage/>
    </div>
  )
}

export default Hero