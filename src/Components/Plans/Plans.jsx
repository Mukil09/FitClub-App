import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "../../Style.css";

function Plans() {
  return (
    <div
      className="plans-container mt-[-4rem] px-8 flex flex-col gap-16 relative"
      id="plan"
    >
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="flex flex-col md:flex-row gap-4 text-center md:text-start md:gap-8 font-bold text-[3rem] justify-evenly text-white uppercase italic">
        <span className="stroke-text">READY TO START </span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US</span>
      </div>

      <div className="plans flex-col md:flex-row">
        {plansData.map((plan, index) => {
          return (
            <div className="plan" key={index}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature, index) => (
                  <div className="feature">
                    <img src={whiteTick} alt="tick" />
                    <span key={index}>{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <span>See more benefits</span>
              </div>

              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
