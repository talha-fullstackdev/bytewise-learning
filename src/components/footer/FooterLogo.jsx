import { span } from 'framer-motion/client';
import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterLogo = () => {
    const icons = [<BsTwitterX /> , <FaFacebook />,<FaInstagram/>,  <FaLinkedin />    ]
  return (
    <div>
        <h1>Bytewise Learning</h1>
        <p>
        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div className="">
          {icons.map((icon)=>(
            <span>{icon}</span>
          ))}
        </div>
    </div>
  )
}

export default FooterLogo