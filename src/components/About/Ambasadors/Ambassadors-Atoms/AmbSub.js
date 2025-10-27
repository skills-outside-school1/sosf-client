import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Link from "next/link";

export default function AmbSub() {
  const hero_data = [
    {
      heading2: "Our Ambassadors",
      paragraph: (
        <span>
          At the Skills Outside School Foundation (SOSF), we recognize the
          invaluable role played by our dedicated ambassadors in advancing our
          mission. Our ambassadors are not merely representatives; they are
          catalysts for change, driving our initiatives forward and amplifying
          our impact. We believe in empowering them to be active agents of
          transformation, forging a path toward a better future for our 
          <Link
            href={`/our-target-audience`}
            className="underline text-blue"
          >
            {" "}
            target beneficiaries.
          </Link>
        </span>
      ),
    },
  ];
  return (
    <div className="w-full h-[fixed] px-2">
      <SubHero items={hero_data} className={`w-full md:w-full lg:w-4/5`} />
    </div>
  );
}
