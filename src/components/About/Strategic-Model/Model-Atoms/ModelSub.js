import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

const her0_data = [
  {
    heading2: "Our Strategic Model",
    paragraph: (
      <span className=" ">
        Our work embedded in education, entrepreneurship & employability by
        definition extends into several sectors and industries critical to the
        economies of African countries and the world.
        <br />
        <br /> <span className="font-black">Our work directly supports:</span>
        <span className="list-disc flex flex-col gap-y-2 justify-start items-start  mt-5 font-semibold ">
          <li className="text-[#E5243B]   hover-line "> Goal 1: No Poverty</li>
          <li className="text-[#DDA63A]   hover-line "> Goal 2: Zero Hunger</li>
          <li className="text-[#C5192D]   hover-line ">
            {" "}
            Goal 4: Quality Education
          </li>
          <li className="text-[#FF3A21]   hover-line ">
            {" "}
            Goal 5: Gender Equality
          </li>
          <li className="text-[#A21942]   hover-line ">
            {" "}
            Goal 8: Decent Work & Economic Growth
          </li>
          <li className="text-[#DD1367]   hover-line ">
            {" "}
            Goal 10: Reduced Inequality
          </li>
          <li className="text-[#BF8B2E]   hover-line ">
            {" "}
            Goal 12: Responsible Consumption & Production
          </li>
          <li className="text-[#19486A]   hover-line ">
            {" "}
            Goal 17: Partnerships For The Goals{" "}
          </li>
        </span>
        <span className="font-black mt-7 mb-6 flex flex-col gap-y-4  ">
          Our work indirectly through ambassadors & partners supports all other
          SDGs
          <span className="list-disc flex flex-col gap-y-2 justify-start items-start  mt-3 font-semibold ">
            {" "}
            <li className="text-[#4C9F38]   hover-line">
              SDG 3 : Good Health and Well-being
            </li>
            <li className="text-[#C5192D]   hover-line">
              SDG 4 : Quality Education
            </li>
            <li className="text-[#26BDE2]   hover-line">
              SDG 6 : Clean Water and Sanitation
            </li>
            <li className="text-[#FCC30B]   hover-line">
              SDG 7 : Affordable and Clean Energy
            </li>
            <li className="text-[#F26A2E]   hover-line">
              SDG 9 : Industry, Innovation and Infrastructure
            </li>
            <li className="text-[#FD9D24]   hover-line">
              SDG 11 : Sustainable Cities and Communities
            </li>
            <li className="text-[#3F7E44]   hover-line">
              SDG 13 : Climate Action
            </li>
            <li className="text-[#0A97D9]   hover-line">
              SDG 14 : Life Below Water
            </li>
            <li className="text-[#56C02B]   hover-line">
              SDG 15 : Life on Land
            </li>
            <li className="text-[#00689D]   hover-line">
              SDG 16 : Peace, Justice and Strong Institutions
            </li>
          </span>
        </span>
      </span>
    ),
  },
];

export default function ModelSubHero() {
  return (
    <div className="w-full flex flex-col justify-start items-start pb-5 ">
      <SubHero
        items={her0_data}
        className={`w-full md:w-full lg:w-full px-2 lg:px-0 md:px-0 `}
      />
    </div>
  );
}
