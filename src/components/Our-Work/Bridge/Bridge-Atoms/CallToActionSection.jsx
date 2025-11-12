import React from "react";
import Image from "next/image";
import CtaCard from "./CtaCard";

const bridgeProgramItems = [
  { title: "Knowledge to succeed in school" },
  { title: "Skills & tools to succeed in life and work" },
  { title: "Attitude to create change and value — for themselves and others" },
];

const successItems = [
  {
    title: "Academic Improvement",
    description:
      "Enhanced literacy, numeracy & comprehension through contextualized teaching",
  },
  {
    title: "Skill Development",
    description:
      "Students gain workplace, enterprise, digital, and life skills through projects",
  },
  {
    title: "Teacher Capacity",
    description:
      "Trained, certified teachers using AI tools and global rubrics to deliver value",
  },
  {
    title: "Career Pathways",
    description:
      "Early exposure to employment, intrapreneurship, or entrepreneurship options",
  },
  {
    title: "Equity and Scale",
    description:
      "Students from underserved public schools receive globally benchmarked education support",
  },
  {
    title: "Transparency & Motivation",
    description:
      "Real-time dashboards encourage performance, self-evaluation, and stakeholder learning",
  },
];

const CallToActionSection = () => {
  return (
    <section className="w-full bg-neutral-50 px-4 sm:px-8 md:px-16 lg:px-28 py-12 md:py-16">
     <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-[58px] max-w-[1440px] mx-auto">
  {/* Left Column */}
  <div className="flex flex-col w-full lg:w-[519px] gap-6 lg:gap-7 items-center lg:items-start">
    <Image
      className="w-full h-56 sm:h-64 md:h-72 rounded-[20px] object-cover"
      alt="Students in classroom"
      src="https://c.animaapp.com/mhuomfqaaqPDBB/img/rectangle-49.png"
      width={519}
      height={224}
    />
    <div className="flex flex-col h-full gap-6 lg:gap-7 items-center lg:items-start">
      <div className="flex flex-col gap-2.5 items-center lg:items-start text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold leading-6 text-black font-mont">
          Education to Employment & Enterprise
        </h2>
        <p className="text-base sm:text-lg font-normal leading-6 text-black font-inter">
          Students don't just learn; they create, reflect, lead, and apply...
        </p>
      </div>

      <CtaCard
        items={bridgeProgramItems}
        heading="The SOSF Bridge Program ensures that every student is equipped with the:"
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col w-full lg:w-[470px] mt-8 lg:mt-0 items-center lg:items-start">
    <CtaCard items={successItems} heading="What Success Looks Like" />
  </div>
</div>

    </section>
  );
};

export default CallToActionSection;
