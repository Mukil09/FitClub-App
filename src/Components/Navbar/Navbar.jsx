import React from "react";
import Logo from "../../assets/logo.png";
import "../../Style.css";

function Navbar() {
  return (
    <div className="header flex items-center justify-between">
      <img src={Logo} alt="logo" className="w-[10rem] h-[3rem]" />
      <ul className="menu list-none flex gap-8 text-white items-center">
        <li className="cursor-pointer hover:text-orange">Home</li>
        <li className="cursor-pointer hover:text-orange">Programs</li>
        <li className="cursor-pointer hover:text-orange">Why us</li>
        <li className="cursor-pointer hover:text-orange">Plans</li>
        <li className="cursor-pointer hover:text-orange">Testimonials</li>
      </ul>
    </div>
  );
}

export default Navbar;
