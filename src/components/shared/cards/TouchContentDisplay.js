import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";
import AccordionComponent from "@/components/shared/accordions/Accordion1";

export default function TabbedContentDisplay({
  items = [],
  sectionTitle = "Section",
  sectionDescription,
  imageStyle = { filter: "grayscale(100%)" },
  accentColor = "#6A80B8",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col gap-y-8">
      {/* Optional Section Header */}
      {sectionDescription && (
        <section className="w-full px-2  lg:px-[6rem] flex flex-col gap-y-6 ">
          <H3
            className={`text-gray-800 font-mont text-2xl lg:text-3xl font-bold`}
          >
            {sectionTitle}
          </H3>
          <P className="mt-4">{sectionDescription}</P>
        </section>
      )}

      <div className="switch-container sm:hidden flex flex-row justify-start items-start pb-5 w-full md:ml-[6rem]">
        {/* Titles */}
        <section className="flex flex-col justify-start items-start">
          <div className="bg-[#dee8f0d1] w-[270px] max-h-[500px] min-h-[500px] overflow-y-auto flex flex-col gap-y-8 p-4">
            {items.map((value, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-2 cursor-pointer font-black transition-transform hover:-translate-y-3 duration-700 ease-in-out w-full  h-full lg:text-sm ${
                  activeIndex === index
                    ? `text-[${accentColor}] font-mont`
                    : "border-b-2 border-b-stone-200 text-gray-500 hover:text-gray-800 font-mont"
                } relative overflow-hidden`}
              >
                {value.title}
                {activeIndex === index && (
                  <div
                    className="absolute bottom-0 left-0 h-[2px]"
                    style={{
                      backgroundColor: accentColor,
                      width: "80%",
                      transition: "all 0.7s ease-in-out",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Text Content */}
        <div className="bg-secondary_blue w-full min-h-[500px] max-h-[500px] overflow-y-auto p-6 flex items-start justify-start text-[#000000] font-normal md:leading-[35px] font-inter text-base md:text-[18.56px] text-left md:tracking-wide">
          <motion.section
            key={activeIndex}
            initial={{ translate: 0.9, opacity: 0 }}
            animate={{ translate: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[90%] mt-6"
          >
            <P className={` `}>
              {items[activeIndex]?.content || "No article available"}
            </P>
          </motion.section>
        </div>

        {/* Image Content */}
        <motion.div className="relative right-[2rem] w-[500px] h-[400px] overflow-hidden">
          <motion.section
            key={`image-${activeIndex}`}
            initial={{ translate: 0.9, opacity: 0 }}
            animate={{ translate: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {items[activeIndex]?.image && (
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title || "Item Image"}
                width={500}
                height={400}
                className="w-[500px] h-[400px] object-contain"
                style={imageStyle}
              />
            )}
          </motion.section>
        </motion.div>
      </div>

      {/* Accordion Version for Mobile */}
      <AccordionComponent
        accordions={items}
        className="my-4 h-[500px] py-5 overflow-y-auto"
        imageStyle={imageStyle}
      />
    </div>
  );
}
