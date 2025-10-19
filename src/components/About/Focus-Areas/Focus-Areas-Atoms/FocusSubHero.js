import React from "react";
import Image from "next/image";
import { H2 } from "@/components/shared/Atoms/Typography/typography";
import Heading from "@/components/shared/headings/Case";

const FocusSubHero = () => {
  return (
    <div className="">
      <div className="px-4 md:px-[4rem] lg:px-[7.6rem] mb-4">
        <Heading text="Our Focus Areas" />
      </div>
      <div className=" flex flex-col-reverse md:flex-row items-center px-4 md:px-[3rem] lg:px-[7.6rem] bg-milk py-8 md:py-10 gap-10  ">
        <div>
          <div className="">
            <H2>DATA</H2>
            <p className=" my-5 font-semibold">Evidence That Drives Impact</p>
            <span>
              Data isn’t just a tool. It’s our compass,through SOSF’s Data
              Pillar, we conduct full-cycle Monitoring, Evaluation & Learning
              (MEL) for all our interventions, deliver third-party advisory
              services through our integrated, AI-powered systems, and Lead
              strategic thought leadership and policy-influencing publications.
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/our-focus/Img-1.jpg"
            width={1450}
            height={1450}
            alt="Img1"
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default FocusSubHero;
