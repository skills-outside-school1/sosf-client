import React, { useState, useRef, useEffect } from "react";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";

export default function AutoFocusTabs({
  title = "",
  description = "",
  tabs = [],
  defaultOpenIndex = 0,
  scrollThreshold = 0.8, // 80% visible before auto-open
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hasExpanded, setHasExpanded] = useState(false);
  const contentRefs = useRef([]);
  const tabContainerRef = useRef(null);

  const toggleTab = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (contentRefs.current[activeIndex]) {
      contentRefs.current[activeIndex].style.maxHeight =
        contentRefs.current[activeIndex].scrollHeight + "px";
    }

    contentRefs.current.forEach((ref, idx) => {
      if (idx !== activeIndex && ref) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasExpanded) {
          setActiveIndex(defaultOpenIndex);
          setHasExpanded(true);
        }
      },
      { threshold: scrollThreshold }
    );

    if (tabContainerRef.current) {
      observer.observe(tabContainerRef.current);
    }

    return () => {
      if (tabContainerRef.current) {
        observer.unobserve(tabContainerRef.current);
      }
    };
  }, [hasExpanded, defaultOpenIndex, scrollThreshold]);

  return (
    <div
      ref={tabContainerRef}
      className="w-full flex flex-col justify-center items-center gap-y-4 gap-x-8"
    >
      <H3 className="mb-8 px-2 md:px-[4rem] lg:px-[7.6rem]">{title}</H3>

      <P className="px-2 md:px-[4rem] lg:px-[7rem] text-center">
        {description}
      </P>

      {/* Tab Headers */}
      <div className="grid grid-cols-2 w-full md:flex md:flex-row   md:flex-wrap gap-y-2 md:gap-y-4 justify-center items-center md:gap-x-[1rem] px-3 gap-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => toggleTab(index)}
            className={`relative group overflow-hidden text-center py-2 px-4 font-bold text-lg md:text-xl h-[120px] md:w-[200px] md:h-[100px] ${
              activeIndex === index
                ? "bg-secondary_blue bg-opacity-20 text-black font-bold"
                : "text-gray-800 font-bold bg-secondary_blue"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tabs.map((tab, index) => (
        <div
          key={index}
          ref={(el) => (contentRefs.current[index] = el)}
          className="overflow-hidden transition-[max-height] duration-700 ease-in-out mt-4 px-4 md:px-0"
          style={{ maxHeight: activeIndex === index ? "auto" : "0px" }}
        >
          <div className="w-full px-2 md:px-[4rem] lg:px-[7rem]">
            <P>{tab.content}</P>
          </div>
        </div>
      ))}
    </div>
  );
}
