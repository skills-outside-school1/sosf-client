import React from "react";
import Image from "next/image";

export default function ValueCards({ cards = [], className }) {
  return (
    <div className={`w-full h-auto grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3  justify-center items-start  ${className}`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-full  overflow-hidden    h-[329px]  group  lg:w-[320px] lg:h-[320px] p-2 flex flex-col justify-center  items-center  md:items-center gap-y-8 shadow-md rounded-md bg-[#F3F5FA]`}
        >
          <Image
            src={card.avatar}
            alt={card?.title }
            width={200}
            height={200}
            className={`h-[200px] w-full  rounded-md   lg:w-[280px] lg:h-[200px]    mb-auto mt-3 lg:group-hover:scale-105 ease-in-out duration-1000 transform`}
          />
          <h3 className="text-gray-800 font-mont font-semibold  text-center lg:text-base ">
            {card.title}
          </h3>
          <p className="text-gray-800 font-normal font-inter text-xl ">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
