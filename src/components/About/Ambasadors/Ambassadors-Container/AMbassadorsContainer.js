import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import AmbSub from "../Ambassadors-Atoms/AmbSub";
import AmbHow from "../Ambassadors-Atoms/AmbHow";
import AmbBios from "../Ambassadors-Atoms/AmbBios";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";

export default function AMbassadorsContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start mb-[2rem] ">
      <Hero />
      <AmbSub />
      <AmbHow />
      <AmbBios />

      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
