import React from 'react'
import data from './data'
const Faq = () => {
  return (
    <div>
        <div className="">
            <h2>Frequently Asked <span>Questions</span></h2>
            <p>Discover answers to common inquiries about our services and offerings. We strive to provide clear and helpful information to enhance your experience.</p>
        </div>
        <div className="">
         {data.map((item)=>(
            <div className="">
                <p>{item.id}.{item.question} <span>ar</span></p>
                <p>{item.answer}</p>
            </div>
         ))}
        </div>
    </div>
  )
}

export default Faq