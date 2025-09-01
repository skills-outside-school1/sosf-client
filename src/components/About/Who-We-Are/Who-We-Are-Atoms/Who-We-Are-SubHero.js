import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Image from "next/image";

const hero_items = [
  {
    heading2: "Who We Are",
  },
];

export default function WhoWeAreSubHero() {
  return (
    <div className="w-full flex flex-col gap-y-8 justify-start items-start h-fixed  md:pb-4  ">
      <SubHero items={hero_items} className={`px-2`} />

      {/* <Image
        src="https://www.unicef.org/sites/default/files/styles/hero_extended/public/UN0678778_0.jpg.webp?itok=qDH2-y5q"
        alt="who-we-are-big-image-description"
        width={700}
        height={700}
        className="w-full      h-[500px]     md:h-auto object-cover   lg:w-[90%] lg:ml-auto"
      /> */}
      {/* <iframe
        className="w-full h-[500px] lg:w-[90%] lg:ml-auto"
        src="https://www.youtube.com/embed/0EF-DCXmJwU?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
    </div>
  );
}
