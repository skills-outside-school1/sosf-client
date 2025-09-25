import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Building, DollarSign, Gift } from "lucide-react"

export default function InvestmentSection() {
  const liquidAssets = [
    "Shares",
    "Bonds (Local/Euro)",
    "Treasury Bills",
    "Commercial Paper",
    "Fixed Deposits",
    "Mutual Funds",
    "Annuities",
    "Waqf",
  ]

  const nonLiquidAssets = [
    "Cryptocurrency",
    "Art",
    "Real Estate",
    "Commodities",
    "NFTs",
    "Royalties",
    "Private Equity Interests",
  ]

  const cashContributions = ["Donations", "CSR Capital", "Grant Funding", "Zakat", "Sadaqah"]

  const inKindContributions = [
    {
      category: "Products",
      items: "Donated/adapted tools, platforms, services",
    },
    {
      category: "Services",
      items: "Free or subsidized tech, strategy, creative support",
    },
    {
      category: "Expertise",
      items: "Expertise",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 text-pink-600 border-pink-200">
            Invest
          </Badge>
          <p className="text-sm text-gray-600 mb-2">Invest what you can</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
            What Would You Like to Contribute?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Liquid Financial Assets */}
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-pink-600" />
                <CardTitle className="text-lg text-center">Liquid Financial Assets</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {liquidAssets.map((asset, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">{asset}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Non-Liquid Assets */}
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-6 h-6 text-pink-600" />
                <CardTitle className="text-lg text-center">Non-Liquid Assets</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {nonLiquidAssets.map((asset, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">{asset}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Cash Contribution */}
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-6 h-6 text-pink-600" />
                <CardTitle className="text-lg text-center">Cash Contribution</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {cashContributions.map((contribution, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">{contribution}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* In-Kind Contribution */}
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-6 h-6 text-pink-600" />
                <CardTitle className="text-lg text-center">In-Kind Contribution</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {inKindContributions.map((contribution, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{contribution.category}</p>
                      <p className="text-xs text-gray-600 mt-1">{contribution.items}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
