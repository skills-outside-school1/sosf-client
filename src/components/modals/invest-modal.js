"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, TrendingUp, HandCoins, Users, Gift } from "lucide-react"

import IframeModal from "../iframe-modal"

const LiquidAssets = [
  { name: "Shares" },
  { name: "Commercial Paper" },
  { name: "Bonds -Corporate/Government(Local)" },
  { name: "Mutual Funds" },
  { name: "Bonds - Corporate/Government (Eurobonds)" },
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

export function InvestModal({ open, onOpenChange }) {
  // iframe URLs
  const organizationUrl =
    "https://forms.zohopublic.com/halimaabba/form/OrganizationalInvestmentForm/formperma/bZAnv1TTaI3S5-627rPQg90KnJLzx6y_9W-uSU0HrYo"

  const networkUrl =
    "https://forms.zohopublic.com/halimaabba/form/NetworkandEcosystemPartnerRegistrationForm/formperma/K7Xd3spLFHxNQjAOgEIfS0X-HGGbTyNT9fTgSIzmL84"

  // modal states
  const [investOrganizationModalOpen, setInvestOrganizationModalOpen] = useState(false)
  const [investNetworkModalOpen, setInvestNetworkModalOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0 border-0 shadow-2xl text-left">
        <div className="relative h-full">
          <div className="overflow-y-auto max-h-[90vh] p-4 md:p-8 pt-12 sm:pt-14">
            <DialogHeader className="text-left mb-6 sm:mb-8">
              <DialogTitle className="text-xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Form of Investment
              </DialogTitle>
              <p className="text-left md:text-lg max-w-3xl mx-auto">
                Invest in any of the following assets, what would you like to contribute or invest?
              </p>
            </DialogHeader>

            <div className="space-y-6">
              {/* Liquid Assets */}
              <div className="text-left bg-background_blue p-4 rounded-lg">
                <h3 className="text-left md:text-1xl font-bold text-gray-900 mb-4">Liquid Assets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
                  {LiquidAssets.map((asset, index) => (
                    <Card
                      key={index}
                      className="w-fit bg-click_blue border border-gray-200 hover:shadow-lg"
                    >
                      <CardContent className="md:p-2 rounded-sm text-left">
                        <h4>{asset.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Non-Liquid Assets */}
              <div className="text-left bg-background_blue p-4 rounded-lg">
                <h3 className="text-left md:text-1xl font-bold text-gray-900 mb-4">Non-Liquid Assets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
                  {nonLiquidAssets.map((asset, index) => (
                    <Card
                      key={index}
                      className="w-fit bg-click_blue border border-gray-200 hover:shadow-lg"
                    >
                      <CardContent className="md:p-2 bg-click_blue rounded-sm text-left">
                        <h4 className="font-semibold text-gray-900">{asset.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Financial Contribution Types */}
              <div className="text-left bg-background_blue p-4 rounded-lg">
                <h3 className="text-left md:text-1xl font-bold text-gray-900 mb-4">
                  Invest in any of the following assets, what would you like to contribute or invest?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 text-left">
                  {financialContributionTypes.map((type, index) => (
                    <Card
                      key={index}
                      className="w-fit bg-click_blue border border-gray-200 hover:shadow-lg"
                    >
                      <CardContent className="md:p-2 bg-click_blue rounded-sm text-left">
                        <h4 className="font-semibold text-gray-900 text-xs">{type.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* In-Kind Contributions */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-left">
                  Invest in-kind resources (services, products & expertise)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Products */}
                  <Card className="bg-background_blue border border-blue hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                        <HandCoins className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
                        In-Kind Resources – Products
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                        Contributing products or services from you or your organization at a subsidized rate, free, or
                        adapting them to meet the needs of SOSF beneficiaries.
                      </p>
                      <Button
                        className="w-full bg-click_blue hover:bg-blue text-white py-1.5 sm:py-2 md:py-3"
                        onClick={() => setInvestOrganizationModalOpen(true)}
                      >
                        Contribute products
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Services */}
                  <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                        <HandCoins className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-teal-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
                        In-Kind Resources – Services
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                        Contributing services from you or your organization at a subsidized rate, free, or adapting them
                        to meet the needs of SOSF Trust beneficiaries.
                      </p>
                      <Button
                        className="w-full bg-click_blue hover:bg-blue text-white py-1.5 sm:py-2 md:py-3"
                        onClick={() => setInvestOrganizationModalOpen(true)}
                      >
                        Contribute Services
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Expertise */}
                  <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                        <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-indigo-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
                        In-Kind Resources – Expertise
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                        Your network, knowledge or skills on a pro bono basis by joining the SOSF Advisory Council.
                      </p>
                      <Button
                        className="w-full text-white py-1.5 bg-click_blue hover:bg-blue md:py-3 text-xs sm:text-sm"
                        onClick={() => setInvestNetworkModalOpen(true)}
                      >
                        Share Expertise
                      </Button>
                    </CardContent>
                  </Card>
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
      </DialogContent>
    </Dialog>
  )
}
