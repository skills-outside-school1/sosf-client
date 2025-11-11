"use client"

import { Card, CardContent } from "@/components/shared/cards/card"
import { Users, Building2, Snowflake, UserStar,ChevronsDown } from "lucide-react"
import { Link } from "react-scroll"
import Hero from "@/components/home/Home-Atoms/Hero";
import MainSub from "@/components/Get-Involved/Main/Main-Atoms/MainSub";

export default function HeroChart() {
  return (
    <div className="w-full h-[fixed]">
      <Hero />
      <MainSub/>
      <div className="relative z-10 sm:mx-6 sm:mb-6 max-w-6xl mx-auto pt-16 pb-8">
        <div className="text-left mb-12">
          <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-balance">
            Which path suits you?
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Partner */}
          <Link
            to="partner-section"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <Card className="bg-partnerblue text-blue-700 border-blue-200 border-2 transition-all duration-300 cursor-pointer hover:bg-blue-200 hover:shadow-lg hover:scale-105 h-full">
              <CardContent className="p-5 text-left">
                <div className="mb-3 flex justify-start">
                  <Users className="w-8 h-8 text-[#0284C7]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Partner</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Join as an impact partner and create scalable social initiatives
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Invest */}
          <Link
            to="invest-section"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <Card className="bg-investpurple text-pink-700 border-pink-200 border-2 transition-all duration-300 cursor-pointer hover:bg-pink-200 hover:shadow-lg hover:scale-105 h-full">
              <CardContent className="p-5 text-left">
                <div className="mb-3 flex justify-start">
                  <Building2 className="w-8 h-8 text-[#EC549F]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Invest</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Contribute financial resources, assets, or in-kind support
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Govern */}
          <Link
            to="govern-section"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <Card className="bg-governblue border-purple-200 border-2 transition-all duration-300 cursor-pointer hover:bg-purple-200 hover:shadow-lg hover:scale-105 h-full">
              <CardContent className="p-5 text-left">
                <div className="mb-3 flex justify-left">
                  <Snowflake className="w-8 h-8 text-[#0047AB]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Govern</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Shape strategy through advisory, board, or volunteer roles
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Participate */}
          <Link
            to="participate-section"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <Card className="bg-participateorange text-yellow-700 border-yellow-200 border-2 transition-all duration-300 cursor-pointer hover:bg-yellow-200 hover:shadow-lg hover:scale-105 h-full">
              <CardContent className="p-5 text-left">
                <div className="mb-3 flex justify-left">
                  <UserStar className="w-8 h-8 text-[#E5CC34]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Participate</h3>
                <p className="text-sm leading-relaxed text-pretty">
                  Engage directly in programs, data sharing, or advocacy
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
