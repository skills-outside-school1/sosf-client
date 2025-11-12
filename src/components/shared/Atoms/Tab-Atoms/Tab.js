import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeLoader } from "react-spinners";
import { P } from "../Typography/typography";

const Tabs = ({
  tabs,
  works,
  className,
  className3,
  className2,
  hoverClass,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const getWorksForTab = (tabIndex) => {
    const tabKeys = Object.keys(works);
    const tabWorks = works[tabKeys[tabIndex]];
    return showMore ? tabWorks : tabWorks.slice(0, 3);
  };

  const WorksForActiveTab = getWorksForTab(activeTab);
  const tabKeys = Object.keys(works);
  const totalWorksForActiveTab = works[tabKeys[activeTab]].length;

  useEffect(() => {
    // Simulate loading for 5 seconds
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clear timer on cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="tabs-component flex flex-col gap-y-[30px] lg:px-[1.9rem]  w-full">
      <div className="tabs grid grid-cols-2  md:flex gap-y-3  justify-center  items-center  mr-auto   gap-x-4 mb-4   ">
        {tabs.map((tab, index) => (
          <p
            key={index}
            className={`tab-button py-2  h-[140px]  w-[160px]  rounded-md  cursor-pointer font-normal font-mont  text-base   justify-center items-start  lg:text-lg  flex flex-col gap-y-2   text-gray-800 ${className3} ${
              activeTab === index
                ? "bg-[#edf1f8]  h-[140px]  w-[160px]    flex flex-col gap-y-2 justify-center items-start  transform duration-700 ease-in-out p-2 rounded-md "
                : " px-[0.8rem] translate-x-0  ring-2 ring-[#edf1f8] p-2 "
            }`}
            onClick={() => setActiveTab(index)}
          >
            <FontAwesomeIcon
              icon={faSquare}
              className={` text-4xl rounded-md  ${
                activeTab === index ? "text-white " : "text-[#edf1f8]"
              } `}
            />
            {tab}
          </p>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-[fixed]  grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 justify-center items-center lg:gap-x-[60px] md:gap-x-[20px] gap-y-[40px]  "
        >
          {WorksForActiveTab.map((work, index) => (
            <div
              key={index}
              className={`  relative overflow-hidden  group  bg-[#edf1f8]  bg-opacity-70  flex flex-col  gap-y-5 justify-start items-start m-auto   shadow-2xl  w-full   lg:w-[350px]  h-[400px]  pb-5  mb-auto mt-4   ${className}  ${
                index === 0
                  ? "bg-[#B7C8F4]"
                  : index === 1
                  ? "bg-[#A3B2D9]"
                  : index === 2
                  ? "bg-[#7B86A3]"
                  : index === 3
                  ? "bg-[#B7C8F4]"
                  : ""
              } `}
            >
              {" "}
              <Link href={work.route}>
                <section className="name-position-section flex flex-col max-h-[600px]   gap-y-[30px]  justify-start items-start">
                  {isLoading ? (
                    <FadeLoader
                      color="black"
                      className="justify-center items-center flex flex-col "
                    />
                  ) : (
                    <Image
                      src={work.image}
                      alt={work.name}
                      width={300}
                      height={300}
                      className={`w-[400px]  lg:w-[350px] h-[350px] object-cover    ${className2}`}
                    />
                  )}
                  <div className="flex flex-col gap-y-2 justify-start items-start w-full px-2">
                    <p className="text-[#000000] font-bold  text-lg font-mont  md:text-xl hover-line ">
                      {work.name}
                    </p>

                    <h3 className="text-base text-[#000000]  font-inter font-normal  md:text-lg">
                      {work.title}
                    </h3>
                    <P className="md:text-sm text-sm">{work.description}</P>
                  </div>
                </section>
              </Link>
              <section
                className={`invisible  md:visible   hovered-elements-on-desktop absolute bottom-0 translate-y-full w-full h-[150px] 
              opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-[14%]
               group-hover:bg-secondary_blue group-hover:opacity-100 mt-auto flex justify-center items-center  text-black font-bold text-xl   ${hoverClass}`}
              >
                <Link href={work.route} className="hover-line" target={work.target}>
                  {" "}
                  View Profile
                </Link>
              </section>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalWorksForActiveTab > 3 && (
        <div className="w-full flex justify-center mt-4">
          <p
            onClick={() => setShowMore(!showMore)}
            className="py-2 text-lg  text-gray-800  cursor-pointer font-bold  mr-auto ml-[0rem] "
          >
            {showMore ? <span> Show Less</span> : <span> Show More</span>}
          </p>
        </div>
      )}
    </div>
  );
};

export default Tabs;
