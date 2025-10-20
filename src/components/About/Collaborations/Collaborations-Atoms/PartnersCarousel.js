import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Marquee3 from "@/components/shared/Atoms/Marquee-Atoms/Marquee3";
import { H2, H3, P } from "@/components/shared/Atoms/Typography/typography";
import AutoFocusTabs from "@/components/shared/accordions/AutoFocusTabs";
import TabbedContentDisplay from "@/components/shared/cards/TouchContentDisplay";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";

export default function PartnersSlider() {
  const hero_data = [
    {
      heading1: "Our Organizational Investors & Partners",
      paragraph: (
        <span>
          To truly redefine philanthropy, we must redefine how people give, what
          they give, & why they give!
          <br />
          <br />
          <section className="flex flex-row gap-x-5 flex-wrap w-full gap-y-5">
            <MaskButton
              buttontext={`Give with purpose!`}
              className={`p-3 h-[80px]`}
            />
            <MaskButton
              buttontext={`Give in cash, assets, or in-kind!`}
              className={`p-3 h-[80px]`}
            />
            <MaskButton
              buttontext={`Give through collaborations!`}
              className={`p-3 h-[80px]`}
            />{" "}
            <MaskButton
              buttontext={`Give Now & Always!`}
              className={`p-3 h-[80px]`}
            />
          </section>
        </span>
      ),
    },
  ];
  //partners

  const marquees = [
    {
      direction: "left",
      images: [
        "/assets/images/logos/partners-logos/access bank.png",
        "/assets/images/logos/partners-logos/act.png",
        "/assets/images/logos/partners-logos/areai2.jpeg",
        "/assets/images/logos/partners-logos/australia.jpeg",
        "/assets/images/logos/partners-logos/child&green.png",
        "/assets/images/logos/partners-logos/iita.png",
        "/assets/images/logos/partners-logos/instruit.svg",
        "/assets/images/logos/partners-logos/kaftantv.jpg",
      ],
    },
  ];

  const marquee2 = [
    //investors
    {
      direction: "right",
      images: [
        "/assets/images/logos/partners-logos/leprosy.png",
        "/assets/images/logos/partners-logos/mtn2.webp",
        "/assets/images/logos/partners-logos/nbc2.jpg",
        "/assets/images/logos/partners-logos/desk.jpeg",
        "/assets/images/logos/partners-logos/flow.jpeg",
        "/assets/images/logos/partners-logos/phase3.webp",
        "/assets/images/logos/partners-logos/root.png",
        "/assets/images/logos/partners-logos/seb.png",
        "/assets/images/logos/partners-logos/tongston.webp",
        "/assets/images/logos/partners-logos/udemy.png",
        "/assets/images/logos/partners-logos/unicef2.png",
        "/assets/images/logos/partners-logos/wayma.jpeg",
      ],
    },
  ];

  return (
    <div className="w-full h-[fixed] justify-start items-start flex flex-col gap-y-8 ">
      <section className="contents-container  w-full ">
        <SubHero
          items={hero_data}
          className={`w-full md:w-ful lg:w-full px-2  `}
        />
      </section>
      <section className="marque-carousel-section w-full flex flex-col gap-y-5 mt-9 ">
        <div className="flex flex-col gap-y-3 ">
          {" "}
          <H2 className={` px-3  md:px-[4rem]  lg:px-[7rem]`}>Partners</H2>
          <Marquee3
            marquees={marquees}
            speed={20}
            className={`   rounded-xl     w-[500px] p-2 `}
          />
        </div>
        <div className="flex flex-col gap-y-3 ">
          <H2 className={` px-3  md:px-[4rem]  lg:px-[7rem]`}>Investors</H2>
          <Marquee3
            marquees={marquee2}
            speed={20}
            className={`   rounded-xl     w-[500px] p-2 `}
          />
        </div>
      </section>{" "}
    </div>
  );
}
