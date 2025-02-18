import React from 'react'
import ContactMe from './ContactMe'
import Form from './Form'
const Contact = () => {
  return (
    <div>
        <h2>Contact</h2>
        <p>Get in touch with Bytewise Learning for collaborations, inquiries, or any questions you may have.</p>
        <hr className="w-[50px] h-[3px] bg-[#078791] border-none rounded-full mx-auto mt-3 mb-3 md:mt-4 md:mb-4" />
        <ContactMe/>
        <Form/>
    </div>
  )
}

export default Contact