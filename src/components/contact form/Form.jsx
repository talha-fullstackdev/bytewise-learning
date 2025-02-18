// import React from 'react'

// const Form = () => {
//   return (
//     <div>
//         <div className="">
//             <input type="text" placeholder='Your Name' />
//             <input type="text" placeholder='Your Email'/>
//         </div>
//         <input type="text" placeholder='Subject' />
//         <textarea name="" id="" rows="10" cols="5" placeholder='Message'></textarea>
//         <button>Send Message</button>
//     </div>
//   )
// }

// export default Form
import React from 'react';

const Form = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[500px] mx-auto md:mx-0 md:max-w-[700px]">
      <div className="flex flex-col gap-4">
        {/* Name & Email Fields */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
          />
        </div>

        {/* Subject Field */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
        />

        {/* Message Field */}
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#078791]"
        ></textarea>

        {/* Submit Button */}
        <button className="w-[200px] self-center bg-[#078791] text-white py-3 rounded-lg font-semibold hover:bg-[#056b6f] transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Form;
