import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H1 } from "@/components/shared/Atoms/Typography/typography";
import { Transitions } from "./Transitions";
import Built from "./Built";

export default function WorkSub() {
  return (
    <div className="w-full flex flex-row md:flex-col gap-y-4 justify-start items-start  md:justify-center md:items-start  ">
      <div className="w-full   flex flex-col  gp-y-5 justify-start items-start     md:flex-row md:gap-x-4 md:justify-center md:items-start  md:px-[4rem] lg:px-[7rem] ">
        <H1
          className={`text-[#000000] flex flex-col gap-y-5 font-bold  font-mont  md:leading-[70.4px] text-3xl md:text-5xl lg:text-[60.25px] md:min-w-[400px] w-full  px-3`}
        >
          Our Strategic Model
        </H1>
        <section className="md:hidden mt-5 w-full ">
          <Built />
        </section>
        <section className="container-text border-r-2 border-r-gray-700 h-[100px]  bottom-4  relative right-[6rem] px-4  hidden md:flex"></section>
        <Transitions />
      </div>
      <section className="md:flex hidden  w-full">
        <Built />
      </section>
    </div>
  );
}
