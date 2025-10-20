import Heading from "@/components/shared/headings/Case";
import Link from "next/link";
import React from "react";

const PartSubHero = () => {
  return (
    <section className="px-4 md:px-16 lg:px-32 py-10 md:py-14">
      {/* Heading Section */}
      <div className="mb-8">
        <Heading text="Our Collaborations" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="max-w-3xl">
          <p className="font-inter text-[#1F2937] leading-7 mb-8">
            Collaboration is vital since no single entity can address global
            challenges in isolation. By merging resources, knowledge, and
            innovations across various sectors — governments, NGOs, and
            businesses — we can amplify our impact and fast-track the attainment
            of the SDGs for a sustainable future for all. We've historically
            joined hands with prominent organizations and individuals in
            alignment with the 17th SDG, emphasizing investments for global
            progress in delivering our mandate and furthering the objectives and
            goals of organizations whose vision aligns with ours.
          </p>

          {/* Button */}
          <Link href="/get-involved">
            <button className="bg-[#B7C8F4] hover:bg-[#5f8bfc] text-[#1F2937] font-medium duration-200 rounded-2xl px-8 py-2 transition-colors">
              Get Involved
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartSubHero;
