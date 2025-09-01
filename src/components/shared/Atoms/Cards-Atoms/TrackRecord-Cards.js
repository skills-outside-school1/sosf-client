import React from "react";
import CountUp from "react-countup";

export default function TrackRecordCards({ cards = [], className }) {
  return (
    <div className="grid grid-cols-3 justify-start items-tart  px-2  gap-x-8 gap-y-8   md:px-[8rem] ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[280px] h-[180px] flex flex-col justify-center items-center gap-y-3  p-2 rounded-xl shadow-2xl  bg-white
          transform duration-700 ease-in-out hover:scale-105 "
        >
          <div className="font-medium font-inter  text-gray-800 text-6xl flex flex-row gap-x-2 justify-center items-center">
            <CountUp
              start={0}
              end={card.value}
              duration={``}
              useEasing={true}
              easingFn={(t, b, c, d) => (c * t) / d + b}
              redraw
              delay={2}
              className="f "
            />
            <span className="text-gray-800 ">
              {card.alpha} <span className="text-4xl"> {card.char}</span>
            </span>
          </div>
          <p className="text-gray-800 text-lg font-inter  font-normal  ">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
