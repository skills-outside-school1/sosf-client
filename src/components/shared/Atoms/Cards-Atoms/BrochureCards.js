import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BrochureCards({ cards = [], className }) {
  return (
    <div className="w-full  justify-start items-start  grid grid-cols-1    md:grid-cols-4  gap-y-8  gap-x-[5rem]  pb-4    md:px-[4rem]    lg:px-[8rem]  ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[250px] h-[400px] flex flex-col justify-start items-start gap-y-5 shadow-xl rounded-md   overflow-hidden "
        >
          <Image
            src={card.avatar}
            alt={card.title}
            height={500}
            width={500}
            className="w-[250px] h-[200px] object-fill hover:scale-110 transition-transform ease-in-out duration-700 "
          />

          <h3 className="text-gray-800 font-bold font-mont  ">{card.title}</h3>

          <p className="text-gray-700 font-normal font-inter  underline transition-transform ease-in-out duration-700 ">
            {card.description}
          </p>

          <Link href={card.route} className="font-mont text-gray-800 hover-line font-semibold  mt-auto  mb-4  ">Visit Page</Link>
        </div>
      ))}
    </div>
  );
}
