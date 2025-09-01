import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { P } from "../Typography/typography";

// Reusable GetInvolvedCards Component
const GetInvolvedCards = ({
  items = [], // Expect an array of cards

  cardHeight = "652.32px", // Default card height, can be changed via props
  // cardWidth = "326px", // Default card width, can be changed via props
  transitionDuration = 700, // Control transition timing
}) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-cubic",
      mirror: true,
      anchorPlacement: "top-center",
      throttleDelay: 300,
      throttle: true,
      once: true,
    });
  }, []);

  const [activeCard, setActiveCard] = useState(null); // Track the active card

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle the card
  };

  return (
    <div
      data-aos="fade-in"
      data-aos-once="true"
      className="flex flex-col  px-2  lg:flex-row  md:flex-row md:col-span-2  lg:px-0   justify-between   md:px-[3.5rem]  lg:ml-auto"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative transition-all duration-500 ease-in-out md:hover:shadow-2xl  hover:bg-opacity-20  ${
            activeCard === index ? "flex-[2]" : "flex-[1]"
          }`} // Adjust flex to give more space to active card
          style={{
            flexBasis: activeCard === index ? "400px" : "200px", // Expand active card
          }}
        >
          {/* Original Card */}
          <Transition
            show={activeCard !== index}
            enter={`transition-opacity duration-${transitionDuration} eae-in-out`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave={`transition-opacity duration-${transitionDuration} ease-in-out `}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <button
              onClick={() => handleCardClick(index)}
              className={`w-full  h-[180px] object-contain  md:h-[${cardHeight}] flex flex-col gap-y-4 justify-start items-start p-4 transition duration-300`}
              style={{
                backgroundColor: item.color,
              }}
            >
              <p className="text-[#000000] font-semibold text-xl   md:text-2xl  lg:text-4xl ">
                +
              </p>
              {/* <h3 className="text-base md:text-base font-bold lg:text-base font-mont  text-[#000000]">
                {item.title}
              </h3> */}
              <p className="text-[#000000]  font-mont font-semibold text-lg md:text-xl lg:text-2xl">
                {item.description}
              </p>
            </button>
          </Transition>

          {/* Inner Card Content */}
          <Transition
            show={activeCard === index}
            enter={`transition-transform duration-${transitionDuration} ease-in-out`}
            enterFrom="transform scale-105 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave={`transition-transform duration-${transitionDuration} ease-in-out`}
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-105 opacity-0"
          >
            <div
              className="absolute inset-0 top-0 left-0 right-0 z-10 w-full h-[full] flex flex-col justify-center items-center bg-cover mt-auto bg-center text-white transition-all transform ease-in-out duration-1000"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            >
              <div className="bg-[#000000] bg-opacity-65 p-4 w-full h-[652.32px] justify-center items-start mt-auto flex flex-col gap-y-4 px-[2rem]">
                <button
                  className="flex mb-auto ml-auto text-white font-bold text-xl"
                  onClick={() => setActiveCard(null)}
                >
                  X
                </button>
                <section className="w-full h-[fixed] mt-auto flex flex-col gap-y-4">
                  <h5 className="text-base md:text-base lg:text-xl text-white font-bold font-mont">
                    {item.title2}
                  </h5>
                  <P
                    className={`text-white text-sm  md:text-sm lg:text-sm xl:text-sm font-normal `}
                  >
                    {item.content}
                  </P>
                  <Link
                    href={item.link}
                    className="text-white font-normal font-inter text-base gap-x-4 flex"
                  >
                    {item.route_name || "Learn More"}&rarr;
                  </Link>
                </section>
              </div>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};

export default GetInvolvedCards;
