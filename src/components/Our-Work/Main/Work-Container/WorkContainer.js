import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import WorkSub from "../Work-Atoms/WorkSub";
import Built from "../Work-Atoms/Built";
import WorkCards from "../Work-Atoms/WorkCards";

import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import WorkNav from "../Work-Atoms/WorkNav";

export default function WorkContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col    gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <WorkSub />
      <WorkCards />

      <WorkNav />
      <Subscribe />
    </div>
  );
}
