import React from "react";
import GetInvolvedCards from "@/components/shared/Atoms/Cards-Atoms/Get-InvolvedCars";

export default function GetInvolved() {
  const involvementItems = [
    {
      color: "#8A96B8",

      description: "Partner",
      backgroundImage: "/assets/images/home/partner.webp",
      title2: "Partner",
      content: "Collaborate with us for impactful change",
      link: "/get-involved",
    },

    {
      color: "#B7C8F4",

      description: "Volunteer",
      backgroundImage: "/assets/images/home/volunteer.png",
      title2: "Volunteer",
      content: "Join us in driving transformation",
      link: "/get-involved",
    },

    {
      color: "#6A80B8",

      description: "Invest",
      backgroundImage: "/assets/images/home/invest.png",
      title2: "Invest",
      content: " Support our mission for sustainable development.",
      link: "/get-involved",
    },
    {
      color: "#B7C8F4",

      description: "Govern",
      backgroundImage: "/assets/images/home/writer.png",
      title2: "Govern",
      content: "Contribute to our strategic direction.",
      link: "/get-involved",
    },
  ];

  return (
    <div className="lg:w-[91%] ml-auto  w-full   ">
      <GetInvolvedCards
        items={involvementItems}
        cardHeight="600px"
        transitionDuration={1000}
      />
    </div>
  );
}
