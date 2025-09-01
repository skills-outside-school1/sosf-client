import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

export default function ContactSub() {
  const contents = [
    {
      heading2: "Contact",
      paragraph:
        " Find our spokespeople, download our logos and images, and get in touch with us on our work, careers, investments, partnerships, other specific enquiries & more.",
    },
  ];
  return (
    <div className="w-full h-[fixed] justify-start items-start  px-2">
      <SubHero items={contents} aos="" />
    </div>
  );
}
