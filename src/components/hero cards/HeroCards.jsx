import React from 'react'
import { TfiBlackboard } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaVectorSquare } from "react-icons/fa6";

const HeroCards = () => {
    const data =  [
        {
            icons:<TfiBlackboard />,
            para:"Online ClassRoom",
        },
        {
            icons:<IoDiamondOutline />            ,
            para:"Important Resources",
        },
        {
            icons:<CiLocationOn />            ,
            para:"Location",
        },
        {
            icons:<FaVectorSquare />            ,
            para:"Primary Products",
        },
    ]
  return (
    <div>HeroCards</div>
  )
}

export default HeroCards