import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import WorkNav from "../../Main/Work-Atoms/WorkNav";

import AdInter from "../Advocacy-Atoms/AdInter";
import AdvSub from "../Advocacy-Atoms/AdvSub";

export default function AdvocacyContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[2rem] ">
      <AdvSub />
    </div>
  );
}
