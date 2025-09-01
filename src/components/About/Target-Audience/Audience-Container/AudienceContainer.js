import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import AudienceSubHero from "../Audience-Atoms/AudienceSubhero";
import MoreAboutUs from "../../Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import TargetAudience from "../Audience-Atoms/TargetAudience";
import AudienceFlexTabs from "../Audience-Atoms/AudienceFlexTabs";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";

export default function AudienceContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px]   md:gap-y-[150px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <AudienceSubHero />
      {/* <TargetAudience /> */}
      <AudienceFlexTabs />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
