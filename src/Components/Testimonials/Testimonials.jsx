import React, { useState } from "react";
import "../../Style.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <div
      className="Testimonials flex flex-col md:flex-row gap-4 px-8"
      id="testimonials"
    >
      <div className="left-t flex flex-1 gap-8 flex-col uppercase text-white">
        <span className="text-orange font-bold">Testimonials</span>
        <span className="stroke-text font-bold text-[32px] md:text-[3rem]">
          What they
        </span>
        <span className="font-bold text-[32px] md:text-[3rem]">
          Say about us
        </span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="normal-case text-justify tracking-[2px] leading-10"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-orange ">
            {testimonialsData[selected].name}
          </span>
          {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t gap-8 md:gap-0 flex-1 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative hidden md:block  md:absolute w-[17rem] h-[20rem] border-[2px] border-orange bg-transparent right-[9rem] top-[0.9rem]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative hidden md:block md:absolute w-[17rem] h-[20rem] border-[2px] bg-orange border-none right-[7rem] top-[4rem]"
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="test"
          className=" relative md:absolute w-[17rem] h-[20rem] object-cover top-0 right-0 md:right-32 md:top-8 self-auto md:self-center"
        />

        <div className="arrows flex gap-4 relative md:absolute md:bottom-4 md:left-12 left-0 bottom-0">
          <img
            src={leftArrow}
            className="w-[1.5rem] cursor-pointer"
            onClick={() =>
              selected === 0
                ? setSelected(tLenght - 1)
                : setSelected((prev) => prev - 1)
            }
            alt="left"
          />
          <img
            src={rightArrow}
            className="w-[1.5rem] cursor-pointer"
            onClick={() =>
              selected === tLenght - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            alt="right"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
