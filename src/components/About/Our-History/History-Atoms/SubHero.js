import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H3 } from "@/components/shared/Atoms/Typography/typography";

export default function HistorySubHero() {
  const sub_data = [
    {
      heading2: "Our Journey",

      paragraph: (
        <apn className="flex flex-col gap-y-5  mt-7 ">
          <H3>A Decade of Disrupting Development</H3>
          From a NYSC community project to a pan-African force in education,
          entrepreneurship, and employability — here&apos;s how SOSF is
          redefining impact, year by year.
        </apn>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col justify-start items-start  px-2">
      <SubHero items={sub_data} className={`lg:w-full md:w-full w-full `} />
    </div>
  );
}
