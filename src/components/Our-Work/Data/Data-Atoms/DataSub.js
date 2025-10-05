import { H2, P } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";
import React from "react";

const DataSub = () => {
  return (
    <div className="w-full h-auto px-2 md:px-14 lg:px-[110px] flex">
      <div className=" bg-governblue rounded-lg py-3 px-4 flex flex-col gap-3">
        <Image
          src="/assets/icons/data.svg"
          alt="data-icons"
          width={30}
          height={30}
        />

        <H2>Data</H2>
        <P>Evidence that drives Impact</P>
        <P>Data isn't just a tool. It's our compass.</P>
      </div>
      <div className=" ">
        <div></div>
      </div>
    </div>
  );
};

export default DataSub;
