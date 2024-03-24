import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "../../Style.css";
import { stats } from "../../data/Stats";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

function Hero() {
  const [animationStyle, setAnimationStyle] = useState({
    animation: "slideAnimation 5s infinite",
  });

  const transition = { type: "spring", duration: 3 };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStyle({ animation: "slideAnimation 5s infinite" });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero flex justify-between flex-col md:flex-row" id="home">
      <div className="blur md:w-[22rem] h-[30rem] left-0 w-[14rem]"></div>
      <div className="left-h p-[2rem] pt-6 flex gap-8 flex-col flex-[3]">
        <Navbar />

        <div className="the-best-ad relative flex items-center justify-start md:mt-10 mt-0  bg-[#363d42] rounded-[4rem] w-fit py-5 px-3 text-white text-sm md:text-base self-center md:self-auto scale-[0.8] md:scale-[1]">
          <div
            id="slidingDiv"
            style={animationStyle}
            className="absolute z-[1] bg-[orange] w-[5.4rem] h-[80%] left-2 rounded-[3rem] transition-transform duration-500"
          ></div>
          <span className="z-[2]">THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="hero-text flex flex-col gap-2 uppercase md:text-[4.5rem] text-[2.25rem] font-bold text-white items-center md:items-start justify-center md:justify-start">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <h3>Ideal body</h3>
          </div>

          <div className="md:text-[1rem] text-sm md:text-left text-center font-extralight normal-case tracking-[1px] w-[80%]">
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
                <span className="text-white md:text-[2rem] text-lg flex flex-row">
                  +{stat.num}
                </span>
                <span className="text-gray md:text-base  text-sm uppercase">
                  {stat.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="hero-btn flex justify-center md:justify-normal gap-4 font-normal">
          <button className="btn bg-orange w-[8rem]">Get Started</button>
          <button className="btn bg-transparent">Learn More</button>
        </div>
      </div>

      <div className="right-h flex-1 relative bg-none md:bg-orange">
        <button className="btn absolute text-black right-12 top-8 ">
          Join now
        </button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate flex flex-col gap-4 bg-darkGray w-fit p-4 items-start rounded-[5px] absolute left-4 md:left-auto right-16 md:top-28 top-20"
        >
          <img src={Heart} alt="heart" className="w-8 animate-heart" />
          <span className="text-gray">Heart Rate </span>
          <span className="text-white text-[1.5rem]">116 bpm</span>
        </motion.div>

        <img
          src={hero_image}
          alt="hero"
          className="md:absolute relative right-auto md:right-[8rem] left-[9rem] md:left-auto md:self-auto self-center top-16 md:top-[10rem] w-[15rem] md:w-[23rem]"
        />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero"
          className="absolute right-auto md:right-[20rem] left-8 md:left-auto top-0 md:top-[4rem] z-[-1] w-[15rem] md:w-[15rem]"
        />

        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories gap-8 rounded-md flex bg-caloryCard p-4 w-[15rem] md:w-fit md:absolute relative top-20 md:top-[34rem] md:right-[26rem] right-auto left-4 md:left-auto z-[1]"
        >
          <img
            src={Calories}
            alt="calories"
            className="md:w-[3rem] w-8 animate-bars"
          />
          <div className="w-[15rem] flex flex-col justify-between">
            <span className="text-gray">Calories Burned </span>
            <span className="text-white text-[1rem] md:text-[1.5rem]">
              220 kcal
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
