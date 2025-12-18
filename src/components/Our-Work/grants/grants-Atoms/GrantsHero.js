import SubHero from "@/components/shared/Atoms/Subhero-Atoms/subhero2";
import Button from "@/components/shared/buttons/button2";
import React from "react";


const GrantsHero = () => {
  const items = [
    {
      heading2: "SOSF GRANTS",
      subheading: "Targeted, Non-Programmatic Funding for Individuals and Institutions", 
      paragraph: "At Skills Outside School Foundation (SOSF), we understand that not all impact happens within programs. Sometimes, a well-placed grant—delivered with integrity, accountability, and flexibility—can spark meaningful, long-term change.",
    },
  ];
  
   return (
    <div>
      <SubHero
        items={items}
        aos="fade-up"
        className="bg-white"
        className2="relative"
      />
      <div className="px-4 py-6 md:px-16 lg:px-28">
        <Button text="Explore Grants" />
      </div>
    </div>
  );
};

export default GrantsHero;