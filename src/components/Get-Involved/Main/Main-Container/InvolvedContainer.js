import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MainSub from "../Main-Atoms/MainSub";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import { InvolvementCards } from "@/components/involvement-cards"
import { StructureChart } from "@/components/structure-chart"
// import { LearnMoreSection } from "@/components/learn-more-section"
import { NewsletterSurvey } from "@/components/newsletter-survey"



export default function InvolvedContainer() {
  return (
    <div className="w-full h-[fixed]">
      <Hero />
      <MainSub />
      <InvolvementCards />
      <StructureChart />
      {/* <LearnMoreSection /> */}
      <MoreAboutUs />
      <NewsletterSurvey />
    </div>
  );
}

