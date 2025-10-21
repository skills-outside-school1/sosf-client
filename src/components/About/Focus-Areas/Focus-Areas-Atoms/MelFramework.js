import { H2, P } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";
import React from "react";

const MelFramework = () => {
  const frameworkSteps = [
    {
      img: "/assets/images/our-focus/Frame.png",
      text: "Desktop evaluation via AI tools",
    },
    {
      img: "/assets/images/our-focus/Frame (1).png",
      text: "Beneficiary digital registration",
    },
    {
      img: "/assets/images/our-focus/Frame (2).png",
      text: "Baseline data capture",
    },
    {
      img: "/assets/images/our-focus/Frame (3).png",
      text: "Midline & endline evaluation",
    },
    {
      img: "/assets/images/our-focus/Frame (4).png",
      text: "Impact assessment",
    },
    {
      img: "/assets/images/our-focus/Frame (5).png",
      text: "Program learning & improvement",
    },
    {
      img: "/assets/images/our-focus/Frame (6).png",
      text: "Institutionalization & advocacy",
    },
  ];

  return (
    <div className="bg-[#D7E2FE] w-full py-8 md:py-10 flex flex-col">
      <div className="mx-auto px-4 md:px-[4rem] lg:px-[7.6rem]">
        <div className="text-center flex flex-col gap-6">
          <H2>7 Step MEL Framework</H2>
          <P>
            We don’t guess. We measure, learn, adapt, and scale what works. It
            doesn’t just collect data.
          </P>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center mt-10 justify-center ">
          {frameworkSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={step.img}
                alt={`framework-step-${index + 1}`}
                width={50}
                height={50}
              />
              <p className=" mt-8 font-inter text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MelFramework;
