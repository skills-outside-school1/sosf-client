import React from "react";
import GrantsHeroSection from "../Grants-Atoms/GrantsHeroSection";
import GrantsContentSection from "../Grants-Atoms/GrantsContentSection";
import GrantsCTASection from "../Grants-Atoms/GrantsCTASection";
const eligibilityIcon = "/assets/icons/grant Vector 3.png";

const SmallGrantsContainer = () => {
  const fundingDetails = [
    {
      icon: "/assets/icons/grant Vector.png",
      text: "Maximum NGN 1,000,000 in direct cash component",
    },
    {
      icon: "/assets/icons/grant Vector 2.png",
      text: "Remaining amount delivered through in-kind support, services, and essential training",
    },
  ];

  const infoBoxes = [
    {
      title: "Duration",
      description:
        "Up to three years of support, renewable annually based on performance and adherence to our monitoring and evaluation criteria. We believe in providing sustainable funding for sustainable operations.",
      bgColor: "bg-[#EFF1F3]",
      width: "w-full",
      padding: "p-6",
    },
    {
      title: "Collaborative Growth",
      description:
        "We prioritize shared agendas and actively listen to your needs, adapting our support to help you achieve your strategic goals.",
      bgColor: "bg-[#E5CC34]",
      width: "w-[90%]",
      padding: "p-6",
    },
    {
      title: "Learning & Adaptation",
      description:
        "We encourage you to use data to assess progress, learn from experiences (both successes and challenges), and continuously refine your approach.",
      bgColor: "bg-[#F7D3E5]",
      width: "w-[80%]",
      padding: "p-6",
    },
    {
      title: "Ready to Accelerate Your Impact?",
      description:
        "If your initiative is ready to grow and meets our criteria, we encourage you to apply. Applications open June 26th and close August 26th annually. Decisions communicated on October 1st, with disbursements from January 1st of the following year.",
      bgColor: "bg-white",
      width: "w-full",
      padding: "p-6",
    },
  ];

 const eligibilityCriteria = [
  {
    icon: eligibilityIcon,
    text: "Organizations with a minimum of 6 months of experience delivering relevant projects/initiatives in Sub-Saharan Africa",
  },
  {
    icon: eligibilityIcon,
    text: "Proven implementation of your program at least once with measurable results.",
  },
  {
    icon: eligibilityIcon,
    text: "A dedicated team of paid or unpaid volunteers, contractors, or support staff",
  },
  {
    icon: eligibilityIcon,
    text: "African-led/majority founding and management team",
  },
  {
    icon: eligibilityIcon,
    text: "Evidence of credible collaborations with other entities",
  },
  {
    icon: eligibilityIcon,
    text: "Directly responsible for the project's management (not an intermediary)",
  },
  {
    icon: eligibilityIcon,
    text: "Clear presence and operations in Sub-Saharan Africa",
  },
  {
    icon: eligibilityIcon,
    text: "Projects with clear alignment to SOSF themes and a robust scalability plan",
  },
  {
    icon: eligibilityIcon,
    text: "Strong letters of recommendation vouching for your credibility",
  },
  {
    icon: eligibilityIcon,
    text: "Designated organizational bank account for project funds and sound financial planning.",
  },
];


  return (
    <div className="min-h-screen bg-white font-inter">
      <GrantsHeroSection
        grantType="SMALL GRANTS"
        fundingAmount="Up to NGN 5,000,000 (or equivalent) per grant"
        fundingDetails={fundingDetails}
      />
      <GrantsContentSection
        infoBoxes={infoBoxes}
        eligibilityCriteria={eligibilityCriteria}
      />
      <div className="px-4 md:px-[4rem] lg:px-[7.6rem]">
        <GrantsCTASection />
      </div>
    </div>
  );
};

export default SmallGrantsContainer;