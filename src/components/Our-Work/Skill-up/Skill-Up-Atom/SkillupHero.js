import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Button from "@/components/shared/buttons/button2";
import Image from "next/image";
import React from "react";

const SkillupHero = () => {
  const items = [
    {
      // heading1: "",
      heading2: "SKILL UP FOR BUSINESS & CAREER",
      paragraph:
        "The Online Skill-Up for Business (OSB) and Online Skill-Up for Career (OSC) are flagship digital learning programs by the Skills Outside School Foundation (SOSF), empowering individuals globally with practical, AI-powered entrepreneurial and employability skills. Built around Tongston's Entrepreneurial Thinking Model and the Knowledge-Skills-Attitude (KSA) framework, these courses prepare participants for sustainable ventures and meaningful employment. Hosted on Udemy, and supported by T-World, they have reached 2,000+ learners across 100+ countries. Leveraging AI-powered tools, real-world case studies, and practical business modules, OSB delivers a cutting-edge learning experience accessible globally via Udemy.",
    },
  ];

  return (
    <div>
      <SubHero
        items={items}
        aos="fade-up"
        // className=""
        className2=" relative"
        className3=""
        // className4=""
        // className5=""
      />
      <div className=" absolute bottom-8 right-[700px] -z-10">
        <Image
          src="/assets/images/sosf-images/cyc.png"
          alt=""
          width={220}
          height={220}
        />
      </div>
      <div className=" absolute bottom-2 right-[100px] -z-10">
        <Image
          src="/assets/images/sosf-images/cyc2.png"
          alt=""
          width={220}
          height={220}
        />
      </div>
      <div className="px-4 py-6 md:px-16 lg:px-28">
        <Button text="Apply for funding" />
      </div>
    </div>
  );
};

export default SkillupHero;
