import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ContentfulTabs({ tabs, works, className, className3 }) {
  const [activeTab, setActiveTab] = useState(0);

  const getWorksForTab = (tabIndex) => {
    const tabKeys = Object.keys(works);
    return works[tabKeys[tabIndex]];
  };

  const WorksForActiveTab = getWorksForTab(activeTab);

  return (
    <div className="tabs-component  w-full flex flex-col gap-y-[30px]   pb-[15%]  lg:w-[1150px] ">
      {/* Tab Navigation */}
      <div className="tabs grid grid-cols-2   md:flex  justify-start items-start gap-y-3  gap-x-3  md:gap-x-8 mb-4 w-full ">
        {tabs.map((tab, index) => (
          <p
            key={index}
            className={`tab-button py-2 cursor-pointer font-medium font-inter text-base justify-center items-start lg:text-lg flex flex-col gap-y-2 
            bg-[#edf1f8] h-[140px]  transform duration-700 ease-in-out p-2 rounded-md  w-[160px]  md:w-[300px] hover:ring-1 hover:ring-secondary_blue
             text-gray-800 ${className3} ${
              activeTab === index
                ? "bg-secondary_blue  hover:ring-0 h-[140px] flex flex-col gap-y-2 justify-center items-start transform duration-700 ease-in-out p-2 rounded-md"
                : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {/* Display the corresponding number for the tab */}
            <span
              className={`text-base font-bold font-inter rounded-md w-10 h-10 ${
                activeTab === index ? "bg-white" : "bg-[#edf1f8]"
              } flex items-center justify-center`}
            >
              {works[Object.keys(works)[index]][0]?.number || "N/A"}
            </span>
            {tab}
          </p>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full flex justify-start items-start  "
        >
          {WorksForActiveTab.map((work, index) => (
            <div
              key={index}
              className={`w-full flex flex-col-reverse  lg:grid  lg:grid-cols-2  ${className}`}
            >
              {/* Display content or additional data here */}
              <p
                className={`text-[#000000] font-normal md:leading-[35px] px-4  font-inter text-base md:text-[18.56px]  text-left md:tracking-wide `}
              >
                {work.content}
              </p>
              <div className="w-full h-auto flex justify-start items-start lg:ml-auto  mb-4  pb-5 ">
                <Image
                  src={work.image}
                  alt={`image`}
                  width={500}
                  height={500}
                  className="object-contain rounded-xl w-full h-auto  lg:shadow-xl lg:w-[500px] lg:h-auto px-2   lg:ml-auto "
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
