import React from "react";
import HeroPara from "./HeroPara";
import HeroImage from "./HeroImage";
import { TfiBlackboard } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaVectorSquare } from "react-icons/fa6";
const Hero = () => {
  const data = [
    {
      icons: <TfiBlackboard />,
      para: "Online ClassRoom",
    },
    {
      icons: <IoDiamondOutline />,
      para: "Important Resources",
    },
    {
      icons: <CiLocationOn />,
      para: "Location",
    },
    {
      icons: <FaVectorSquare />,
      para: "Primary Products",
    },
  ];
  return (
    <>
      <div className=" bg-[#078791] text-white pt-4 flex flex-col gap-6 items-center md:flex-row md:justify-around md:pb-48 ">
        <HeroPara />
        <HeroImage />
      </div>
      <div className="flex flex-col flex-wrap gap-8 pt-10 bg-[#045f66] md:bg-white md:flex-row md:gap-2 md:pt-0 md:justify-around ">
        {data.map((item,index) => (
          <div key={index} className="bg-[#078791] p-10 md:py-20 w-[300px] ml-12 md:ml-0 rounded-2xl flex flex-col items-center text-slate-300 font-semibold md:relative md:bottom-[120px] shadow-2xl">
            <span className="text-2xl">{item.icons}</span>
            <p className="text-2xl mt-2 text-center">{item.para}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
