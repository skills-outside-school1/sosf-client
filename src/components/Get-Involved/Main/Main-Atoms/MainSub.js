import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

export default function MainSub() {
  const sub = [
    {
      heading2: "Get Involved",
      paragraph:
        " There are several made-to-measure solutions and ways for you to disrupt development and redefine philanthropy with us!",
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start  ">
      <SubHero items={sub} className={`w-full md:w-full lg:w-full `} />
    </div>
  );
}
