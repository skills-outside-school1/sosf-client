"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/shared/cards/card";
import CustomIcon from "../../../structure-chart/Atoms/CustomIcon";
import CustomTooltip from "../../../shared/tooltip/CustomTooltip";

// icons
const services = "/assets/icons/services.svg";
const products = "/assets/icons/products.svg";
const expertise = "/assets/icons/expertise.svg";

import IframeModal from "../../../shared/modals/iframe-modal";

const LiquidAssets = [
  {
    name: "Shares",
    tooltip:
      "Ownership in a company; you earn when the company grows or pays dividends.",
  },
  {
    name: "Commercial Paper",
    tooltip:
      "Short-term loan given to companies, usually by other businesses or investors.",
  },
  {
    name: "Bonds- Corporate / Government (Local)",
    tooltip:
      "Loans to local governments or companies that pay interest over time.",
  },
  {
    name: "Mutual Funds",
    tooltip:
      "A pool of money from many people, managed by experts to invest in stocks, bonds, etc.",
  },
  {
    name: "Bonds- Corporate / Government (Eurobond)",
    tooltip:
      "Bonds issued in a currency different from the country where they're sold.",
  },
  {
    name: "Annuity Contracts for which distributions are in favour of the Trust",
    tooltip:
      "Loans to local governments or companies that pay interest over time.",
  },
  {
    name: "Treasury Bills",
    tooltip: "Short-term government debt; very safe and low return.",
  },
  {
    name: "Waqf",
    tooltip:
      "A charitable endowment in Islam; assets donated for religious or social good.",
  },
  {
    name: "Fixed Deposits",
    tooltip:
      "Money locked in a bank for a fixed time with a fixed interest rate.",
  },
];

const nonLiquidAssets = [
  {
    name: "Commodities",
    tooltip: "Raw materials like gold, oil, or wheat that are traded.",
  },
  {
    name: "Art",
    tooltip:
      "Investment in paintings or sculptures that may increase in value over time.",
  },
  {
    name: "Cryptocurrency / NFTs",
    tooltip:
      "Digital assets (like Bitcoin or digital art) that are traded online.",
  },
  {
    name: "Movable Goods",
    tooltip: "Physical items that can be moved, like vehicles or equipment.",
  },
  {
    name: "Royalties, Mineral Rights & Licenses",
    tooltip:
      "Earnings from intellectual property like books, music, or patents.",
  },
  {
    name: "Jewelry & Antiques",
    tooltip: "Valuable old or rare items that may appreciate over time.",
  },
  {
    name: "Partnership interests in a private vehicle / listed entity",
    tooltip: "Owning part of a public company, like a business partner.",
  },
  {
    name: "Real-Estate (Land / Completed Property; Residential / Commercial / Industrial)",
    tooltip:
      "Buying land or property to earn rental income or sell at a higher price.",
  },
];

const financialContributionTypes = [
  {
    name: "Individual Donation",
    tooltip:
      "Giving money directly to people or causes (can be viewed as social impact investment).",
  },
  {
    name: "CSR Capital",
    tooltip:
      "Funds set aside by companies for Corporate Social Responsibility projects.",
  },
  {
    name: "Grant Funding",
    tooltip:
      "Money given (not repaid) for a specific project, usually by governments or donors.",
  },
  {
    name: "Zakat",
    tooltip: "Mandatory charity in Islam, given annually to help the needy.",
  },
  {
    name: "Sadaqah",
    tooltip: "Voluntary charity in Islam, given anytime for any good cause.",
  },
];

const inKindResources = [
  {
    icon: <CustomIcon src={products} className="h-6 w-6 text-gray-700" />,
    title: "In-Kind Resources – Products",
    description:
      "Contributing products from you or your organization at a subsidized rate, free, or adapting them to meet the needs of SOSF beneficiaries.",
    action: "organization",
  },
  {
    icon: <CustomIcon src={services} className="h-6 w-6 text-gray-700" />,
    title: "In-Kind Resources – Services",
    description:
      "Contributing services from you or your organization at a subsidized rate, free, or adapting them to meet the needs of SOSF Trust beneficiaries.",
    action: "organization",
  },
  {
    icon: <CustomIcon src={expertise} className="h-6 w-6 text-gray-700" />,
    title: "In-Kind Resources – Expertise",
    description:
      "Contribute your rich & vast network, knowledge or skills on a pro bono basis to benefit our SOSF beneficiaries indirectly by joining the SOSF Advisors",
    action: "network",
  },
];

export default function InvestForms() {
  // iframe URLs (logic unchanged)
  const organizationUrl =
    "https://forms.zohopublic.com/halimaabba/form/OrganizationalInvestmentForm/formperma/bZAnv1TTaI3S5-627rPQg90KnJLzx6y_9W-uSU0HrYo";

  const networkUrl =
    "https://forms.zohopublic.com/halimaabba/form/NetworkandEcosystemPartnerRegistrationForm/formperma/K7Xd3spLFHxNQjAOgEIfS0X-HGGbTyNT9fTgSIzmL84";

  // modal states (logic unchanged)
  const [investOrganizationModalOpen, setInvestOrganizationModalOpen] =
    useState(false);
  const [investNetworkModalOpen, setInvestNetworkModalOpen] = useState(false);

  const handleInKindClick = (action) => {
    if (action === "organization") {
      setInvestOrganizationModalOpen(true);
    } else if (action === "network") {
      setInvestNetworkModalOpen(true);
    }
  };

  // Arrow icon component (unchanged)
  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  return (
    <div className="w-full flex justify-center py-10 md:py-16 bg-white">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-left bg-white">
        <div className="p-0">
          <div className="text-left my-[60px] sm:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Forms of Investment
            </h2>
            <p className="text-left text-base md:text-lg text-gray-600">
              Invest in any of the following assets, what would you like to
              contribute or invest?
            </p>
          </div>

          <div className="space-y-8">
            {/* Liquid Assets */}
            <div className="text-left bg-background_blue p-10 rounded-[24px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Liquid Assets
                </h3>
                <Link
                  href="#"
                  className="hidden md:flex items-center space-x-2 text-gray-700 font-medium hover:text-black transition-colors"
                >
                  <span>See Form</span>
                  <ArrowIcon />
                </Link>
              </div>

              {/* Liquid Assets Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 mb-6">
                {LiquidAssets.map((asset) => (
                  <CustomTooltip key={asset.name} content={asset.tooltip}>
                    <div className="bg-[#E1E7F3] text-gray-800 py-2 px-3 rounded-md text-sm w-fit transition-colors flex items-center justify-between">
                      <span className="flex-1">{asset.name}</span>
                      <span className="md:hidden ml-2">
                        <ArrowIcon />
                      </span>
                    </div>
                  </CustomTooltip>
                ))}
              </div>

              {/* Mobile See Form */}
              <div className="mt-6 md:hidden">
                <Link
                  href="#"
                  className="flex items-center justify-start space-x-2 text-gray-700 font-medium hover:text-black transition-colors"
                >
                  <span>See Form</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Non-Liquid Assets  */}
            <div className="text-left bg-background_blue p-10 rounded-[24px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Non-Liquid Assets
                </h3>
                <Link
                  href="#"
                  className="hidden md:flex items-center space-x-2 text-gray-700 font-medium hover:text-black transition-colors"
                >
                  <span>See Form</span>
                  <ArrowIcon />
                </Link>
              </div>

              {/* Non-Liquid Assets Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 mb-6">
                {nonLiquidAssets.map((asset) => (
                  <CustomTooltip key={asset.name} content={asset.tooltip}>
                    <div className="bg-[#E1E7F3] text-gray-800 py-2 px-3 rounded-md text-sm w-fit transition-colors flex items-center justify-between">
                      <span className="flex-1">{asset.name}</span>
                      <span className="md:hidden ml-2">
                        <ArrowIcon />
                      </span>
                    </div>
                  </CustomTooltip>
                ))}
              </div>

              {/* Mobile See Form */}
              <div className="mt-6 md:hidden">
                <Link
                  href="#"
                  className="flex items-center justify-start space-x-2 text-gray-700 font-medium hover:text-black transition-colors"
                >
                  <span>See Form</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Financial Contribution Types */}
            <div className="text-left bg-background_blue p-10 rounded-[24px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Invest Cash- Direct financial contributions in the form of
                </h3>
                <Link
                  href="#"
                  className="hidden md:flex items-center space-x-2 text-gray-700 font-medium hover:text-black transition-colors"
                >
                  <span>See Form</span>
                  <ArrowIcon />
                </Link>
              </div>

              {/* Financial Contributions */}
              <div className="flex flex-col md:flex-row gap-3 mb-6">
                {financialContributionTypes.map((type) => (
                  <CustomTooltip key={type.name} content={type.tooltip}>
                    <div className="bg-[#E1E7F3] text-gray-800 py-2 px-3 rounded-md text-sm w-fit transition-colors flex items-center justify-between">
                      <span className="flex-1">{type.name}</span>
                      <span className="md:hidden ml-2">
                        <ArrowIcon />
                      </span>
                    </div>
                  </CustomTooltip>
                ))}
              </div>

              {/* Mobile See Form */}
              <div className="mt-6 md:hidden">
                <Link
                  href="#"
                  className="flex items-center justify-start space-x-2 text-gray-700 font-medium hover:text-black transition-colors"
                >
                  <span>See Form</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* In-Kind Contributions */}
            <div>
              <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
                  Invest in-kind resources (services, products & expertise)
                </h3>
                <Link
                  href="#"
                  className="hidden md:flex items-center space-x-2 text-gray-700 font-medium hover:text-black transition-colors"
                >
                  <span>See Form</span>
                  <ArrowIcon />
                </Link>
              </div>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {inKindResources.map((resource) => (
                  <Card
                    key={resource.title}
                    className="bg-gray-100 border-none hover:shadow-md transition-shadow duration-300 cursor-pointer p-6"
                    onClick={() => handleInKindClick(resource.action)}
                  >
                    <CardContent className="h-[250px] py-5 px-10 text-center flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center gap-3">
                        <div>{resource.icon}</div>
                        <h4 className="font-bold text-gray-900 text-base">
                          {resource.title}
                        </h4>
                      </div>
                      <p className="text-sm text-center text-gray-600 leading-relaxed">
                        {resource.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Iframe Modals */}
      <IframeModal
        isOpen={investOrganizationModalOpen}
        onClose={() => setInvestOrganizationModalOpen(false)}
        title="Investment Form for Organizations"
        description="Fill out this form to invest as an organization."
        iframeUrl={organizationUrl}
      />

      <IframeModal
        isOpen={investNetworkModalOpen}
        onClose={() => setInvestNetworkModalOpen(false)}
        title="Network and Ecosystem Partner Registration Form"
        description="Fill out this form to register as a network or ecosystem partner."
        iframeUrl={networkUrl}
      />
    </div>
  );
}
