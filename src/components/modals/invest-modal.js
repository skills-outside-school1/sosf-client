"use client"

import { useState } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/structure-chart/Main/Main-Atoms/dialog"
import { Card, CardContent } from "@/components/shared/cards/card"
import { HandCoins, Users, Briefcase } from "lucide-react" 
import CustomIcon from "../structure-chart/Main/Main-Atoms/CustomIcon";

// icons
const services = "/assets/icons/services.svg"
const products = "/assets/icons/products.svg"
const expertise = "/assets/icons/expertise.svg"


import IframeModal from "../shared/modals/iframe-modal"

const LiquidAssets = [
  { name: "Shares" },
  { name: "Commercial Paper" },
  { name: "Bonds- Corporate / Government (Local)" },
  { name: "Mutual Funds" },
  { name: "Bonds- Corporate / Government (Eurobond)" },
  { name: "Annuity Contracts for which distributions are in favour of the Trust" },
  { name: "Treasury Bills" },
  { name: "Waqf" },
  { name: "Fixed Deposits" },
]

const nonLiquidAssets = [
  { name: "Commodities" },
  { name: "Art" },
  { name: "Cryptocurrency / NFTs" },
  { name: "Movable Goods" },
  { name: "Royalties, Mineral Rights & Licenses" },
  { name: "Jewelry & Antiques" },
  { name: "Partnership interests in a private vehicle / listed entity" },
  { name: "Real-Estate (Land / Completed Property; Residential / Commercial / Industrial)" },
]

const financialContributionTypes = [
  { name: "Individual Donation" },
  { name: "CSR Capital" },
  { name: "Grant Funding" },
  { name: "Zakat" },
  { name: "Sadaqah" },
]

// NOTE: I've used generic icons from lucide-react. 
// You may need to replace 'Briefcase' and adjust the import for the exact icons from the image.
const inKindResources = [
    {
        icon: <CustomIcon src={products} className="h-6 w-6 text-gray-700" />,
        title: "In-Kind Resources – Products",
        description: "Contributing products or services from you or your organization at a subsidized rate, free, or adapting them to meet the needs of SOSF beneficiaries.",
        action: "organization"
    },
    {
        icon: <CustomIcon src={services} className="h-6 w-6 text-gray-700" />,
        title: "In-Kind Resources – Services",
        description: "Contributing products or services from you or your organization at a subsidized rate, free, or adapting them to meet the needs of SOSF Trust beneficiaries.",
        action: "organization"
    },
    {
        icon: <CustomIcon src={expertise} className="h-6 w-6 text-gray-700" />,
        title: "In-Kind Resources – Expertise",
        description: "Your network, knowledge or skills on a pro bono basis by joining the SOSF Advisory Council.",
        action: "network"
    }
]


export function InvestModal({ open, onOpenChange }) {
  // iframe URLs (logic unchanged)
  const organizationUrl =
    "https://forms.zohopublic.com/halimaabba/form/OrganizationalInvestmentForm/formperma/bZAnv1TTaI3S5-627rPQg90KnJLzx6y_9W-uSU0HrYo"

  const networkUrl =
    "https://forms.zohopublic.com/halimaabba/form/NetworkandEcosystemPartnerRegistrationForm/formperma/K7Xd3spLFHxNQjAOgEIfS0X-HGGbTyNT9fTgSIzmL84"

  // modal states (logic unchanged)
  const [investOrganizationModalOpen, setInvestOrganizationModalOpen] = useState(false)
  const [investNetworkModalOpen, setInvestNetworkModalOpen] = useState(false)

  const handleInKindClick = (action) => {
      if (action === "organization") {
          setInvestOrganizationModalOpen(true);
      } else if (action === "network") {
          setInvestNetworkModalOpen(true);
      }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0 border-0 shadow-2xl text-left bg-white">
        <div className="relative h-full">
          <div className="overflow-y-auto max-h-[90vh] p-6 md:p-10">
            <DialogHeader className="text-left mb-6 sm:mb-8">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Forms of Investment
              </DialogTitle>
              <p className="text-left text-base md:text-lg text-gray-600">
                Invest in any of the following assets, what would you like to contribute or invest?
              </p>
            </DialogHeader>

            <div className="space-y-8">
              {/* Liquid Assets */}
              <div className="text-left bg-background_blue p-4">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Liquid Assets
                    </h3>
                    <Link href="#" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-black transition-colors">
                      <span>See Form</span>
                      {/* Arrow Icon */}
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
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                <div className="flex flex-wrap gap-3 text-left">
                  {LiquidAssets.map((asset) => (
                    <div
                      key={asset.name}
                      className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md text-sm cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {asset.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Liquid Assets */}
              <div className="text-left bg-background_blue p-4">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Liquid Assets</h3>
                    <Link href="#" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-black transition-colors">
                      <span>See Form</span>
                      {/* Arrow Icon */}
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
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                <div className="flex flex-wrap gap-3 text-left">
                  {nonLiquidAssets.map((asset) => (
                    <div
                      key={asset.name}
                      className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md text-sm cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {asset.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Contribution Types */}
              <div className="text-left bg-background_blue p-4">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Invest Cash- Direct financial contributions in the form of
                </h3>
                    <Link href="#" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-black transition-colors">
                      <span>See Form</span>
                      {/* Arrow Icon */}
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
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                <div className="flex flex-wrap gap-3 text-left">
                  {financialContributionTypes.map((type) => (
                    <div
                      key={type.name}
                      className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md text-sm cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {type.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* In-Kind Contributions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
                  Invest in-kind resources (services, products & expertise)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {inKindResources.map((resource) => (
                    <Card 
                        key={resource.title}
                        className="bg-gray-100 border-none hover:shadow-md transition-shadow duration-300 cursor-pointer p-6"
                        onClick={() => handleInKindClick(resource.action)}
                    >
                      <CardContent className="p-0 text-center flex flex-col items-start gap-4">
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

        {/* Iframe Modals (logic unchanged) */}
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
      </DialogContent>
    </Dialog>
  )
}