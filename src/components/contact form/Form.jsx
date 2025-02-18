import React from 'react'

const Form = () => {
  return (
    <div>
        <div className="">
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email'/>
        </div>
        <input type="text" placeholder='Subject' />
        <textarea name="" id="" rows="10" cols="5" placeholder='Message'></textarea>
        <button>Send Message</button>
    </div>
  )
}

export default Form