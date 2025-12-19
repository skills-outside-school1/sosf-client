import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";
import Link from "next/link";
import React from "react";

export default function PartnerSosf() {
  const reactangles = [
    "CSR investment allocations",
    "Individuals and diaspora funders",
    "Zakat, sadaqah, or charitable endowments",
    "Family offices and foundations",
  ];
  return (
    <div className="flex flex-col gap-y-6 justify-center items-center p-2    w-full h-full py-8  ">
      <section className="partner-container     flex flex-col gap-y-6  justify-center items-centermx-auto ">
        <div className="bg-[#4A7CFD] w-[350px] h-[200px] md:h-[105px]  md:w-[957px]  flex p-2 px-3 justify-center items-center rounded-2xl ">
          <P
            className={`text-white font-medium font-inter text-xl  text-center `}
          >
            We are committed to nurturing the next generation of African leaders
            and entrepreneurs, creating a self-sustaining ecosystem of support
            and growth.
          </P>
        </div>
        <div className="text-container  flex flex-col gap-y-4 justify-center items-center  ">
          <H3 className={`text-gray-700 font-mont font-semibold  text-2xl `}>
             Partner With SOSF
          </H3>
          <P
            className={`text-gray-700 font-inter font-normal text-lg  text-center  md:w-[70%] `}
          >
            Ready to sponsor a fund, adopt an ambassador, or structure a legacy
            investment?
          </P>
        </div>
      </section>

      <section className=" flex flex-col gap-y-6 justify-center py-5  items-center bg-[#EFF1F3]     h-[fixed] md:h-[250px] w-[686px]">
        <H3
          className={`text-xl font-medium font-mont text-gray-700 text-center `}
        >
          SOSF welcomes
        </H3>
        <div className="grid grid-cols-1  md:grid-cols-2  gap-y-4 gap-x-5 justify-center iems-center ">
          {reactangles.map((rec, idx) => (
            <div
              className={` bg-[#4A7CFD]   hover:rotate-3 transform  duration-1000  rounded-xl  flex justify-center items-center px-2 p-2  h-[74px] w-[301px] ${
                idx === 2
                  ? "md:-rotate-2"
                  : idx === 3
                  ? "md:rotate-2"
                  : idx === 0
                  ? "md:rotate-2"
                  : idx === 1
                  ? "md:-rotate-2"
                  : ""
              }`}
              key={idx}
            >
              <P className={` text-white font-inter text-base   `}>{rec}</P>
            </div>
          ))}
        </div>
      </section>
      <div className=" flex flex-col gap-y-4 justify-center items-center  ">
        <H3
          className={`text-xl font-medium font-mont text-gray-700 text-center `}
        >
          SOSF welcomes
        </H3>
        <Link href={``}>
          <MaskButton
            buttontext={`Express Interest `}
            className={` rounded-xl `}
            aos={`fade-in`}
          />
        </Link>
      </div>
    </div>
  );
}
