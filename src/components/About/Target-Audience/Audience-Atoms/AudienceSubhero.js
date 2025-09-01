import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

export default function AudienceSubHero() {
  const data = [
    {
      heading2: "Our Target Audience",
      paragraph:
        "Our target audience comprises of direct and indirect beneficiaries of our direct and indirect interventions modelled on our 3 pillars:",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-start items-start pb-5 px-2 md:px-0">
      <SubHero items={data} className={`w-full md:w-full lg:w-full `} />
    </div>
  );
}
