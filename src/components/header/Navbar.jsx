import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ul className="text-white flex flex-col md:flex-row md:pr-10 md:gap-6 md:items-center font-semibold">
      <Link >Home</Link>
      <Link onClick={()=>scrollToSection("portfolio")}>Portfolio</Link>
      <select id="menuDropdown" name="menuOptions" className="text-white max-w-[150px]  bg-[#045f66]">
        <option value="option1">Drop Down</option>
        <option value="option2">Drop Down 1</option>
        <option value="option3">Drop Down 2</option>
        <option value="option3">Drop Down 3</option>
      </select>
      <Link onClick={()=>scrollToSection("contact")}>Contact</Link>
    </ul>
  );
};

export default Navbar;
