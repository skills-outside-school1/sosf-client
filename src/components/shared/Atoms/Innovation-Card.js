import React from "react";
import Image from "next/image";
import Link from "next/link";
import { P } from "./Typography/typography";

const InnovationCard = ({
  cardItems,
  backgroundColor,
  imageHeight,
  imageWidth,
}) => {
  return (
    <div
      className=" group  relative  lg:left-[8rem] overflow-hidden   w-full h-[fixed] pb-4 flex flex-col justify-start items-start gap-y-4 lg:w-[938px] md:h-[840px]  "
       style={{
         backgroundColor: backgroundColor || "#B7C8F4",//  Default color if not provided
       }}
    >
      {cardItems.map((card, index) => (
        <div
          key={index}
          className="  w-full   lg:w-[1060px] flex flex-col justify-start items-start"
        >
          <Image
            src={card.image}
            alt={card.title}
            height={imageHeight || 500} // Fallback to default height
            width={imageWidth || 500} // Fallback to default width
            className="       w-full h-auto  object-fill    group-hover:scale-105 transform duration-700 ease-in-out          lg:h-[597.33px] lg:w-[1060px]"
            style={{
              filter: "grayscale(100)",
            }}/>
          <section className=" group-hover:translate-y-2 duration-700 ease-in-out transform flex flex-col gap-y-4 justify-start items-start px-2  md:px-[3rem] mt-8">
          <h2 className="text-gray-800 font-bold font-montserrat text-xl md:text-4xl">
              {card.heading}
            </h2>
            <P className=" lg:w-[89%] " >
              {card.title}
            </P>
         
            <Link
              href={card.link}
              className="text-gray-800 text-base font-bold flex flex-row gap-x-4 justify-start items-start hover-line"
            >
              Explore  &rarr;
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
};

export default InnovationCard;
