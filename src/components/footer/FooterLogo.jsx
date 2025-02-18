// import { span } from 'framer-motion/client';
// import React from 'react'
// import { BsTwitterX } from "react-icons/bs";
// import { FaFacebook } from "react-icons/fa";

// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// const FooterLogo = () => {
//     const icons = [<BsTwitterX /> , <FaFacebook />,<FaInstagram/>,  <FaLinkedin />    ]
//   return (
//     <div>
//         <h1>Bytewise Learning</h1>
//         <p>
//         Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
//         <div className="">
//           {icons.map((icon)=>(
//             <span>{icon}</span>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default FooterLogo
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLogo = () => {
  const icons = [
    { icon: <BsTwitterX />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Bytewise Learning</h1>
      <p className="text-white text-sm leading-relaxed">
        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
        terra videa magna derita valies darta donna mare fermentum iaculis eu
        non diam phasellus.
      </p>
      <div className="flex justify-center md:justify-start gap-4 mt-4">
        {icons.map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            className="text-white hover:text-[#078791 ] transition text-xl cursor-pointer"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLogo;
