import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Heading from "../headings/Case";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabsRef = useRef(null);
  const containerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    };

    const handleWindowScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const bottomOfTabs = rect.bottom - window.innerHeight;
        setIsSticky(rect.top <= 0 && bottomOfTabs >= 0);
      }
    };

    const tabsElement = tabsRef.current;
    tabsElement.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleWindowScroll);
    handleScroll(); // Initial check
    handleWindowScroll(); // Initial check

    return () => {
      tabsElement.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleWindowScroll);
    };

    Aos.init({
      duration: 1500,
    });
  }, []);

  const scrollLeft = () => {
    tabsRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    tabsRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col gap-6 justify-start items-center md:px-6 relative"
    >
      <div
        className={`flex w-full items-center ${
          isSticky
            ? "sticky top-0 bg-white z-10 transition-transform duration-500"
            : ""
        }`}
      >
        {showLeftArrow && (
          <button
            className="absolute left-0 z-10 p-2 bg-white"
            onClick={scrollLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <div className={`flex flex-row w-full overflow-x-auto`} ref={tabsRef}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex py-2 px-4 text-center text-sm border-b-2 w-full ${
                activeTab === tab.id
                  ? "border-blue text-white bg-blue transition-all duration-1000 ease-in-out"
                  : "border-yellow text-black"
              } hover:text-pink`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {showRightArrow && (
          <button
            className="absolute right-0 z-10 p-2 bg-white"
            onClick={scrollRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
      <div className="p-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "grid grid-cols-1 py-8 justify-start items-start w-full px-3 md:w-full lg:w-[1000px] md:grid-cols-2 md:gap-1"
                : "hidden"
            }`}
          >
            <motion.section
              key={`content-${activeTab}`}
              className="animated-section w-full md:w-[400px] lg:w-[600px] flex flex-col gap-4 md:mr-auto md:right-[1rem] md:relative lg:right-[6rem] justify-center items-start md:justify-start md:items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.9 }}
            >
              <Heading className="text-xl pb-5 text-black text-opacity-75 font-bold font-passion md:text-4xl">
                {tab.heading}
              </Heading>
              <heading className="text-xl text-black  md:text-2xl">
                {tab.subheading}
              </heading>
              <p className="pt-6   ">{tab.content1}</p>

              <Link
                href={tab.link}
                className="hover-line  md:w-[145px] text-black pt-7 text-base  md:text-xl"
              >
                {tab.linktext} &rarr;
              </Link>
            </motion.section>

            <motion.section
              key={`image-${activeTab}`}
              className="h-[fixed] w-full md:w-[400px] lg:w-[600px] pt-8 md:pt-0 md:left-[2rem] lg:left-[4rem] md:relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.9 }}
            >
              <Image
                src={tab.side_image}
                alt={tab.heading}
                height={500}
                width={500}
                className="w-full h-[300px] md:w-[500px] md:h-[500px] rounded-tr-[20%] rounded-tl-[20%] rounded-bl-[20%] rounded-br-[20%] shadow-lg"
              />
            </motion.section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
