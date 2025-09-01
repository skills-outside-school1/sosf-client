import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import Link from "next/link";

export default function PartSubHero() {
  const sub_hero = [
    {
      heading2: "Our Collaborations ",
      paragraph: (
        <span className=" ">
          Collaboration is vital since no single entity can address global
          challenges in isolation. By merging resources, knowledge, and
          innovations across various sectors, and through governments, NGOs, and
          businesses, we can amplify our impact & fast-track the attainment of
          the SDGs for a sustainable future for all. We&apos;ve historically
          joined hands with prominent organizations and individuals in alignment
          with the 17th SDG, emphasizing Investments for global progress in
          delivering our mandate and furthering the objectives and goals of
          organizations’ where their mandate aligns with ours.
        </span>
      ),
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col  gap-y-4 justify-start items0start ">
      <SubHero
        items={sub_hero}
        className={`w-full md:w-full lg:w-full  px-2 `}
      />
      <section className="px-2 md:px-[4rem] lg:px-[7rem]">
        <Link href="/get-involved">
          <MaskButton buttontext={`Get Involved`} className={``} />
        </Link>
      </section>
    </div>
  );
}
