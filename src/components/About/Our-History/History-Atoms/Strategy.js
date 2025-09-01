import React from "react";
import ValueCards from "@/components/shared/Atoms/Cards-Atoms/Value-Cards";
import ContentfulTabs from "@/components/shared/Atoms/Tab-Atoms/ContenfulTabs";

const card_data = [
  {
    avatar:
      "https://www.wfp.org/sites/default/files/styles/media_embed/public/2024-02/WF1181130_20150519_YEM_Abdurahman-Hussein_7713.jpg?itok=0i37a3uJ",
    title: "Bridge Strategy:",
  },
  {
    avatar:
      "https://www.wfp.org/sites/default/files/styles/media_embed/public/2024-02/WF1181130_20150519_YEM_Abdurahman-Hussein_7713.jpg?itok=0i37a3uJ",
    title: "Headstart Strategy",
  },
  {
    avatar:
      "https://www.wfp.org/sites/default/files/styles/media_embed/public/2024-02/WF1181130_20150519_YEM_Abdurahman-Hussein_7713.jpg?itok=0i37a3uJ",
    title: "Lead4Change Strategy",
  },
  {
    avatar:
      "https://www.wfp.org/sites/default/files/styles/media_embed/public/2024-02/WF1181130_20150519_YEM_Abdurahman-Hussein_7713.jpg?itok=0i37a3uJ",
    title: "SOSF Grants Scheme Strategy",
  },
];

const tabs = [
  "Bridge Strategy",
  "Headstart Strategy",
  "Lead4Change Strategy",
  "SOSF Grants Scheme Strategy",
];

const works = {
  Bridge_Strategy: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpcLt8i49put1fC8KvBFwlx5VuKJROxaLjg&s",
      number: "01",
      content: (
        <span className=" ">
          The focus is on expansion in Nigeria across the following states:
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start px-2 md:px-8 mt-2">
            <li>Kaduna, Enugu, Lagos, Ogun, Ondo, Anambra, FCT</li>
          </ul>
        </span>
      ),
    },
  ],
  Headstart_Strategy: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9d_YWU6Q8_vkHvHgTqENmhbOpQPJn8cgm2g&s",
      number: "02",
      content: (
        <span className="  ">
          The focus is on expansion in Nigeria across the following states:
          <ul className=" list-decimal flex flex-col   h-[300px] overflow-y-auto  hide-scrollbar   gap-y-5 justify-start items-start px-8 md:px-8 mt-2">
            <li>Kaduna: Maize + Cassava</li>
            <li>Niger: Maize</li>
            <li>Oyo: Maize + Cassava</li>
            <li>Plateau: Maize</li>
            <li>Taraba: Maize + Cassava</li>
            <li>Delta: Maize + Cassava</li>
            <li>Bauchi: Maize</li>
            <li>Adamawa: Maize</li>
            <li>Gombe: Maize</li>
            <li>Benue: Maize + Cassava</li>
            <li>Cross River: Cassava only</li>
            <li>Enugu: Cassava only</li>
            <li>Imo: Cassava only</li>
            <li>Kogi: Cassava only</li>
            <li>Rivers: Cassava only</li>
          </ul>
        </span>
      ),
    },
  ],
  Lead4Change_Strategy: [
    {
      image:
        "https://www.usnews.com/object/image/00000160-d27c-deb3-a1eb-da7d96a90000/180107bcunflags-editorial.jpg?update-time=1515359998525&size=responsive640",
      number: "03",
      content: (
        <span className=" ">
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start px-2 md:px-8 mt-2">
            <li>
              We have reached the following countries through Lead4Change -
              Ethiopia, Ghana, South Africa, Nigeria, Kenya
            </li>
            <li>
              We are focused on expanding to other countries across the
              continent, with priority given to West, East & Southern Africa.
            </li>
          </ul>
        </span>
      ),
    },
  ],
  SOSF_Grants_Scheme_Strategy: [
    {
      image:
        "https://learnskills.ng/wp-content/uploads/2024/09/Business-grans-in-Nigeria-1.jpg",
      number: "04",
      content: (
        <span className=" ">
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start px-2 md:px-8 mt-2">
            <li>
              We are launching across the continent and providing an opportunity
              for academics & students in tertiary institutions, educational
              institutions & social enterprises/NGOs to apply for the various
              schemes.
            </li>
            <li>
              Priority is given to applications from West, East & Southern
              Africa.
            </li>
          </ul>
        </span>
      ),
    },
  ],
};

export default function Strategy() {
  return (
    <div className="w-full  bg-gradient-to-br from-secondary_blue via-gray-50  to-gray-50  flex flex-col gap-y-[3rem]  pt-5 justify-start items-start px-2 md:px-[4rem] lg:px-[8rem]">
      {/* <h3 className="text-gray-800 font-bold font-mont text-left lg:text-4xl">
      
      </h3>
      <ValueCards cards={card_data} className={``} /> */}

      <section className="strategy-switching  w-full">
        <h3 className="text-gray-800 font-mont  text-2xl     lg:text-3xl  font-bold  mb-8">
          Our Strategy{" "}
          <span className="text-secondary_blue font-normal ">|</span> The
          journey going forward{" "}
        </h3>
        <ContentfulTabs tabs={tabs} works={works} />
      </section>
    </div>
  );
}
