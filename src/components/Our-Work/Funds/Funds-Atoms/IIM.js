import ImageBgCards from "@/components/shared/Atoms/Cards-Atoms/ImageBgCards";
import ValueCards from "@/components/shared/Atoms/Cards-Atoms/Value-Cards";
import { H2, P } from "@/components/shared/Atoms/Typography/typography";
import React from "react";

export default function IIM() {
  // cards data here

  const cardData = [
    {
      bg: "https://www.investopedia.com/thmb/5ax52IuVfl2cSthW8atekMTjWZM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2203756789-d80166ddff35469aa179f7ad807e4c1f.jpg",
      icon: "/assets/icons/sosf-funds/icon-5.png",
      title: "Program-Related Investments (PRI)",
      description:
        "Below-market investments (loans, equity, guarantees) to directly further our charitable mission.",
    },
    {
      bg: "https://www.investopedia.com/thmb/5ax52IuVfl2cSthW8atekMTjWZM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2203756789-d80166ddff35469aa179f7ad807e4c1f.jpg",
      icon: "/assets/icons/sosf-funds/icon-6.png",
      title: "Mission-Related Investments (MRI)",
      description:
        "Market-rate investments from our endowment that align with our mission",
    },
    {
      bg: "https://www.investopedia.com/thmb/5ax52IuVfl2cSthW8atekMTjWZM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2203756789-d80166ddff35469aa179f7ad807e4c1f.jpg",
      icon: "/assets/icons/sosf-funds/icon-7.png",
      title: "Venture Philanthropy",
      description:
        "Capacity-building support, funding, and mentorship to enterprises solving urgent social problems.",
    },
  ];
  return (
    <div className="w-full h-[fixed] flex  flex-col gap-y-4 justify-center  items-start   md:ol-[6rem] lg:pl-[7rem]">
      <section className="theading=description-container  px-4   flex flex-col gap-y-3 justify-center items-start ">
        <H2 className={` text-2xl  font-semibold text-start font-mont `}>
          Our Impact Investing Models
        </H2>
        <P
          className={`text-lg font-normal text-start font-inter w-full  md:w-[55%] `}
        >
          Impact Investing at SOSF goes beyond philanthropy. We adopt models
          that blend financial return with measurable social and environmental
          impact, mobilized through
        </P>
      </section>
      {/* cards section  */}
      <section className="cards-contaier px-4  flex flex-col gap-y-4 justify-center items-center ">
        <ImageBgCards cards={cardData} containerStyles={``} />
      </section>
    </div>
  );
}
