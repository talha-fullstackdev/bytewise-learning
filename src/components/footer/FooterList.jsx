// import React from 'react'

// const FooterList = () => {
//     const data =[
//         {
//           heading:"Useful Links",
//           para1:"Home",
//           para2:"About us",
//           para3:"Services",
//           para4:"Terms of service",
//           para5:"Privacy policy"
//         },
//         {
//           heading:"Our Services",
//           para1:"Web Design",
//           para2:"Web Development",
//           para3:"Product Management",
//           para4:"Marketing",
//           para5:"Graphic Design"
//         },
//         {
//           heading:"Contact Us",
//           para1:"F-10 Markaz",
//           para2:"Islamabad",
//           para3:"Pakistan",
//           para4:"Phone: 051 5589 5548",
//           para5:"Email: info@bytewiselearning.com"
//         },
//     ]
//   return (
//     <div>
//       {data.map((item)=>(
//         <div className="">
//             <h2>{item.heading}</h2>
//             <p>{item.para1}</p>
//             <p>{item.para2}</p>
//             <p>{item.para3}</p>
//             <p>{item.para4}</p>
//             <p>{item.para5}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default FooterList
import React from "react";

const FooterList = () => {
  const data = [
    {
      heading: "Useful Links",
      links: ["Home", "About us", "Services", "Terms of service", "Privacy policy"],
    },
    {
      heading: "Our Services",
      links: ["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"],
    },
    {
      heading: "Contact Us",
      links: [
        "F-10 Markaz, Islamabad, Pakistan",
        "Phone: 051 5589 5548",
        "Email: info@bytewiselearning.com",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((section, index) => (
        <div key={index}>
          <h2 className="text-lg font-semibold mb-2 md:text-xl md:font-semibold">{section.heading}</h2>
          <ul className="text-white text-sm space-y-2">
            {section.links.map((link, i) => (
              <li key={i} className="hover:text-[#078791]  transition cursor-pointer md:text-md">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterList;
