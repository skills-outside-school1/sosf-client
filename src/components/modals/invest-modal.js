"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, DollarSign, TrendingUp, Handshake, Gift } from "lucide-react"


export function InvestModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto p-0">
        <div className="p-6 sm:p-8">
          <DialogHeader className="text-center mb-8">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Investment Opportunities
            </DialogTitle>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Join us in creating lasting social impact through various investment pathways. Choose the investment type
              that aligns with your goals and values.
            </p>
          </DialogHeader>

          <div className="space-y-8">
            {/* Investment Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Liquid Assets Investment */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Liquid Assets</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Invest through easily convertible assets including shares, cryptocurrency, cash, mutual funds,
                    bonds, ETFs, commodities, and derivatives. Perfect for flexible investment strategies.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Shares & Cryptocurrency
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Mutual Funds & ETFs
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Bonds & Commodities
                    </div>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    onClick={() => window.open("https://forms.zohopublic.com/liquid-assets", "_blank")}
                  >
                    Invest in Liquid Assets <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Non-Liquid Assets Investment */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Non-Liquid Assets</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Contribute through tangible and valuable assets including real estate, art, collectibles, business
                    equity, intellectual property, and natural resources for long-term impact.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Real Estate & Art
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Business Equity & IP
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Collectibles & Resources
                    </div>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                    onClick={() => window.open("https://forms.zohopublic.com/non-liquid-assets", "_blank")}
                  >
                    Invest in Non-Liquid Assets <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Financial Contribution Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Direct Financial Contributions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-10 h-10 bg-${type.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <type.icon className={`h-5 w-5 text-${type.color}-600`} />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">{type.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3"
                  onClick={() => window.open("https://forms.zohopublic.com/financial-contribution", "_blank")}
                >
                  Make Financial Contribution <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* In-Kind Contributions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">In-Kind Resources & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Service Contribution</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Contribute your time and expertise to our organization. As a volunteer, share your skills and
                      knowledge to help us achieve our goals.
                    </p>
                    <p className="text-xs text-orange-600 font-semibold mb-4">SOSF + Pro bono</p>
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => window.open("https://forms.zohopublic.com/service-contribution", "_blank")}
                    >
                      Contribute Services <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift className="h-8 w-8 text-teal-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Product Contribution</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Donate your products and services to our organization. Help us achieve our goals through tangible
                      product contributions.
                    </p>
                    <p className="text-xs text-teal-600 font-semibold mb-4">SOSF + Pro bono</p>
                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      onClick={() => window.open("https://forms.zohopublic.com/product-contribution", "_blank")}
                    >
                      Contribute Products <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Intellectual Contribution</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Your expertise is invaluable to us. As an expert, contribute your knowledge and intellectual
                      property to drive impact.
                    </p>
                    <p className="text-xs text-indigo-600 font-semibold mb-4">SOSF + Expert</p>
                    <Button
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                      onClick={() => window.open("https://forms.zohopublic.com/intellectual-contribution", "_blank")}
                    >
                      Share Expertise <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
