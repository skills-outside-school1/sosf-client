import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Button from "@/components/shared/buttons/button2";
import Image from "next/image";
import React from "react";

const AdvocacyHeroSection = () => {
  const items = [
    {
      // heading1: "",
      heading2: "Advocacy",
      paragraph:
        "Institutionalizing Change through Impact: Turning Evidence into Action. Transforming Awareness into Reform.",
    },
  ];

  return (
    <div>
      <SubHero items={items} className2=" relative" className4="mb-4" />
      <div className=" w-full justify-start items-start flex flex-col px-4  md:px-[4rem] gap-y-4 lg:px-[7.6rem] md:w-[80%] ">
        <p className=" leading-normal tracking-wide text-[#000]">
          At SOSF, advocacy is not just an add-on—it is a core pillar that
          converts insights into influence and influence into systemic change.
          We use proofs of concept from our interventions to raise awareness,
          build coalitions, shape policy, and institutionalize sustainable
          solutions across Africa’s education, employment, and entrepreneurship
          ecosystems.
        </p>
        <p className=" leading-normal tracking-wide text-[#000]">
          Our advocacy is grounded in data, community, and action—mobilizing
          people and evidence to shift mindsets, drive reforms, and create an
          enabling environment for lasting impact.
        </p>
      </div>
    </div>
  );
};

export default AdvocacyHeroSection;
