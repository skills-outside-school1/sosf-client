import React from "react";
import GrantsHeroSection from "../Grants-Atoms/GrantsHeroSection";
import GrantsContentSection from "../Grants-Atoms/GrantsContentSection";
import GrantsCTASection from "../Grants-Atoms/GrantsCTASection";
import WorkNav from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
const eligibilityIcon = "/assets/icons/grant Vector 3.png";

const LargeGrantsContainer = () => {
  const fundingDetails = [
    {
      icon: "/assets/icons/grant Vector.png",
      text: "Maximum NGN 10,000,000 (or equivalent) in direct cash component.",
    },
    {
      icon: "/assets/icons/grant Vector 2.png",
      text: "Maximum NGN 10,000,000 (or equivalent) in direct cash component",
    },
    {
      icon: eligibilityIcon,
      text: "The remaining amount is dedicated to in-kind support, services, and strategic training, tailored to your unique needs",
    },
  ];

  const infoBoxes = [
    {
      title: "Duration",
      description:
        "Up to three years of foundational support, with potential for extension up to five years for truly exceptional and high-impact initiatives.",
      bgColor: "bg-[#EFF1F3]",
      width: "w-full",
      padding: "p-4",
    },
    {
      title: "Strategic Partnership",
      description:
        "We work together to clarify your strategic choices, supporting your overall systems change strategies rather than restricting to narrow project components.",
      bgColor: "bg-[#E5CC34]",
      width: "w-[90%]",
      padding: "p-4",
    },
    {
      title: "Impact Focus",
      description:
        "We prioritize outcomes and mutually-agreed programmatic milestones, fostering learning and adaptation to maximize your initiative's benefit",
      bgColor: "bg-[#F7D3E5]",
      width: "w-[80%]",
      padding: "p-4",
    },
    {
      title: "Ready to Lead the Charge?",
      description:
        "If your organization is ready to drive transformative change and meets our criteria, we invite you to take the first step. Applications open June 26th and close August 26th annually. Decisions communicated on October 1st, with disbursements from January 1st of the following year.",
      bgColor: "bg-white",
      width: "w-full",
      padding: "p-3",
    },
  ];

  const eligibilityCriteria = [
    {
      icon: eligibilityIcon,
      text: "Organizations with a minimum of 3 years of experience in education, employability, or entrepreneurship in Sub-Saharan Africa.",
    },
    {
      icon: eligibilityIcon,
      text: "Demonstrated implementation of your program at least once with measurable results",
    },
    {
      icon: eligibilityIcon,
      text: "A strong team of at least 3 paid individuals, complemented by volunteers or contractors",
    },
    {
      icon: eligibilityIcon,
      text: "100% African-led/majority founding and management team",
    },
    {
      icon: eligibilityIcon,
      text: "Evidence of meaningful collaborations with other entities.",
    },
    {
      icon: eligibilityIcon,
      text: "Directly responsible for the project's management (not an intermediary)",
    },
    {
      icon: eligibilityIcon,
      text: "Clear presence and operations in Sub-Saharan Africa.",
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
      text: "Designated organizational bank account for project funds and robust financial planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <GrantsHeroSection
        grantType="LARGE GRANTS"
        fundingAmount="Up to NGN 20,000,000 (or equivalent) per grant"
        fundingDetails={fundingDetails}
      />
      <GrantsContentSection
        infoBoxes={infoBoxes}
        eligibilityCriteria={eligibilityCriteria}
      />
      <GrantsCTASection />
      <WorkNav />
    </div>
  );
};

export default LargeGrantsContainer;
