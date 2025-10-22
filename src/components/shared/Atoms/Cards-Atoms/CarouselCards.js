import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import PropTypes from "prop-types";
import { P } from "../Typography/typography";

const CarouselCards = ({
  cards,
  className,
  prevButtonClass,
  nextButtonClass,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the three visible cards based on the current index
  const visibleCards = [
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
    cards[(currentIndex + 2) % cards.length],
  ];

  return (
    <div
      className={`relative flex-col  flex w-full   md:flex md:w-full justify-center items-center  ${className}`}
    >
      <div className="buttons-container  invisible  md:visible  ml-auto  mr-3 gap-x-4 flex flex-row  mb-5">
        <button onClick={handlePrevClick} className={`   ${prevButtonClass}`}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-white font-bold text-lg bg-[#B7C8F4]  rounded-none  md:rounded-sm   p-3"
          />
        </button>

        <button onClick={handleNextClick} className={`  g ${nextButtonClass}`}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-white font-bold text-lg bg-[#B7C8F4]  rounded-none  md:rounded-sm   p-3"
          />
        </button>
      </div>

      {/* arrow for desktop  */}
      <div className="flex gap-[2rem] md:gap-2   mb-6 lg:lex md:grid md:grid-cols-3 justify-center items-center transition-opacity duration-500  md:ml-auto ">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={` group  relative transition-opacity duration-500 w-[330px]  md:w-[270px] lg:w-[294px] h-[440px]   shadow-2xl rounded-sm    flex flex-col justify-start items-start gap-y-5  x overflow-hidden ${
              index === 0
                ? "bg-[#B7C8F4] "
                : index === 1
                ? "bg-[#B7C8F4]"
                : index === 2
                ? "bg-[#6A80B8]"
                : ""
            } `}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${card.avatar})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="px-2 h-full  flex flex-col gap-y-5  justify-center items-start align-baseline ">
              <Link href={card.route}>
                <h3 className=" font-mont text-white font-bold  text-base  lg:text-lg  hover-line ">
                  {card.title}
                </h3>
              </Link>
              <Link href={card.route}>
                <P className="   mt-1  text-white  md:text-base hover:underline transition-transform duration-700 ease-in-out ">
                  {card.description}
                </P>
              </Link>
            </div>
            <Link
              href={card.route}
              className="hover-line font-mont text-white  font-semibold  lg:text-sm r mt-auto mb-8 px-2"
            >
              Visit Page
            </Link>

            <div
              className="absolute top-0 left-0 transition-opacity duration-500 w-[330px]  md:w-[270px] lg:w-[294px] h-[440px]   bg-secondary_blue opacity-0
            group-hover:opacity-100
                flex flex-col justify-center items-start gap-y-5 "
            >
              <div className="px-2 h-full  flex flex-col gap-y-5   justify-center items-start align-middle ">
                <Link href={card.route} className="mt-auto">
                  <P className="   mt-auto  text-gray-800  md:text-base hover:underline transition-transform duration-700 ease-in-out ">
                    {card.description}
                  </P>
                </Link>

                <Link
                  href={card.route}
                  className="hover-line font-mont text-gray-800  font-semibold  lg:text-sm r mt-auto mb-8 px-2"
                >
                  Visit Page
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons-container  md:invisible  mr-auto ml-8  mt-4        gap-x-4     md:ml-auto md:mr-[9.7rem]    flex flex-row  md:gap-x-8">
        <button onClick={handlePrevClick} className={`   ${prevButtonClass}`}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-white font-bold text-xl bg-[#B7C8F4]  rounded-none  md:rounded-sm   p-2  md:p-4"
          />
        </button>

        <button onClick={handleNextClick} className={`  g ${nextButtonClass}`}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-white font-bold text-xl bg-[#B7C8F4]  rounded-none  md:rounded-sm   p-2  md:p-4"
          />
        </button>
      </div>

      <div className="absolute bottom-0 flex  justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 border-2 rounded-full relative top-9 ${
              index === currentIndex ? "bg-secondary_blue" : "bg-transparent"
            } transition-colors duration-500`}
          ></div>
        ))}
      </div>
    </div>
  );
};

CarouselCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  prevButtonClass: PropTypes.string,
  nextButtonClass: PropTypes.string,
};

export default CarouselCards;
