import React from 'react'
import ContactMe from './ContactMe'
import Form from './Form'
const Contact = () => {
  return (
    <div className='mt-6'>
        <h2 className='text-center md:text-4xl text-xl'>Contact</h2>
        <p className='text-center text-md mt-4'>Get in touch with Bytewise Learning for collaborations, inquiries, or any questions you may have.</p>
        <hr className="w-[50px] h-[3px] bg-[#078791] border-none rounded-full mx-auto mt-3 mb-3 md:mt-4 md:mb-4" />
        <div className="md:flex md:justify-around  flex-wrap">

        
        <ContactMe/>
        <Form/>
        </div>
    </div>
  )
}

export default Contact