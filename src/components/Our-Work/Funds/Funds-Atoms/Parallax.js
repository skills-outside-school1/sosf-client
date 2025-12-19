import { H3, P } from "@/components/shared/Atoms/Typography/typography";
import { ErrorBoundaryHandler } from "next/dist/client/components/error-boundary";
import React from "react";

export default function Parallax() {
  const bounded = [
    { content: "Accountability and sustainability" },
    { content: "Continuous funding for future cohorts" },
    { content: "Community-based trust through social collateral" },
  ];
  const secondbound = [
    { content: "Youth completing secondary and tertiary education" },
    { content: "Startups led by Bridge/Headstart Ambassadors reaching scale" },
    { content: "Farmers increasing yield and income sustainably" },
    {
      content:
        "Intermediary organizations accessing capital to deliver last-mile impact",
    },
  ];

  return (
    <div
      className="w-full  h-[900px]  md:h-[500px]     flex flex-col justify-center items-center  relative overflow-hidden "
      style={{
        backgroundImage: `url('/assets/images/our_work/sosf-funds/bg.png')`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-o left-0 h-[900px] px-4  md:px-0  py-5  md:h-[550px] w-full max-w-[100%]  bg-black bg-opacity-60 flex flex-col justify-center items-center  ">
        <section className="grid-container w-ful  md:w-[90%]   md:px-[4rem]  mx-auto  grid grid-cols-1  gap-y-12 gap-x-[3rem] justify-center items-center  md:grid-cols-2  ">
          <div className="managing-funds-container   md:mb-auto    w-full flex flex-col gap-y-3 justify-center items-start  ">
            <H3
              className={`font-mont font-semibold text-xl  text-center  text-white `}
            >
              Repayment & Recycling Capital
            </H3>
            <P className={`text-white font-inter text-base font-normal `}>
              For select funds, we implement a "pay-it-forward" model, where
              repayable grants or working capital are returned after milestones
              are met. This ensures
            </P>
            <div className="bounded-border-items flex flex-col gap-y-3 justify-start items-start   mt-4  md:mt-0">
              {bounded.map((item, index) => (
                <P
                  key={index}
                  className="bg-[#F8F8F8] md:hover:rotate-2 transform duration-1000  rounded-lg p-2 px-4 flex justify-center items-center  text-gray-700 font-inter w-auto h-[60px] "
                >
                  {item.content}
                </P>
              ))}
            </div>
          </div>

          {/* section 2  */}
          <div className="managing-funds-container   md:mb-auto    w-full flex flex-col gap-y-3 justify-center items-start  ">
            <H3
              className={`font-mont font-semibold text-xl  text-center  text-white `}
            >
              Results We Aim For
            </H3>
            <P className={`text-white font-inter text-base font-normal `}>
              Measurable outcomes that drive sustainable change across
              communities
            </P>
            <div className="bounded-border-items flex flex-col gap-y-3 justify-start  mt-4 md:mt-0 items-base ">
              {secondbound.map((item, index) => (
                <P
                  key={index}
                  className="bg-[#F8F8F8] md:hover:-rotate-2 transform duration-1000  rounded-lg p-2 px-4 flex justify-center items-center  text-gray-700 font-inter w-full  md:w-[455px] h-[60px] text-wrap "
                >
                  {item.content}
                </P>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
