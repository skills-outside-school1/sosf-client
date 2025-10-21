"use client";
import React from "react";
import Button2 from "@/components/shared/buttons/button2";
import Transition2 from "@/components/shared/Atoms/Text-Transitions/Transition2";

const GlobalComponent = () => {
  const texts = [
    "Data-Driven Sustainable Interventions for Impact",
    "Strategic Direct & Indirect Interventions for our Beneficiaries",
    "Advocating for Sustainable Social-Economic Development",
  ];

  return (
    <div className="bg-[url('/assets/images/our-focus/Background.png')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center px-4 md:px-[4rem] lg:px-[7.6rem]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#EEF3FF] px-7 py-14 rounded-xl overflow-hidden">
          {/* Reusable Animated Text */}
          <Transition2 texts={texts} interval={4000} />

          {/* Paragraph */}
          <p className="my-6 text-black font-inter">
            We collect, assess & leverage on data to design, deploy &
            disseminate interventions, advocate & inform for collaborative
            impact
          </p>

          {/* Reusable Button */}
          <Button2 text="Explore our Work" />
        </div>
      </div>
    </div>
  );
};

export default GlobalComponent;
