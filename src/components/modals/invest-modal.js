"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, DollarSign, TrendingUp, Handshake, Gift } from "lucide-react"

export function InvestModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0 border-0 shadow-2xl">
        <div className="relative w-full h-full">
          <div className="overflow-y-auto max-h-[90vh] p-4 sm:p-6 md:p-8 pt-12 sm:pt-14">
            <DialogHeader className="text-center mb-6 sm:mb-8">
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Investment Opportunities
              </DialogTitle>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Join us in creating lasting social impact through various investment pathways. Choose the investment
                type that aligns with your goals and values.
              </p>
            </DialogHeader>

            <div className="space-y-6 sm:space-y-8">
              {/* Investment Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Liquid Assets Investment */}
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Liquid Assets</h3>
                    </div>
                    <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                      Invest through easily convertible assets including shares, cryptocurrency, cash, mutual funds,
                      bonds, ETFs, commodities, and derivatives. Perfect for flexible investment strategies.
                    </p>
                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 lg:mb-6">
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></div>
                        Shares & Cryptocurrency
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></div>
                        Mutual Funds & ETFs
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></div>
                        Bonds & Commodities
                      </div>
                    </div>
                    <Button
                      className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
                      onClick={() => window.open("https://forms.zoho.com/", "_blank")}
                    >
                      Invest in Liquid Assets <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Non-Liquid Assets Investment */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                    <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                        <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Non-Liquid Assets</h3>
                    </div>
                    <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                      Contribute through tangible and valuable assets including real estate, art, collectibles, business
                      equity, intellectual property, and natural resources for long-term impact.
                    </p>
                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 lg:mb-6">
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                        Real Estate & Art
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                        Business Equity & IP
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                        Collectibles & Resources
                      </div>
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base"
                      onClick={() => window.open("https://forms.zoho.com/", "_blank")}
                    >
                      Invest in Non-Liquid Assets <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Financial Contribution Types */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                  Direct Financial Contributions
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {[
                    { name: "Individual Donation", icon: Gift, color: "purple" },
                    { name: "US Credit", icon: DollarSign, color: "blue" },
                    { name: "Grant", icon: Handshake, color: "green" },
                    { name: "Loan", icon: TrendingUp, color: "orange" },
                    { name: "Subsidy", icon: Gift, color: "red" },
                  ].map((type, index) => (
                    <Card
                      key={index}
                      className={`bg-gradient-to-br from-${type.color}-50 to-${type.color}-100 border border-${type.color}-200 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    >
                      <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-${type.color}-100 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3`}
                        >
                          <type.icon className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-${type.color}-600`} />
                        </div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{type.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-4 sm:mt-6">
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 text-sm sm:text-base"
                    onClick={() => window.open("https://forms.zoho.com", "_blank")}
                  >
                    Make Financial Contribution <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* In-Kind Contributions */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                  In-Kind Resources & Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                        <Handshake className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
                        Service Contribution
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                        Contribute your time and expertise to our organization. As a volunteer, share your skills and
                        knowledge to help us achieve our goals.
                      </p>
                      <p className="text-xs text-orange-600 font-semibold mb-2 sm:mb-3 md:mb-4">SOSF + Pro bono</p>
                      <Button
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm"
                        onClick={() => window.open("https://forms.zoho.com/", "_blank")}
                      >
                        Contribute Services <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                        <Gift className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-teal-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
                        Product Contribution
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                        Donate your products and services to our organization. Help us achieve our goals through
                        tangible product contributions.
                      </p>
                      <p className="text-xs text-teal-600 font-semibold mb-2 sm:mb-3 md:mb-4">SOSF + Pro bono</p>
                      <Button
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm"
                        onClick={() => window.open("https://forms.zohopublic.com/product-contribution", "_blank")}
                      >
                        Contribute Products <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                        <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-indigo-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
                        Intellectual Contribution
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                        Your expertise is invaluable to us. As an expert, contribute your knowledge and intellectual
                        property to drive impact.
                      </p>
                      <p className="text-xs text-indigo-600 font-semibold mb-2 sm:mb-3 md:mb-4">SOSF + Expert</p>
                      <Button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm"
                        onClick={() => window.open("https://forms.zohopublic.com/intellectual-contribution", "_blank")}
                      >
                        Share Expertise <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
