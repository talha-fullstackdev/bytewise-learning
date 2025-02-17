import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
const Header = () => {
  return (
    <header className='bg-[#045f66] flex flex-col pl-28 gap-2 md:flex-row md:pl-0 md:py-4 md:justify-between flex-wrap'>
        <Logo/>
        <Navbar/>
    </header>
  )
}

export default Header