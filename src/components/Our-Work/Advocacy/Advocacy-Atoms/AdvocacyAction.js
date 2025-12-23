"use client";
import { H2, P } from "@/components/shared/Atoms/Typography/typography";
//use client directive for Next.js 13 server components
import React from "react";

const AdvocacyAction = () => {
  return (
    <div
      className="relative h-[500px] md:h-[450px] flex items-center justify-end overflow-hidden "
      style={{
        backgroundImage: `url("/assets/images/advocacy/AIA.png")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute  bg-black bg-opacity-10  top-0 left-0 right-0   h-[500px] md:h-[450px] flex flex-col " />
      <div className=" w-full md:w-[70%] lg:w-[60%] px-6 md:px-10 lg:px-16">
        <H2 className={`mb-4 text-2xl font-bold font-mont text-white `}>
          Advocacy in Action: Our Theory of Change
        </H2>

        <P className={`mb-4 text-base leading-relaxed text-white`}>
          “We believe in advocacy based on proofs of concept and data as the
          most effective way to embed change. Institutionalization—not
          charity—is our goal.”
        </P>
        <P className={`text-base leading-relaxed text-white`}>
          Our advocacy work creates the enabling environment required for SOSF’s
          programs, grants, and partnerships to thrive—by shifting mindsets,
          scaling evidence-based models, influencing regulation, and ensuring
          policy aligns with the real needs of the people.
        </P>
      </div>
    </div>
  );
};

export default AdvocacyAction;
