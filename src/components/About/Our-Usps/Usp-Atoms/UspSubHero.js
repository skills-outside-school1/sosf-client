import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

const hero_data = [
  {
    heading2: "Our USPs",
  },
];
export default function UspSubHero() {
  return <div className="w-full ">
<SubHero items={hero_data} className={`w-full md:w-full lg:w-full px-2 `}/>
  </div>;
}
