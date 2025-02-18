import React from 'react'

const FooterList = () => {
    const data =[
        {
          heading:"Useful Links",
          para1:"Home",
          para2:"About us",
          para3:"Services",
          para4:"Terms of service",
          para5:"Privacy policy"
        },
        {
          heading:"Our Services",
          para1:"Web Design",
          para2:"Web Development",
          para3:"Product Management",
          para4:"Marketing",
          para5:"Graphic Design"
        },
        {
          heading:"Contact Us",
          para1:"F-10 Markaz",
          para2:"Islamabad",
          para3:"Pakistan",
          para4:"Phone: 051 5589 5548",
          para5:"Email: info@bytewiselearning.com"
        },
    ]
  return (
    <div>
      {data.map((item)=>(
        <div className="">
            <h2>{item.heading}</h2>
            <p>{item.para1}</p>
            <p>{item.para2}</p>
            <p>{item.para3}</p>
            <p>{item.para4}</p>
            <p>{item.para5}</p>
        </div>
      ))}
    </div>
  )
}

export default FooterList