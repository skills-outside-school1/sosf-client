import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FlexTabs({
  data,
  titleBoxStyle,
  contentBoxStyle,
  imageBoxStyle,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="switch-container hidden    md:flex  md:flex-row justify-start items-start pb-5 w-full px-2 lg:pl-[4rem]  ml-auto ">
      {/* Title list */}
      <section className="flex flex-col justify-start items-start">
        <div
          className={`bg-transparent  w-[270px] h-[fixed]  pb-3  flex flex-col gap-y-1  ${titleBoxStyle}`}
        >
          {data.map((value, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-2 cursor-pointer font-black transition-transform hover:translate-x-3 duration-700 ease-in-out w-full h-[fixed] lg:text-sm ${
                activeIndex === index
                  ? "text-secondary_blue font-mont font-bold translate-x-3 border-l-4 border-l-secondary_blue"
                  : " text-gray-500 transition-transform duration-1000 ease-in-out hover:text-gray-800 font-mont"
              } relative overflow-hidden`}
            >
              {value.title || ">"}
              {activeIndex === index && (
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-transparent  w-[80%] transition-transform duration-700 ease-in-out ${
                    activeIndex === index ? "" : ""
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Content box */}
      <div
        className={`bg-[#dee8f0d1] w-full  md:h-[fixed]  lg:h-[fixed] pb-[7rem] p-6 flex flex-col  md:flex-row gap-y-5  gap-x-8  items-start justify-start text-gray-800 text-sm font-inter font-medium  ${contentBoxStyle}`}
      >
        <motion.section
          key={activeIndex}
          initial={{ translate: 0.9, opacity: 0 }}
          animate={{ translate: 1, opacity: 1 }}
          exit={{ translate: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full                lg:w-[50%] mt-6   "
        >
          <h3 className="text-gray-800 font-bold  lg:text-2xl mb-5">
            {data[activeIndex].title}
          </h3>
          <p
            className={`text-[#000000] font-normal md:leading-[35px]   font-inter text-base md:text-base text-left md:tracking-wide `}
          >
            {data[activeIndex].content}
          </p>
        </motion.section>

        <section className="w-full            lg:w-[50%] flex justify-start items-start ">
          <Image
            src={data[activeIndex].image}
            alt={data[activeIndex].title}
            width={500}
            height={500}
            className="h-[400px] w-[500px] object-cover rounded-md shadow-xl"
          />
        </section>
      </div>

      {/* Image box */}
    </div>
  );
}
