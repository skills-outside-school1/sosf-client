"use client";
import React, { useEffect, useState } from "react";
import Button2 from "@/components/shared/buttons/button2";

const ExploreOurWork = () => {
  const texts = [
    "Data-Driven Sustainable Interventions for Impact",
    "Strategic Direct & Indirect Interventions for our Beneficiaries",
    "Advocating for Sustainable Social-Economic Development",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[url('/assets/images/our-focus/Background.png')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center px-4 md:px-[4rem] lg:px-[7.6rem]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#EEF3FF] px-7 py-14 rounded-xl overflow-hidden">
          {/* Animated Headings */}
          <div className="h-16 relative">
            {texts.map((text, i) => (
              <h1
                key={i}
                className={`absolute font-semibold text-lg md:text-2xl text-black transition-all duration-700 ease-out ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {text}
              </h1>
            ))}
          </div>

          {/* Paragraph */}
          <p className="my-6 text-black">
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

export default ExploreOurWork;
