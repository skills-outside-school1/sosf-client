import { H3, P } from "@/components/shared/Atoms/Typography/typography";
import React, { useState, useRef, useEffect } from "react";

export default function InterAccTabs() {
  const [activeIndex, setActiveIndex] = useState(null); // Default no active tab
  const [hasExpanded, setHasExpanded] = useState(false); // Tracks if auto-expansion has occurred
  const contentRefs = useRef([]);
  const tabContainerRef = useRef(null);

  const card_tabs = [
    {
      title: "Large Grants",
      content: (
        <span>
          Up to NGN 20,000,000 (or equivalent, with a maximum NGN 10,000,000
          cash component) over up to three years, designed for established
          organizations ready to scale impactful initiatives in education,
          employability, or entrepreneurship. We provide extensive non-financial
          support, focusing on strategic clarity and outcomes.
        </span>
      ),
    },
    {
      title: "Small Grants",
      content: (
        <span>
          Up to NGN 5,000,000 (or equivalent, with a maximum NGN 1,000,000 cash
          component) over up to three years, supporting promising emerging
          innovators in our thematic areas. We offer flexible funding and
          tailored in-kind support to accelerate growth and deepen influence.
        </span>
      ),
    },
    {
      title: "Micro Grants:",
      content: (
        <span>
          Up to NGN 500,000 (or equivalent, entirely in cash) for passionate
          individuals and budding community-focused organizations. These grants
          provide crucial seed funding complemented by a standardized package of
          in-kind support across enterprise, media, learning & development, and
          finance capabilities, nurturing grassroots innovation and fostering
          long-term sustainability.
          <br />
          <br />
          Through our grants, we actively collaborate with partners to disrupt
          development, believing that well-placed funding, combined with
          comprehensive support, can spark profound, lasting change.
        </span>
      ),
    },
  ];

  const toggleTab = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active tab
  };

  useEffect(() => {
    if (contentRefs.current[activeIndex]) {
      const activeContent = contentRefs.current[activeIndex];
      activeContent.style.maxHeight = `${activeContent.scrollHeight}px`;
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
          setActiveIndex(0); // Automatically expand the first tab
          setHasExpanded(true); // Ensure it only happens once
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the element is visible
    );

    if (tabContainerRef.current) {
      observer.observe(tabContainerRef.current);
    }

    return () => {
      if (tabContainerRef.current) {
        observer.unobserve(tabContainerRef.current);
      }
    };
  }, [hasExpanded]);

  return (
    <div
      ref={tabContainerRef}
      className="w-full flex flex-col justify-center items-center gap-y-4 gap-x-8"
    >
      <H3 className="mb-8 px-2 md:px-[4rem] lg:px-[7.6rem]">
        SOSF Grants: Catalyzing Disruptive Development
      </H3>
      <P className={`px-2  md:px-[4rem] lg:px-[7rem] text-center`}>
        Beyond our core programs, SOSF Grants provide targeted, non-programmatic
        funding to individuals and institutions poised to drive transformative
        change across Africa. Our grant philosophy is built on integrity,
        accountability, and genuine partnership. We offer distinct schemes:
      </P>

      {/* Tab Headers */}
      <div className="grid grid-cols-2  w-full md:flex md:flex-row gap-y-2 justify-center items-center md:gap-x-[1rem] px-3 gap-x-4">
        {card_tabs.map((tab, index) => (
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
      {card_tabs.map((tab, index) => (
        <div
          key={index}
          ref={(el) => (contentRefs.current[index] = el)}
          className="overflow-hidden transition-[max-height] duration-700 ease-in-out mt-4 px-4 md:px-0"
          style={{ maxHeight: activeIndex === index ? "auto" : "0px" }}
        >
          <div className=" w-full px-2 md:px-[4rem] lg:px-[7rem]">
            <P>{tab.content}</P>
          </div>
        </div>
      ))}
    </div>
  );
}
