import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MainSub from "../Main-Atoms/MainSub";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import { InvolvementCards } from "@/components/Get-Involved/Main/Main-Atoms/involvement-cards"
import { StructureChart } from "@/components/Get-Involved/Main/Main-Atoms/structure-chart"
import { NewsletterSurvey } from "@/components/Get-Involved/Main/Main-Atoms/newsletter-survey"


export default function InvolvedContainer() {
  return (
    <div className="w-full h-[fixed]">
      <Hero />
      <MainSub />
      <InvolvementCards />
      <StructureChart />
      <MoreAboutUs />
      <NewsletterSurvey />
    </div>
  );
}
