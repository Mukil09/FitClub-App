import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "../../Style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header flex items-center justify-between">
      <img src={Logo} alt="logo" className="w-[10rem] h-[3rem]" />
      {menuOpen === false && mobile === true ? (
        <div
          className="bg-appColor p-[0.5rem] rounded-[5px]"
          onClick={() => setMenuOpen(true)}
        >
          <img src={Bars} alt="bar" className="w-[1.5rem] h-[1.5rem]" />
        </div>
      ) : (
        <ul className="menu list-none flex flex-col md:flex-row bg-appColor md:bg-inherit p-8 md:p-0 gap-8 text-white items-center md:relative right-8 md:right-auto top-8 md:top-auto fixed z-[99]">
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-orange"
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-orange"
          >
            <a href="#program">Programs</a>
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-orange"
          >
            <a href="#reasons">Why us</a>
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-orange"
          >
            <a href="#plan">Plans</a>
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-orange"
          >
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
