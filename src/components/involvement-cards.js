"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Users, DollarSign, Building, UserPlus } from "lucide-react"
import { ParticipateModal } from "./modals/participate-modal"
import { PartnerModal } from "./modals/partner-modal"
import { InvestModal } from "./modals/invest-modal"



export function InvolvementCards() {
  const [participateModalOpen, setParticipateModalOpen] = useState(false)
  const [partnerModalOpen, setPartnerModalOpen] = useState(false)
  const [investModalOpen, setInvestModalOpen] = useState(false)

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-10 py-10 justify-start items-start">
      {/* First row - 3 cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-start items-start px-4 w-full md:px-[4rem] lg:px-[7rem]">
        {/* Volunteer Card */}
        <Card className="overflow-hidden bg-gray-50 border-0 w-full h-full flex flex-col">
          <div className="aspect-[4/3] relative min-h-[150px]">
            <Image src="/assets/images/volunteer.png" alt="Volunteer" fill className="object-cover" />
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <User className="h-4 w-4 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Volunteer</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
              Volunteer in our third-party data, advocacy & interventions efforts such as research, consultations, and
              more.
            </p>
            <Button 
              variant="outline" 
              className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] mt-auto"
            >
              Start as a Volunteer
            </Button>
          </CardContent>
        </Card>

        {/* Partner Card */}
        <Card className="overflow-hidden bg-gray-50 border-0 w-full h-full flex flex-col">
          <div className="aspect-[4/3] relative min-h-[150px]">
            <Image src="/assets/images/partner.png" alt="Partner" fill className="object-cover" />
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-4 w-4 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Partner</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
              As NGOs, private & public sector, partner with us to scale our impact, community or advocacy through
              co-design/delivery, consultancy, grants & more partner opportunities.
            </p>
            <Button
              variant="outline"
              className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] mt-auto"
              onClick={() => setPartnerModalOpen(true)}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>

        {/* Invest Card */}
        <Card className="overflow-hidden bg-gray-50 border-0 w-full h-full flex flex-col">
          <div className="aspect-[4/3] relative min-h-[150px]">
            <Image src="/assets/images/invest.png" alt="Invest" fill className="object-cover" />
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="h-4 w-4 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Invest</h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1">
              <p>Liquid invest</p>
              <p>Non-liquid asset</p>
              <p>Cash contribution</p>
              <p>Service contribution</p>
            </div>
            <Button
              variant="outline"
              className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] mt-auto"
              onClick={() => setInvestModalOpen(true)}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Second row - 2 cards centered */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-start items-start px-4 w-full md:px-[4rem] lg:px-[7rem]">
        {/* Govern Card */}
        <Card className="overflow-hidden bg-gray-50 border-0 w-full h-full flex flex-col">
          <div className="aspect-[4/3] relative min-h-[150px]">
            <Image src="/assets/images/govern.png" alt="Govern" fill className="object-cover" />
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Building className="h-4 w-4 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Govern</h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1">
              <div className="flex items-center justify-between">
                <span>Join the Advisors</span>
                <span className="text-gray-400">→</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Join the Team, Executive Council</span>
                <span className="text-gray-400">→</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Join the Board of Trustees</span>
                <span className="text-gray-400">→</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Participate Card */}
        <Card className="overflow-hidden bg-gray-50 border-0 w-full h-full flex flex-col">
          <div className="aspect-[4/3] relative min-h-[150px]">
            <Image src="/assets/images/participate.png" alt="Participate" fill className="object-cover" />
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <UserPlus className="h-4 w-4 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Participate</h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1">
              <p>Our Data</p>
              <p>Our Interventions</p>
              <p>Our Advocacy</p>
            </div>
            <Button
              variant="outline"
              className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] mt-auto"
              onClick={() => setParticipateModalOpen(true)}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>

        {/* Empty spacer for grid consistency */}
        <div className="hidden lg:block opacity-0 pointer-events-none">
          {/* Empty spacer to maintain 3-column grid on desktop */}
        </div>
      </section>

      <ParticipateModal open={participateModalOpen} onOpenChange={setParticipateModalOpen} />
      <PartnerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} />
      <InvestModal open={investModalOpen} onOpenChange={setInvestModalOpen} />
    </div>
  )
}