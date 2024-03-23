import React from "react";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import "../../Style.css";

function Program() {
  return (
    <div className="programs flex flex-col gap-8 p-1" id="program">
      <div className="programs-header flex gap-16 font-bold text-[3rem] justify-center text-white uppercase italic">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-categories flex gap-4 m-8">
        {programsData.map((program, index) => {
          return (
            <div className="category flex flex-col bg-gray p-8 gap-4 text-white justify-between cursor-pointer">
              {program.image}
              <span className="text-[1rem] font-bold">{program.heading}</span>
              <span className="text-[0.9rem] leading-6">{program.details}</span>
              <div className="join-now flex items-center gap-8">
                <span>Join now</span>
                <img src={RightArrow} alt="arrow" className="w-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Program;
