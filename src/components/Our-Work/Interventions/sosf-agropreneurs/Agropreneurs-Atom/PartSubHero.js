import Heading from "@/components/shared/headings/Case";
import React from "react";

const PartSubHero = () => {
  return (
    <section className="px-4 md:px-16 lg:px-32 py-10 md:py-14">
      {/* Heading Section */}
      <div className="mb-8">
        <Heading text="SOSF Headstart Agropreneurs" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="max-w-3xl">
          <p className="font-inter font-normal text-[#000000] leading-7 mb-8">
            SOSF Headstart Agropreneurs is Phase 1 of our sector-based
            entrepreneurship initiative under the broader SOSF Headstart
            program. It focuses on, Small-scale and vulnerable farmers across
            high-value crops (cassava, plantain, vegetables, etc.), Boosting
            yield, income, and resilience through technical and business
            support, Digitally empowering farmers to manage their farms and
            livelihoods independently
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartSubHero;
