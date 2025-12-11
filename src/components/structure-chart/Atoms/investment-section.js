import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/cards/card";
import { Badge } from "@/components/structure-chart/Atoms/badge";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/structure-chart/Atoms/button";
import CustomIcon from "./CustomIcon";

// icons
const liquid = "/assets/icons/liquid.svg";
const nonliquid = "/assets/icons/nonliguid.svg";
const inkind = "/assets/icons/inkind.svg";
const cash = "/assets/icons/cash.svg";

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
  ];

  const nonLiquidAssets = [
    "Cryptocurrency",
    "Art",
    "Real Estate",
    "Commodities",
    "NFTs",
    "Royalties",
    "Private Equity Interests",
  ];

  const cashContributions = [
    "Donations",
    "CSR Capital",
    "Grant Funding",
    "Zakat",
    "Sadaqah",
  ];

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
      items: "",
    },
  ];

  const investmentOptions = [
    {
      title: "Liquid Financial Assets",
      icon: <CustomIcon src={nonliquid} className="w-8 h-8 text-indigo-500" />,
      items: liquidAssets.map((item) => ({ name: item })),
    },
    {
      title: "Non-Liquid Assets",
      icon: <CustomIcon src={liquid} className="w-8 h-8 text-indigo-500" />,
      items: nonLiquidAssets.map((item) => ({ name: item })),
    },
    {
      title: "Cash Contribution",
      icon: <CustomIcon src={cash} className="w-8 h-8 text-indigo-500" />,
      items: cashContributions.map((item) => ({ name: item })),
    },
  ];

  return (
    <section className="px-4 py-16 mx-auto bg-white sm:px-6" id="invest-section">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-left">
          <Badge
            variant="outline"
            className="px-4 py-1.5 mb-6 text-2xl font-medium text-black border-pink-600 rounded-lg"
          >
            Invest
          </Badge>

          <p className="mb-4 text-lg text-gray-600">
            Invest what you can
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
              What Would You Like to Contribute?
            </h2>

            <Link href="/get-involved/invest-forms">
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-[#A5B9E9] rounded-lg px-6 py-3 font-semibold w-full md:w-auto whitespace-nowrap"
              >
                Invest Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid items-stretch grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Generic Asset Cards */}
          {investmentOptions.map((option) => (
            <Card
              key={option.title}
              className="flex flex-col h-full p-6 border shadow-sm bg-background_blue border-gray-200/80 rounded-xl"
            >
              <CardHeader className="items-center pb-6 space-y-4 text-center">
                <div className="p-3 rounded-full bg-indigo-50">
                  {option.icon}
                </div>
                <CardTitle className="text-lg font-semibold leading-tight text-gray-800">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0 space-y-3">
                {option.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed text-gray-700">{item.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          {/* In-Kind Contribution Card (custom structure) */}
          <Card className="flex flex-col h-full p-6 border shadow-sm bg-background_blue border-gray-200/80 rounded-xl">
            <CardHeader className="items-center pb-6 space-y-4 text-center">
              <div className="p-3 rounded-full bg-indigo-50">
                <CustomIcon src={inkind} className="w-8 h-8 text-indigo-500" />
              </div>
              <CardTitle className="text-lg font-semibold leading-tight text-gray-800">
                In-Kind Contribution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-0 space-y-4">
              {inKindContributions.map((contribution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-800">
                      {contribution.category}
                    </p>
                    {contribution.items && (
                      <p className="text-sm leading-relaxed text-gray-600">
                        {contribution.items}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}