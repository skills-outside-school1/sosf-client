// import { H2, P } from "@/components/shared/Atoms/Typography/typography";
// import Image from "next/image";
// import React from "react";

// const DataSub = () => {
//   return (
//     <div className="w-full h-auto px-2 md:px-14 lg:px-[110px] flex">
//       <div className=" bg-governblue rounded-lg py-3 px-4 flex flex-col gap-3">
//         <Image
//           src="/assets/icons/data.svg"
//           alt="data-icons"
//           width={30}
//           height={30}
//         />

//         <H2>Data</H2>
//         <P>Evidence that drives Impact</P>
//         <P>Data isn't just a tool. It's our compass.</P>
//       </div>
//       <div className=" ">
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default DataSub;
import React from "react";
import { H1, H2, H3, P } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";

export default function DataSub() {
  const data = [
    {
      paragraph: (
        <ul className="list-disc flex flex-col gap-y-4 ">
          <li>
            Conduct full-cycle Monitoring, Evaluation & Learning (MEL) for all
            our interventions.
          </li>
          <li>
            Deliver third-party advisory services through our integrated,
            AI-powered systems.
          </li>
          <li>
            Lead strategic thought leadership and policy-influencing
            publications.
          </li>
          <b> Key Enabler: SOSF Social & Economic Register</b> A game-changing
          digital platform that captures real-time, multilingual, geo-tagged
          data on our direct and intermediary beneficiaries. It powers
          everything we do—from program design to advocacy, funding decisions,
          and reporting.
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full h-auto px-2 md:px-14 lg:px-[110px] flex">
      <div className=" bg-governblue rounded-xl py-3 px-4 flex flex-col gap-3">
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
}
