import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

export default function Built() {
  const heading_data = [
    {
      paragraph:
        "Our model is built on our 3 interconnected approaches: Data, Interventions & Advocacy. ",
    },
  ];
  return (
    <div className="w-full h-[fixed[ flex flex-col justify-start items-start ">
      <SubHero
        items={heading_data}
        className={`w-full md:w-full lg:w-full  `}
      />
    </div>
  );
}
