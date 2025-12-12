import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import SkillupHero from "../Skill-Up-Atom/SkillupHero";
import WhatYouGet from "../Skill-Up-Atom/WhatYouGet";
import OSB from "../Skill-Up-Atom/OSB";
import OSC from "../Skill-Up-Atom/OSC";
import WhereWeWork from "../Skill-Up-Atom/WhereWeWork";
import StrategicDeployment from "../Skill-Up-Atom/StrategicDeployment";
import ReadyToSkillup from "../Skill-Up-Atom/ReadyToSkillup";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";

const SkillUpContainer = () => {
  return (
    <div className="w-full h-[fixed] overflow-hidden flex flex-col mb-[1rem] ">
      <Hero />
      <SkillupHero />
      <WhatYouGet />
      <OSB />

      <div className="bg-[url('/assets/images/sosf-images/image-scroll.png')] bg-cover bg-center bg-fixed bg-no-repeat text-white py-8">
        <OSC />
        <WhereWeWork />
        <StrategicDeployment />
        <ReadyToSkillup />
      </div>

      <Subscribe />
    </div>
  );
};

export default SkillUpContainer;
