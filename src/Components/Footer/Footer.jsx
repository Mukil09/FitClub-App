import React from "react";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import "../../Style.css";

function Footer() {
  return (
    <div className="footer-container relative">
      <hr className="border-[1px] border-lightgray" />
      <div className="footer px-8 py-4 flex flex-col gap-16 items-center h-[10rem]">
        <div className="social-links flex gap-16">
          <img src={Github} alt="Logos" />
          <img src={Instagram} alt="Logos" />
          <img src={LinkedIn} alt="Logos" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="Logos" className="w-[10rem]" />
        </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
}

export default Footer;
