// import React from 'react'
// import { CiLocationOn } from "react-icons/ci";
// import { LuPhone } from "react-icons/lu";
// import { TfiEmail } from "react-icons/tfi";
// import { FiClock } from "react-icons/fi";

// const ContactMe = () => {
//     const data =[
//         {
//             icon:<CiLocationOn />,
//             name:"Address",
//             contact:"F-10 Markaz, Islamabad, 44000, PK"
//         },
//         {
//             icon:<LuPhone />,
//             name:"Call Us",
//             contact:"051 5589 5548"
//         },
//         {
//             icon:<TfiEmail />,
//             name:"Email Us",
//             contact:"info@bytewiselearning.com"
//         },
//         {
//             icon:<FiClock />,
//             name:"Open Hours:",
//             contact:"Mon-Fri: 09AM - 05PM"
//         },
//     ]
//   return (
//     <div className='bg-[#078791] w-[350px] m-auto flex flex-col items-center gap-4'>
//         {data.map((item)=>(
//             <div className="w-[300px] flex items-center gap-5 border p-3">
//                 <div className="text-3xl bg-blue-100 p-2 rounded-full">{item.icon}</div>
//                 <div className="">
//                     <p>{item.name}</p>
//                     <p>{item.contact}</p>
//                 </div>
//             </div>
//         ))}
//     </div>
//   )
// }

// export default ContactMe
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FiClock } from "react-icons/fi";

const ContactMe = () => {
  const data = [
    {
      icon: <CiLocationOn />,
      name: "Address",
      contact: "F-10 Markaz, Islamabad, 44000, PK",
    },
    { icon: <LuPhone />, name: "Call Us", contact: "051 5589 5548" },
    {
      icon: <TfiEmail />,
      name: "Email Us",
      contact: "info@bytewiselearning.com",
    },
    { icon: <FiClock />, name: "Open Hours", contact: "Mon-Fri: 09AM - 05PM" },
  ];

  return (
    <div className="bg-[#078791] w-full md:ml-32 max-w-[400px] m-auto md:m-0 p-6 rounded-lg shadow-lg flex flex-col items-center gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full flex items-center gap-4 bg-[#079799] p-4 rounded-lg shadow-md hover:shadow-lg transition text-white"
        >
          <div className="text-3xl bg-blue-100 p-3 rounded-full text-[#078791]">
            {item.icon}
          </div>
          <div>
            <p className="text-lg font-semibold">{item.name}</p>
            <p>{item.contact}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMe;
