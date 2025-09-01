import React from "react";
import { P } from "../Typography/typography";
import Link from "next/link";


export default function InterConnectCards({
  items = [],
  colors = [],
  textColor = [],
}) {
  return (
    <div className="w-full h-auto flex flex-row    md:space-x-[4rem] gap-y-5 justify-start items-start relative">
      {items.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-start   md:items-center "
        >
          <Link href={card.url || "#"}>
            <div
              className={`  w-[120px] h-[50px]    p-2      md:min-w-[180px] md:h-[50px] rounded-s-md rounded-e-md hover:scale-105 transform duration-1000 ease-in-out text-white font-bold font-mont  text-base   md:text-xl flex    justify-center items-center  md:p-8 ${
                index === 0
                  ? "relative bottom-[5rem]  left-[54.9%]  md:bottom-[10rem] md:left-[120%]     lg:bottom-[7rem] lg:left-[23.9rem]"
                  : index === 1
                  ? " relative  right-[120%]       md:right-[90%]     lg:right-0"
                  : index === 2
                  ? "relative     right-[80%]                  md:right-[90%]     lg:right-0"
                  : ""
              }`}
              style={{ backgroundColor: colors[index] || "#B7C8F4" }} // Default to light blue if no color is provided
            >
              <p
                style={{
                  color: textColor[index] || "black",
                }}
              >
                {card.title}
              </p>
            </div>
          </Link>

          {/* SVG arrow icon for connectivity */}

        </div>
      ))}
    </div>
  );
}
