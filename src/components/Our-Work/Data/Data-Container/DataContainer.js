import RegisterPowers from "../Data-Atoms/RegisterPowers"
import WhyMatters from "../Data-Atoms/WhyMatters"
import ActionableInsights from "../Data-Atoms/ActionableInsights"
import DataHero from "../Data-Atoms/DataHero"
import Hero from "@/components/home/Home-Atoms/Hero";
import GameChanger from "../Data-Atoms/Game-Changer"
import WhatWeDo from "../Data-Atoms/whatWeDo"
import Support from "../Data-Atoms/Support"
import Framework from "../Data-Atoms/Framework"

export default function DataContainer() {
  return (
    <>
      <Hero />
      <DataHero />
      <WhatWeDo />
      <GameChanger />
    <div
      className="w-full"
      style={{
        backgroundImage:
          "url(/assets/images/our_work/background.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent: - Register Powers Section */}
        <RegisterPowers />
        {/* Opaque White Background Sections */}
        <WhyMatters />
        {/* Transparent: - Evaluation, Platform Integration, Thought Leadership */}

        <Framework />
        {/* Opaque White Background Sections */}
        <Support />
        {/* Transparent: - Actionable Insights with Accordion */}
        <ActionableInsights />
      </div>
    </>
  )
}
