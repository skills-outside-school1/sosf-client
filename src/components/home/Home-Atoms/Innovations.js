import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import InnovationCard from "@/components/shared/Atoms/Innovation-Card";

export default function Innovations() {
  const innovationsitems = [
    {
      heading2: "Our Innovations",
    },
  ];
  const cardItems = [
    {
      // image: "/assets/images/home/innovate.png",
      image: "https://www.vitalvoices.org/wp-content/uploads/2022/07/VV-Summit-2024.jpeg",
      heading: "Explore Our Ambassadors",
      title: (
        <span>
          Discover the inspiring journey of our beneficiaries who have evolved
          into ambassadors, driving positive change and making a lasting impact
          in their communities. Learn how their experiences with the SOSF
          programs have empowered them to become leaders and catalysts for
          transformation.
        </span>
      ),
      link: "/ambassadors",
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col   ">
    
      <section className=" px-2   lg:px-[8rem] ">
        <InnovationCard
          cardItems={cardItems}
          backgroundColor="#DDEEFF"
          imageHeight={600}
          imageWidth={1100}
        />
      </section>
    </div>
  );
}
