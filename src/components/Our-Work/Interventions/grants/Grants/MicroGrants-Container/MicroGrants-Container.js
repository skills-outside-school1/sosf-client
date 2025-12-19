import React from "react";
import MicroGrantsHeroSection from "../MicroGrants-Atoms/MicroGrantsHeroSection";
import MicroGrantsOfferSection from "../MicroGrants-Atoms/MicroGrantsOfferSection";
import MicroGrantsProcessAndEligibilitySection from "../MicroGrants-Atoms/MicroGrantsProcessAndEligibilitySection";
import MicroGrantsCTASection from "../MicroGrants-Atoms/MicroGrantsCTASection";

const eligibilityIcon = "/assets/icons/grant Vector 3.png";
const HeroImage = "/assets/images/grants_sub.jpg";

const MicroGrantsContainer = () => {
  const heroParagraphs = [
    "Are you a passionate individual or a budding community-focused organization with a powerful idea to spark change at the grassroots level in Sub-Saharan Africa? Our Micro Grants are designed to empower foundational initiatives with direct funding and essential capacity building.",
    "At SOSF, we believe in the immense potential within local communities. We provide the critical initial boost needed to bring impactful ideas to life, focusing on fostering value, influence, and profitability in our partners. These grants are designed to be accessible and provide immediate, direct financial support complemented by a standardized package of in-kind resources.",
  ];

  const offers = [
    {
      title: "Direct Cash Funding",
      description:
        "Each Micro Grant is up to a maximum of NGN 500,000 / US$500 (or equivalent in applicable currency), provided entirely in cash. This crucial seed funding is designed to help you launch or significantly advance your grassroots initiative.",
    },
    {
      title: "Comprehensive In-Kind Support Package",
      description:
        "Beyond the cash, all micro-grantees receive a standard support package focused on building four core capabilities - Enterprise, Media, Learning & Development, and Finance",
    },
    {
      title: "Focus on Sustainability & Revenue Generation",
      description:
        "The grant aims to equip your initiative for long-term sustainability beyond the initial period. This includes training on utilizing various media marketing tools for local community fundraising, and brainstorming income-generating activities",
    },
  ];

  const processSteps = {
    leftColumn: [
      {
        title: "Grant Cycle Launch",
        description:
          "Every year, the grant cycle starts on June 26th, coinciding with the SOSF anniversary, marking the launch of our second call for partnerships",
        bgColor: "bg-[#F7D3E5]",
        height: "h-[240px]",
      },
      {
        title: "Decision Communication",
        description: "Decisions are made and communicated on October 1st",
        bgColor: "bg-[#95FAE3]",
        height: "h-[160px]",
      },
    ],
    rightColumn: [
      {
        title: "Application Closure",
        description: "Applications close on August 26th",
        bgColor: "bg-[#B7C8F4]",
      },
      {
        title: "Disbursements",
        description: "Disbursements occur from January 1st of the following year",
        bgColor: "bg-[#E5CC34]",
      },
      {
        title: "Activity Commencement",
        description:
          "Supported activities typically commence in March of the following year",
        bgColor: "bg-[#EFF1F3]",
      },
    ],
  };

  const eligibilityCriteria = [
    {
      icon: eligibilityIcon,
      text: "Sole Proprietorships / Business Names",
    },
    {
      icon: eligibilityIcon,
      text: "Trusts, Associations, Foundations, Societies",
    },
    {
      icon: eligibilityIcon,
      text: "Limited Partnerships, Limited Liability Partnerships",
    },
    {
      icon: eligibilityIcon,
      text: "Incorporated Trustees, Community-Based Organizations, Cooperatives, Charities",
    },
    {
      icon: eligibilityIcon,
      text: "Community-Based Educational Institutions (CBEIs)",
    },
    {
      icon: eligibilityIcon,
      text: "General Educational Institutions",
    },
    {
      icon: eligibilityIcon,
      text: "Companies Limited by Guarantee, Charitable Incorporated Organisations",
    },
    {
      icon: eligibilityIcon,
      text: "Unincorporated Associations",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <MicroGrantsHeroSection
        paragraphs={heroParagraphs}
        heroImage={HeroImage}
      />
      <div className="px-4 md:px-[4rem] lg:px-[7.6rem] py-12 md:py-16">
        <MicroGrantsOfferSection offers={offers} />
        <MicroGrantsProcessAndEligibilitySection
          introText="Applying for an SOSF Micro Grant is designed to be straightforward. We invite eligible organizations or individuals to engage with us to be considered for our Micro Grant program. A maximum of 20 Micro Grants shall be issued per year"
          processSteps={processSteps}
          eligibilityIntroText="We welcome applications from a diverse range of African-led entities with a clear presence and operations in Sub-Saharan Africa. This includes, but is not limited to"
          eligibilityCriteria={eligibilityCriteria}
        />
        <MicroGrantsCTASection
          description="If your initiative is ready to grow and meets our criteria, we encourage you to apply. Applications open June 26th and close August 26th annually. Decisions communicated on October 1st, with disbursements from January 1st of the following year."
        />
      </div>
    </div>
  );
};

export default MicroGrantsContainer;