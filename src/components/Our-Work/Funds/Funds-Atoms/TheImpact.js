import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H2, H3, P } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";
import React from "react";

export default function TheImpact() {
  const SectionContent = [
    {
      heading1: "Investing for a Better Future",
      heading2: "The Impact Investing Approach",
      paragraph: (
        <span>
          {" "}
          Impact investing is about making investments with the deliberate goal
          of generating measurable social or environmental impact alongside a
          financial return. Unlike traditional donations, impact investing
          strategically aligns financial objectives with critical societal
          goals. It’s about creating a sustainable cycle of change.
        </span>
      ),
    },
  ];
  return (
    <div className="w-full h-[fixed] justify-center items-center md:w-[90%]     md:px-0  md:pl-[6rem]  lg:pl-[7rem]">
      <div className="container-items       grid  grid-cols-1  md:flex md:flex-row gap-x-8 gap-y-5   justify-center items-center  ">
        <section className="image-container flex justify-center items-center    w-[100%] h-[fixed]   relative overflow-hidden  group  px-4  md:px-0 ">
          <Image
            src={`/assets/images/our_work/sosf-funds/theimpact-image.png`}
            alt="impact-image "
            width={700}
            height={700}
            className={` h-[350px]  md:h-[550px]  w-[auto]  object-cover `}
          />
          <div
            className="hover-container  w-[100%] h-[400px]  absolute top-0 left-0 bg-secondary_blue  opacity-0  transform  duration-1000
          md:group-hover:opacity-100   flex flex-col  justify-center items-center 
          "
          >
            <H2
              className={` text-2xl  font-black  font-mont  text-gray-700   `}
            >
              The Impact Investing Approach
            </H2>
            <span className="w-[60px] h-2 bg-black "></span>
          </div>
        </section>

        <section className="contents-container  flex flex-col w-full h-[fixed] p-2  justify-start items-start mb-auto  ">
          {SectionContent.map((items, index) => (
            <div
              key={index}
              className={`  w-full px-2  flex flex-col gap-y-3 justify-center items-start  h-[fixed]  `}
            >
              <H2 className={` text-2xl  font-semibold  font-mont   `}>
                {items.heading2}
              </H2>
              <H3 className={` text-lg font-medium font-inter`}>
                {items.heading1}
              </H3>
              <P className={`text-lg   font-normal font-inter`}>
                {items.paragraph}
              </P>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
