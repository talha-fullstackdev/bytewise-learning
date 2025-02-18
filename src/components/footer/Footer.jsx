// import React from 'react'
// import FooterLogo from './FooterLogo'
// import FooterList from './FooterList'
// const Footer = () => {
//   return (
//     <div>
// <FooterLogo/>
// <FooterList/>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import FooterLogo from "./FooterLogo";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-[#078791]  text-white py-10 px-5 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
        <FooterLogo />
        <FooterList />
      </div>
      <p className="text-center text-sm md:text-lg mt-6 border-t border-gray-700 pt-4">
        © 2025 Bytewise Learning. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
