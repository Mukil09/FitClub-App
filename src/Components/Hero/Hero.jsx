import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "../../Style.css";
import { stats } from "../../data/Stats";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

function Hero() {
  const [animationStyle, setAnimationStyle] = useState({
    animation: "slideAnimation 5s infinite",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStyle({ animation: "slideAnimation 5s infinite" });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero flex justify-between">
      <div className="left-h p-[2rem] pt-6 flex gap-8 flex-col flex-[3]">
        <Navbar />

        <div className="the-best-ad relative flex items-center justify-start mt-10 bg-[#363d42] rounded-[4rem] w-fit py-5 px-3 text-white">
          <div
            id="slidingDiv"
            style={animationStyle}
            className="absolute z-[1] bg-[orange] w-[5.4rem] h-[80%] left-2 rounded-[3rem] transition-transform duration-500"
          ></div>
          <span className="z-[2]">THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="hero-text flex flex-col gap-2 uppercase text-[4.5rem] font-bold text-white">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <h3>Ideal body</h3>
          </div>

          <div className="text-[1rem] font-extralight normal-case tracking-[1px] w-[80%]">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures flex gap-8">
          {stats.map((stat) => {
            return (
              <div className="flex flex-col" key={stat.title}>
                <span className="text-white text-[2rem]">+{stat.num} </span>
                <span className="text-gray uppercase">{stat.title}</span>
              </div>
            );
          })}
        </div>

        <div className="hero-btn flex gap-4 font-normal">
          <button className="btn bg-orange w-[8rem]">Get Started</button>
          <button className="btn bg-transparent">Learn More</button>
        </div>
      </div>

      <div className="right-h flex-1 relative bg-orange">
        <button className="btn absolute text-black right-12 top-8 ">
          Join now
        </button>

        <div className="heart-rate flex flex-col gap-4 bg-darkGray w-fit p-4 items-start rounded-[5px] absolute right-16 top-28">
          <img src={Heart} alt="heart" className="w-8 animate-heart" />
          <span className="text-gray">Heart Rate </span>
          <span className="text-white text-[1.5rem]">116 bpm</span>
        </div>

        <img
          src={hero_image}
          alt="hero"
          className="absolute right-[8rem] top-[10rem] w-[23rem]"
        />
        <img
          src={hero_image_back}
          alt="hero"
          className="absolute right-[20rem] top-[4rem] z-[-1] w-[15rem]"
        />

        <div className="calories gap-8 rounded-md flex bg-caloryCard p-4 w-fit absolute top-[34rem] right-[26rem] z-[1]">
          <img
            src={Calories}
            alt="calories"
            className="w-[3rem] animate-bars"
          />
          <div className="w-[15rem] flex flex-col justify-between">
            <span className="text-gray">Calories Burned </span>
            <span className="text-white text-[1.5rem]">220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
