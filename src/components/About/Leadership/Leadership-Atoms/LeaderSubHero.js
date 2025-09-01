import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

export default function LeaderSubHero() {
  const hero_data = [
    {
      heading1: "Meet the Guardians of Our Vision",
      heading2: "  Executive Leadership",
      paragraph: (
        <span className=" ">
          Our stellar Board of Trustees and Advisory Council members are the
          compass guiding SOSF&apos;s journey towards transformational impact.
          Let&apos;s get to know these changemakers:
        </span>
      ),
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5 justify-start items-start ">
      <SubHero
        items={hero_data}
        className={` w-full md:w-full lg:w-full px-2  `}
        className2={`order-2`}
        className3={`order-1 font-black `}
        className4={`order-3`}
      />
    </div>
  );
}
