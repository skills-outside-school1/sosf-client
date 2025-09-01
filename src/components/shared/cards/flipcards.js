import React, { useState, useEffect } from "react";
import CardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faEye,
  faSignLanguage,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "../headings/Case";
import Aos from "aos";
import "aos/dist/aos.css";

const FlipCard = ({ frontTitle, heading, description, backContent }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedFrontToBack={2}
      flipSpeedBackToFront={2}
      flipOnHover={true}
      wrapperStyle={{ border: "1px solid #ccc" }}
      frontStyle={{ backgroundColor: "#3498db" }}
      backStyle={{ backgroundColor: "#e74c3c" }}
      perspective={2000}
      clickAction="click"
      className="w-[300px] h-[260px] md:w-full"
      data-aos="flip-right"
      data-aos-delay="50"
      data-aos-easing="ease-in cubic"
      data-aos-anchor-placement="top-bottom"
    >
      <div
        onClick={handleCardFlip}
        className="front-card bg-white  justify-center items-center flex flex-col cursor-pointer rounded-md  shadow-lg w-[320px] h-[300px] md:h-[350px]  md:w-[350px] lg:w-[390px]"
      >
        <div className="front-content-container flex flex-col gap-3 justify-center items-center p-1  ">
          {/* another icon and another heading goes here  */}
          <FontAwesomeIcon
            icon={frontTitle}
            className="text-blue text-3xl font-bold"
          />
          <Heading className="text-black font-bold text-2xl   md:text-4xl text-opacity-76  shadow-inherit">
            {heading}
          </Heading>
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-black text-xl transition-all ease-in-out duration-1000 animate-bounce font-bold"
          />
        </div>
      </div>

      <div
        onClick={handleCardFlip}
        className="back-card justify-center bg-blue   items-center flex flex-col cursor-pointer rounded-md  shadow-lg w-[320px] h-[300px]  md:h-[350px]  md:w-[350px]  lg:w-[390px]"
      >
        <h2 className="font-passion text-white shadow-current font-semibold text-base text-center md:text-xl">
          {description}
        </h2>
        <p className="text-white shadow-current text-center font-serif text-sm md:text-2xl  w-[90%]">
          {backContent}
        </p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-red text-xl transition-all ease-in-out duration-1000 animate-bounce font-bold relative top-5"
        />
      </div>
    </CardFlip>
  );
};

export default FlipCard;
