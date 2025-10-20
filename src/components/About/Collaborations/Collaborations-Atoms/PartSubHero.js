import { H1, H2 } from "@/components/shared/Atoms/Typography/typography";
import Heading from "@/components/shared/headings/Case";
import React from "react";

const PartSubHero = () => {
  return (
    <div>
      <div className="px-4 md:px-[4rem] lg:px-[7.6rem]">
        <Heading text="Our Collaborations" />
      </div>
      <div className=" flex flex-col-reverse md:flex-row items-center px-4 md:px-[3rem] lg:px-[7.6rem] py-6 md:py-8 gap-10  ">
        <div>
          <div className=" grid grid-cols-1 lg:grid-cols-3">
            <span className=" font-inter leading-7 col-span-2 text-[#1F2937]">
              Collaboration is vital since no single entity can address global
              challenges in isolation. By merging resources, knowledge, and
              innovations across various sectors, and through governments, NGOs,
              and businesses, we can amplify our impact & fast-track the
              attainment of the SDGs for a sustainable future for all. We've
              historically joined hands with prominent organizations and
              individuals in alignment with the 17th SDG, emphasizing
              Investments for global progress in delivering our mandate and
              furthering the objectives and goals of organizations’ where their
              mandate aligns with ours.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartSubHero;
