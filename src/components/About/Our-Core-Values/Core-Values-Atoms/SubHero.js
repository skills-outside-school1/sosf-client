import React from "react";

export default function SubHero({ text }) {
  return (
    <div className="w-full     flex flex-col justify-start items-start         mb-auto   pb-8      lg:w-[90%]      md:px-[4rem]  lg:px-[6rem] ">
      <section className="contents-container flex flex-col gap-y-5 justify-start items-start pb-5 ">
        <p
          className={`text-gray-800 font-medium font-inter    lg:text-lg text-justify  `}
        >
          {text}
        </p>
      </section>
    </div>
  );
}
