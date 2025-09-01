import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function GetInTouch() {
  const contents = [
    {
      heading2: "Get In Touch",
      paragraph:
        "Want to disrupt development & redefine Philanthropy, but don’t know how?",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-y-5 justify-start items-start ">
      <SubHero items={contents} />
      <section className="px-2   md:px-[4rem] lg:px-[8rem]">
        <Link href="/contact">
          <MaskButton
            buttontext="Get In Touch"
            className1={``}
            aos="flip-down"
          />
        </Link>
      </section>
    </div>
  );
}
