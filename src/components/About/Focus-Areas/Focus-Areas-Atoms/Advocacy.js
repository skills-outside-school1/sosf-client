import { H2 } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";
import React from "react";

const Advocacy = () => {
  const advocacyData = {
    title: "ADVOCACY",
    subtitle:
      "Theory of Change: Evidence-based advocacy drives lasting reform, not just charitable goodwill",
    description:
      "Institutionalizing Change Through Impact From Data to Disruption. We turn evidence into influence, our advocacy pillar amplifies voices, shifts mindsets, and drives systemic change through",
    items: [
      {
        icon: "/assets/images/icons/our-focus-icons/Vector.svg",
        title: "Ambassadors",
        text: "as Change Agents (e.g., GreenLITE, Skills on Wheels)",
      },
      {
        icon: "/assets/images/icons/our-focus-icons/Vector (1).svg",
        title: "Volunteer Mobilization",
        text: "Volunteer Mobilization (1,000+ field and strategic volunteers)",
      },
      {
        icon: "/assets/images/icons/our-focus-icons/Vector (2).svg",
        title: "Stakeholder Engagement",
        text: "(Govt, NGOs, Corporates)",
      },
      {
        icon: "/assets/images/icons/our-focus-icons/Vector (3).svg",
        title: "Institutionalizing Interventions ",
        text: "(e.g., Girls Empowerment in 300+ schools)",
      },
      {
        icon: "/assets/images/icons/our-focus-icons/Vector (4).svg",
        title: "Data-Led Advocacy",
        text: "(e.g., influencing Nigerian life skills curriculum)",
      },
      {
        icon: "/assets/images/icons/our-focus-icons/Vector (5).svg",
        title: "Policy & Regulatory",
        text: "Reform (e.g., CAMA 2020 amendment) ",
      },
      {
        icon: "/assets/images/icons/our-focus-icons/Vector (6).svg",
        title: "Strategic Communications ",
        text: "(Webinars, Media, Summits)",
      },
    ],
  };

  return (
    <div className="bg-[#D7E2FE] py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 md:px-[4rem] lg:px-[7.6rem] mb-4">
        {/* Left section */}
        <div>
          <H2>{advocacyData.title}</H2>
          <p className="my-5 font-semibold font-mont leading-7">
            {advocacyData.subtitle}
          </p>
          <span className=" font-inter">{advocacyData.description}</span>
        </div>

        {/* Right section */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Left column items */}
            <div className="grid grid-cols-1 gap-8">
              {advocacyData.items.slice(0, 4).map((item, index) => (
                <div className="flex gap-4" key={index}>
                  <Image
                    src={item.icon}
                    width={25}
                    height={25}
                    alt={item.title}
                    className="h-auto"
                  />
                  <div className=" font-inter">
                    <p className="font-semibold">{item.title}</p>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column items */}
            <div className="grid grid-cols-1 gap-8">
              {advocacyData.items.slice(4).map((item, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <Image
                    src={item.icon}
                    width={25}
                    height={25}
                    alt={item.title}
                    className="h-auto"
                  />
                  <div className=" font-inter">
                    <p className="font-semibold">{item.title}</p>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advocacy;
