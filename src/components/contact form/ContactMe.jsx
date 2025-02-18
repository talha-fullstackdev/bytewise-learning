import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FiClock } from "react-icons/fi";

const ContactMe = () => {
    const data =[
        {
            icon:<CiLocationOn />,
            name:"Address",
            contact:"F-10 Markaz, Islamabad, 44000, PK"
        },
        {
            icon:<LuPhone />,
            name:"Call Us",
            contact:"051 5589 5548"
        },
        {
            icon:<TfiEmail />,
            name:"Email Us",
            contact:"info@bytewiselearning.com"
        },
        {
            icon:<FiClock />,
            name:"Open Hours:",
            contact:"Mon-Fri: 09AM - 05PM"
        },
    ]
  return (
    <div>
        {data.map((item)=>(
            <div className="">
                <div className="">{item.icon}</div>
                <div className="">
                    <p>{item.name}</p>
                    <p>{item.contact}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ContactMe