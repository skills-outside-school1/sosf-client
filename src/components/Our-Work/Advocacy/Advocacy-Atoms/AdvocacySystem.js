"use client";
import { H2 } from "@/components/shared/Atoms/Typography/typography";
import React from "react";

const AdvocacySystem = () => {
  const pillars = [
    {
      title: "Power in People",
      desc: "Real change begins where people live, work, and learn. We equip community ambassadors, volunteers, and local changemakers to drive transformation from the inside out.",
      bg: "/assets/images/advocacy/PIP.png",
    },
    {
      title: "Evidence with a Voice",
      desc: "We believe numbers should do more than sit in reports , they should move leaders to act. Our research and social registers turn insight into influence, helping shape national conversations and curriculum reforms that put people first.",
      bg: "/assets/images/advocacy/EWV.png",
    },
    {
      title: "Shaping Policy, Building Legacy",
      desc: "We don’t chase quick wins — we build structures that last. Through strategic partnerships and policy advocacy, SOSF helps governments, schools, and institutions integrate proven programs that outlive projects and create lasting impact.",
      bg: "/assets/images/advocacy/SPBL.png",
    },
  ];

  return (
    <div className="items-center justify-center w-full px-6 xl:px-0 flex  flex-col ">
      <H2
        className={`mb-12 text-2xl font-bold text-center text-gray-900 md:text-left md:text-3xl font-mont l`}
      >
        Advocacy That Moves Systems and People
      </H2>

      <div className="grid items-center  justify-center max-w-5xl gap-6 mx-auto md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${pillar.bg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="
                  w-full max-w-[350px] h-auto   md:h-[400px] px-5 py-10
                  flex flex-col text-white rounded-3xl
                  shadow-md  md:w-full 
                   overflow-hidden justify-center items-start 
                "
          >
            {/* Dark overlay */}

            <div className=" flex flex-col ">
              <h3 className="mb-6 text-xl font-bold text-center font-mont md:text-left">
                {pillar.title}
              </h3>
              <p className="text-base leading-relaxed text-center text-gray-100 sm:text-lg md:text-left">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvocacySystem;
