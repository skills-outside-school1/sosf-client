"use client";
import { H3 } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";
import React, { useRef, useState } from "react";

const InvestorsAndPartners = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Investment programs data
  const investmentPrograms = [
    {
      title: "SOSF Bridge",
      description: `Life, Career, Academic, Technical, Vocational & Enterprise Skills Development in youth in government secondary schools and tertiary institutions through workshops deployed by trained school teachers’ and opportunities provided through partners and mentors.`,
    },
    {
      title: "SOSF Headstart",
      description: (
        <div>
          <p>
            SOSF Headstart for agropreneurs is a community-based livelihoods
            program incorporating technical, business, cooperative skills
            training and access to funding.
          </p>
          <ul className="list-disc pl-5 mt-2 text-left">
            <li>
              Improvement of yields / productivity of agricultural produce
            </li>
            <li>Value addition of high-value raw agricultural produce</li>
          </ul>
        </div>
      ),
    },
    {
      title: "SOSF Grants",
      description: (
        <div>
          <p>
            All alumni / ambassadors of SOSF direct interventions have access to
            SOSF funds for employment/ entrepreneurship.
          </p>
          <p className="mt-4">
            Unrestricted: To be allocated wherever the need is greatest.
          </p>
        </div>
      ),
    },
    {
      title: "SOSF Funds",
      description: `SOSF Funds enable structured financial contributions from partners and donors, focusing on projects that align with SDG goals 1, 4, and 8.`,
    },
    {
      title: "SOSF Online Skill Up for Business & Career",
      description: `Flagship digital courses designed to equip learners with entrepreneurial skills and access to funding, mentorship, and AI-supported tools.`,
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState(investmentPrograms[0]);

  return (
    <div className="flex flex-col py-8 md:py-10 px-4 md:px-[3rem] lg:px-[7.6rem] font-inter w-full bg-milk">
      {/* Header */}
      <div className="">
        <div className="flex flex-col items-center text-center justify-center gap-4">
          <H3>Our Organizational Investors & Partners</H3>
          <p className="text-[15px] text-[#1F2937] max-w-2xl">
            To truly redefine philanthropy, we must redefine how people give,
            what they give, & why they give!
          </p>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-2 md:gap-4 items-start lg:justify-center lg:items-center text-left font-mont">
          {[
            "Give with purpose!",
            "Give in cash, assets, or in-kind!",
            "Give through collaborations!",
            "Give Now & Always!",
          ].map((text, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Image
                src="/assets/images/collaborations/mark.svg"
                width={15}
                height={15}
                alt="mark"
                className="h-auto"
              />
              <span className="font-medium text-[15px]">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-start gap-4 w-full">
        {/* Left Sidebar (Desktop) */}
        <div className="px-3 py-3 bg-[#B7C8F4] font-mont rounded-2xl hidden md:flex flex-col items-start gap-1 w-full md:w-[250px] h-[292px] font-medium text-[14px] lg:text-[15px] ">
          {investmentPrograms.map((program, index) => (
            <button
              key={index}
              onClick={() => setSelectedProgram(program)}
              className={`w-full text-left p-3 rounded-2xl duration-150 ${
                selectedProgram.title === program.title
                  ? " text-black"
                  : "hover:bg-[#CEDCFF]"
              }`}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="font-mont rounded-2xl md:hidden w-full font-medium select-none">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-3 scrollbar-hide cursor-grab active:cursor-grabbing px-2 py-2 text-[14px]"
          >
            {investmentPrograms.map((program, index) => (
              <button
                key={index}
                onClick={() => setSelectedProgram(program)}
                className={`flex-shrink-0 px-4 py-2 rounded-2xl whitespace-nowrap transition-all duration-150 ${
                  selectedProgram.title === program.title
                    ? " text-black"
                    : "bg-[#CEDCFF]/30 hover:bg-[#CEDCFF]"
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section (Description) */}
        <div className="bg-[#CEDCFF] rounded-2xl px-3 py-4 w-full md:w-[615px] min-h-[292px] flex flex-col justify-center items-center font-inter font-normal">
          <p className="text-black leading-7">{selectedProgram.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorsAndPartners;
