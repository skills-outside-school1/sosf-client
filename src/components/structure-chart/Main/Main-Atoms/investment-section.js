import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/cards/card"
import { Badge } from "@/components/structure-chart/Main/Main-Atoms/badge"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/structure-chart/Main/Main-Atoms/button"
import CustomIcon from "./CustomIcon";

// icons 
const liquid = "/assets/icons/liquid.svg";
const nonliquid = "/assets/icons/nonliguid.svg"
const inkind  = "/assets/icons/inkind.svg"
const cash  = "/assets/icons/cash.svg"

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

  // Updated to better match the image where "Expertise" has no description
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
      items: "", // Empty string ensures no description is rendered
    },
  ]

  const investmentOptions = [
    {
      title: "Liquid Financial Assets",
      icon: <CustomIcon src={nonliquid} className="w-8 h-8 text-indigo-400" />,
      items: liquidAssets.map(item => ({ name: item })),
    },
    {
      title: "Non-Liquid Assets",
      icon: <CustomIcon src={liquid}  className="w-8 h-8 text-indigo-400" />,
      items: nonLiquidAssets.map(item => ({ name: item })),
    },
    {
      title: "Cash Contribution",
     icon: <CustomIcon src={cash}  className="w-8 h-8 text-indigo-400" />,
      items: cashContributions.map(item => ({ name: item })),
    },
  ]

  return (
    <section className="py-20 bg-white sm:mx-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-left">
          <Badge
            variant="outline"
            className="mb-4 text-black  text-2xl  border-pink-600 rounded-lg px-4 py-1 font-medium"
          >
            Invest
          </Badge>
    
          <p className="text-md text-gray-600 mb-2 text-xl ">Invest what you can</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

  <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 tracking-tight">
    What Would You Like to Contribute?
  </h2>

  <Link href="/get-involved/invest-forms">
    <Button
      variant="default"
      className="bg-[#B7C8F4] text-blue-800 hover:bg-[#B7C8F4] rounded-lg px-5 py-2.5 font-semibold w-full md:w-auto"
    >
      Invest Now
    </Button>
  </Link>

</div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Generic Asset Cards */}
          {investmentOptions.map(option => (
            <Card key={option.title} className="bg-background_blue border-0 rounded-xl shadow-sm p-4">
              <CardHeader className="items-center text-center pb-4">
                {option.icon}
                <CardTitle className="text-lg font-semibold text-gray-800 mt-2">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {option.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{item.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          {/* In-Kind Contribution Card (custom structure) */}
          <Card className="bg-background_blue border-0 rounded-xl shadow-sm p-4">
            <CardHeader className="items-center text-center pb-4">
               <CustomIcon src={inkind}  className="w-8 h-8 text-indigo-400" />,
              <CardTitle className="text-lg font-semibold text-gray-800 mt-2">In-Kind Contribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {inKindContributions.map((contribution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{contribution.category}</p>
                    {contribution.items && <p className="text-sm text-gray-600">{contribution.items}</p>}
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