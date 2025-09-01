import React from "react";

import InterSub from "../Interventions-Atoms/InterSub";
import InterAccTabs from "../Interventions-Atoms/InterAccTabs";

export default function InterContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[2rem] ">
      <InterSub />
      <InterAccTabs />
    </div>
  );
}
