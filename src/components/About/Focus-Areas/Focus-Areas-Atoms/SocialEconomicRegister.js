import { H2, H3 } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";
import React from "react";

const SocialEconomicRegister = () => {
  return (
    <div className="py-8 md:py-10 font-inter">
      <div className=" flex lg:flex-row flex-col w-full gap-4 md:gap-12 px-4 md:px-[4rem] lg:px-[7.6rem]">
        <div className=" w-full lg:w-[60%]">
          <H2>SOSF Social & Economic Register</H2>
          <p className=" md:text-md my-6 leading-8 text-[15px]">
            A game-changing digital platform that captures real-time,
            multilingual, geo-tagged data on our direct and intermediary
            beneficiaries. It powers everything we do—from program design to
            advocacy, funding decisions, and reporting.
          </p>
          <span className=" md:text-xl font-semibold leading-8">
            Powering the Pillars: the backbone of our Data, Interventions &
            Advocacy work, the Register enables:
          </span>
          <div>
            <div className=" flex items-center gap-3 my-5">
              <Image
                src="/assets/images/icons/our-focus-icons/mark.svg"
                width={20}
                height={20}
                alt="mark"
              />
              <p>Real-time evaluation</p>
            </div>
            <div className=" flex items-center gap-3 my-5">
              <Image
                src="/assets/images/icons/our-focus-icons/mark.svg"
                width={20}
                height={20}
                alt="mark"
                className="h-auto"
              />
              <p>Seamless partner & grantee selection</p>
            </div>
            <div className=" flex items-center gap-3 my-5">
              <Image
                src="/assets/images/icons/our-focus-icons/mark.svg"
                width={20}
                height={20}
                alt="mark"
              />
              <p>Impact tracking </p>
            </div>
            <div className=" flex items-center gap-3 my-5">
              <Image
                src="/assets/images/icons/our-focus-icons/mark.svg"
                width={20}
                height={20}
                alt="mark"
                className="h-auto"
              />
              <p>Localization and personalization of solutions </p>
            </div>
          </div>
        </div>
        <div>
          <H3>What Makes it Special?</H3>
          <div className=" mt-6 grid grid-cols-1 gap-10">
            <div className=" flex items-center gap-3">
              <Image
                src="/assets/images/icons/our-focus-icons/Vector (7).svg"
                width={30}
                height={30}
                alt="mark"
                className="h-auto"
              />
              <p>Multilingual, voice-enabled, AI-integrated</p>
            </div>
            <div className=" flex items-center gap-3">
              <Image
                src="/assets/images/icons/our-focus-icons/Vector (8).svg"
                width={30}
                height={30}
                alt="mark"
                className="h-auto"
              />
              <p>Offline-capable & mobile-first</p>
            </div>
            <div className=" flex items-center gap-3">
              <Image
                src="/assets/images/icons/our-focus-icons/Vector (9).svg"
                width={30}
                height={30}
                alt="mark"
                className="h-auto"
              />
              <p>
                Auto-generates baseline, midline, endline, and impact reports
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialEconomicRegister;
