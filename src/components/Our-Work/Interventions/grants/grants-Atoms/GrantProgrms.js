"use client";
import React, { useEffect } from "react";
import { GrantCard } from "./GrantCard";
import Aos from "aos";
import "aos/dist/aos.css";

const programTiers = [
  {
    tiers: "Up to NGN 20M",
    title: "Large Grants",
    description:
      "Are you leading an established, impactful initiative ready to scale and redefine development in Sub-Saharan Africa? Our Large Grants are designed for organizations poised for significant, long-term impact.",
    page: "/grants/large-grants",
  },
  {
    tiers: "Up to NGN 5M",
    title: "Small Grants",
    description:
      "Do you have an innovative solution making a tangible difference in Sub-Saharan Africa, poised for growth and wider reach? Our Small Grants provide crucial support to promising initiatives ready to expand their impact.",
    page: "/grants/small-grants",
  },
  {
    tiers: "Up to NGN 500K",
    title: "Micro Grants",
    description:
      "Are you a passionate individual or a budding community-focused organization with a powerful idea to spark change at the grassroots level in Sub-Saharan Africa? Our Micro Grants are designed to empower foundational initiatives with direct funding and essential capacity building.",
    page: "/grants/micro-grants",
  },
];

export const ProgramDetailsSection = () => {
  // Initialize Animation
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="flex flex-col w-full items-center gap-12 px-4 py-16 md:px-10 lg:px-28 bg-white">
      {/* Header Section */}
      <div
        // data-aos="fade-down"
        className="flex flex-col max-w-[700px] items-center gap-4 text-center"
      >
        <h2 className="font-mont font-bold text-black text-2xl md:text-3xl lg:text-4xl">
          Our Grant Programs
        </h2>
        <p className="font-inter font-normal text-gray-800 text-base md:text-lg leading-relaxed">
          We offer distinct grant schemes tailored to various stages and scales
          of impactful initiatives.
        </p>
      </div>

      {/* Grid container for cards */}
      <div className="grid w-full max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programTiers.map((tier, index) => (
          <GrantCard
            key={index}
            delay={index * 150} // Stagger delay (0ms, 150ms, 300ms)
            tiers={tier.tiers}
            title={tier.title}
            description={tier.description}
            link={tier.page}
          />
        ))}
      </div>
    </section>
  );
};
