import { CheckIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import OverviewCard from "./OverviewCard";

const combinationItems = [
  "Academic learning",
  "Career preparation",
  "TVET skills development",
  "Enterprise projects",
  "Mentorship and partner opportunities",
];

export const ProgramOverviewSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-8 px-4 md:px-10 lg:px-28 py-16">
      <div className="max-w-[723px] flex flex-col items-center gap-2.5 text-center">
        <h2 className="font-mont font-semibold text-black text-xl md:text-2xl lg:text-3xl">
          What Makes It Different?
        </h2>
        <p className="font-inter font-normal text-black text-base md:text-lg lg:text-xl max-w-[656px]">
          SOSF Bridge is built on 33 principles of Entrepreneurial Education
          (co-developed with Tongston) and benchmarked against global systems
          like Finland, Singapore, the UK, and the US. It is also a fully
          digitized, teacher-led, school-driven model with minimal operational
          burden on SOSF, enabling scale and sustainability.
        </p>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row w-full max-w-[1120px] items-center justify-center gap-6 md:gap-8">
        {/* Card */}
        <div className="flex-1 min-w-[300px] mb-6 lg:mb-0 flex justify-center">
          <OverviewCard title="It's a combination of:" items={combinationItems} />
        </div>

        {/* Image */}
        <div className="flex-1 min-w-[300px] max-w-[573px] flex justify-center">
          <Image
            className="w-full h-auto rounded-[15px] object-cover"
            alt="Program overview classroom"
            src="https://c.animaapp.com/mhuomfqaaqPDBB/img/rectangle-48.png"
            width={573}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
