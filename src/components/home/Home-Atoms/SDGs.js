import React from "react";
import SDGs from "@/components/shared/Atoms/Cards-Atoms/SDG-Cards";
import {
  faHandHoldingUsd,
  faUtensils,
  faBowlFood,
  faBook,
  faVenusMars,
  faBriefcase,
  faBalanceScale,
  faRecycle,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

export default function SDG() {
  const header = [
    {
      heading2: "SDGs WE Align With",
      // heading2: <span className="text-cyan">SDGs We  <span className="text-blue"> Align</span> <span className="text-yellow"> With </span> </span>,
    },
  ];
  const cardData = [
    {
      number: "1",
      title: "No Poverty",
      image: faHandHoldingUsd, // SDG 1 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-01-removebg-preview.png",
      subtitle: "Eradicating Poverty",
      content: "End poverty in all its forms everywhere.",
      link: "/sdgs",
    },
    {
      number: "2",
      title: "Zero Hunger",
      image: faBowlFood, // SDG 2 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-02-removebg-preview.png",
      subtitle: "Eliminating Hunger",
      content: "Achieve food security and promote sustainable agriculture.",
      link: "/sdgs",
    },
    {
      number: "4",
      title: "Quality Education",
      image: faBook, // SDG 4 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-04-removebg-preview.png",
      subtitle: "Ensuring Inclusive and Equitable Education",
      content:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      link: "/sdgs",
    },
    {
      number: "5",
      title: "Gender Equality",
      image: faVenusMars, // SDG 5 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-05-removebg-preview.png",
      subtitle: "Achieving Gender Equality",
      content: "Achieve gender equality and empower all women and girls.",
      link: "/sdgs",
    },
    {
      number: "8",
      title: "Decent Work and Economic Growth",
      image: faBriefcase, // SDG 8 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-08-removebg-preview.png",
      subtitle: "Promoting Sustainable Economic Growth",
      content:
        "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
      link: "/sdgs",
    },
    {
      number: "10",
      title: "Reduced Inequality",
      image: faBalanceScale, // SDG 10 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-10-removebg-preview.png",
      subtitle: "Reducing Inequality",
      content: "Reduce inequality within and among countries.",
      link: "/sdgs",
    },
    {
      number: "12",
      title: "Responsible Consumption & Production",
      image: faRecycle, // SDG 12 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-12-removebg-preview.png",
      subtitle: "Sustainable Consumption and Production",
      content: "Ensure sustainable consumption and production patterns.",
      link: "/sdgs",
    },
    {
      number: "17",
      title: "Partnerships for the Goals",
      image: faHandshake, // SDG 17 icon
      image:
        "/assets/images/icons/sdgs-icons/E_SDG_PRINT-17-removebg-preview.png",
      subtitle: "Strengthening Partnerships",
      content:
        "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
      link: "/sdgs",
    },
  ];

  return (
    <div className="flex flex-col   w-full  gap-y-5 ">
      <SubHero items={header} />
      <SDGs cards={cardData} aos="fade-up" />
    </div>
  );
}
