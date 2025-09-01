import React from "react";
import Image from "next/image";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import Link from "next/link";

export default function ExploreAmbassadors() {
  return (
    <div className=" flex flex-col gap-y-5  w-full  md:flex-row gap-x-3 justify-start  items-center lg:pl-[8rem]  lg:ml-auto  lg:w-[83%] ">
      <section className="image-container  w-full h-[fixed] ">
        <Image
          src="https://media.licdn.com/dms/image/v2/C5622AQEz8QuOcXUT6Q/feedshare-shrink_800/feedshare-shrink_800/0/1654008104104?e=2147483647&v=beta&t=v0a7YkaTAjqOUqqoOObSFjavU0q_OiK3eb-ya9WJMQU"
          alt="ambassadors-page-avatar"
          width={600}
          height={600}
          className="object-contain  w-full h-auto   md:w-[400px] md:h-[400px] rounded-xl"
        />
      </section>
      <section className="image-container  w-full md:w-[90%] h-[fixed]  flex flex-col gap-y-5 justify-start items-start ">
        <h4 className="text-gray-800 font-mont  font-black    lg:text-2xl">
          Explore Our Ambassadors
        </h4>
        <p className="text-gray-700 font-inter font-normal   lg:text-lg">
          Discover the inspiring journey of our beneficiaries who have evolved
          into ambassadors, driving positive change and making a lasting impact
          in their communities. Learn how their experiences with the SOSF
          programs have empowered them to become leaders and catalysts for
          transformation.
        </p>
        <Link href="/our-ambassadors">
          <MaskButton buttontext={`Explore`} className={``} />
        </Link>
      </section>
    </div>
  );
}
