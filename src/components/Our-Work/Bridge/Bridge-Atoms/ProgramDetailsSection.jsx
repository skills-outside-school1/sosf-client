import { GraduationCapIcon } from "lucide-react";
import React from "react";
import { DetailsCard } from "../Bridge-Atoms/DetailsCard";

const programTiers = [
  {
    title: "Bridge Basic",
    level: "Junior Secondary 3 (JS3)",
    description:
      "Academic foundation, personal development, early life/career skills",
  },
  {
    title: "Bridge Intermediate",
    level: "Senior Secondary (SS1–SS3)",
    description:
      "Technical, vocational, enterprise, leadership & work-readiness",
  },
  {
    title: "Bridge Advanced",
    level: "Tertiary students (must apply before graduation)",
    description:
      "Intrapreneurship, innovation, civic action, and career transitions",
  },
];

export const ProgramDetailsSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-6 px-4 py-16 md:px-10 lg:px-28">
      <div className="flex flex-col max-w-[656px] items-center gap-2.5 text-center">
        <h2 className="font-mont font-semibold text-black text-xl md:text-2xl lg:text-3xl">
          What Is SOSF Bridge?
        </h2>
        <p className="font-inter font-normal text-black text-base md:text-lg lg:text-xl">
          The SOSF Bridge Program is a structured, 3-tier education intervention
          that builds essential 21st-century competencies in public school
          students through in-school sessions, teacher-led facilitation, and
          data-backed performance evaluation.
        </p>
      </div>

      {/* Grid container for equal-height cards */}
      <div className="grid w-full max-w-[1200px] gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {programTiers.map((tier, index) => (
          <DetailsCard
            key={index}
            icon={GraduationCapIcon}
            title={tier.title}
            level={tier.level}
            description={tier.description}
          />
        ))}
      </div>
    </section>
  );
};
