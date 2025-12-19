import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import React from "react";

export default function Fundshero() {
  const HeroData = [
    {
      heading1: "",
      heading2: "SOSF Funds",
      paragraph: (
        <span>
          At SOSF, our commitment to SDG 17 Partnerships for the Goals extends
          beyond traditional interventions. We believe in innovative
          collaborations with corporates and individuals to create sustainable
          change through our unique SOSF Funds. These funds represent a powerful
          blend of philanthropic intent and strategic investment, designed to
          empower our partners and drive measurable social and financial
          returns.{" "}
        </span>
      ),
    },
  ];
  return (
    <div className="w-full">
      <SubHero items={HeroData} aos={``} />
    </div>
  );
}
