import React from "react";
import Marquee3 from "@/components/shared/Atoms/Marquee-Atoms/Marquee3";

const headingData = [
  {
    heading2: "Our Global Partners & Investors ",
    paragraph:
      "Our collaboration with over 150 global partners, including NGOs, international organizations, and donors, has been pivotal in advancing our mission, empowering communities, and fostering sustainable development for those in need.",
  },
];

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

export default function PartnerSlide() {
  return (
    <div className="w-full flex flex-col gap-y-5 justify-start items-start  ">
      <Marquee3 headingData={headingData} marquees={marquees} speed={20} />
    </div>
  );
}
