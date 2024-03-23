import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import "../../Style.css";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="img" />
        <img src={image2} alt="img" />
        <img src={image3} alt="img" />
        <img src={image4} alt="img" />
      </div>
      <div className="right-r gap-4 flex flex-col uppercase font-bold">
        <span className="text-orange">Some reasons</span>
        <div className="text-white text-[3rem]">
          <span className="stroke-text">WHY </span>
          <span>Choose us?</span>
        </div>

        <div className="details-r flex flex-col gap-4 text-white">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 140+ EXPERT TRAINERS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="text-gray font-normal">OUR PARTNERS</span>

        <div className="partners flex gap-4">
          <img src={nb} alt="brand" />
          <img src={adidas} alt="brand" />
          <img src={nike} alt="brand" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
