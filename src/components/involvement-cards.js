"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Users, DollarSign, Building, UserPlus } from "lucide-react"
import { ParticipateModal } from "./modals/participate-modal"
import { PartnerModal } from "./modals/partner-modal"
import { InvestModal } from "./modals/invest-modal"

export default function InvolvementCards() {
  const [participateModalOpen, setParticipateModalOpen] = useState(false)
  const [partnerModalOpen, setPartnerModalOpen] = useState(false)
  const [investModalOpen, setInvestModalOpen] = useState(false)

  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* First row - 3 cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {/* Volunteer Card */}
          <Card className="overflow-hidden bg-gray-50 border-0 flex-1 min-w-[300px] max-w-[400px]">
            <div className="aspect-[4/3] relative">
              <Image src="/assets/images/volunteer.png" alt="Volunteer" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <User className="h-4 w-4 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Volunteer</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Volunteer in our third-party data, advocacy & interventions efforts such as research, consultations, and
                more.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9]"
              >
                Start as a Volunteer
              </Button>
            </CardContent>
          </Card>

          {/* Partner Card */}
          <Card className="overflow-hidden bg-gray-50 border-0 flex-1 min-w-[300px] max-w-[400px]">
            <div className="aspect-[4/3] relative">
              <Image src="/assets/images/partner.png" alt="Partner" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Partner</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                As NGOs, private & public sector, partner with us to scale our impact, community or advocacy through
                co-design/delivery, consultancy, grants & more partner opportunities.
              </p>
              <Button
                variant="outline"
                className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9]"
                onClick={() => setPartnerModalOpen(true)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Invest Card */}
          <Card className="overflow-hidden bg-gray-50 border-0 flex-1 min-w-[300px] max-w-[400px]">
            <div className="aspect-[4/3] relative">
              <Image src="/assets/images/invest.png" alt="Invest" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-4 w-4 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Invest</h3>
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <p>Liquid invest</p>
                <p>Non-liquid asset</p>
                <p>Cash contribution</p>
                <p>Service contribution</p>
              </div>
              <Button
                variant="outline"
                className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9]"
                onClick={() => setInvestModalOpen(true)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Second row - 2 cards centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Govern Card */}
          <Card className="overflow-hidden bg-gray-50 border-0 flex-1 min-w-[300px] max-w-[400px]">
            <div className="aspect-[4/3] relative">
              <Image src="/assets/images/govern.jpg" alt="Govern" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Building className="h-4 w-4 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Govern</h3>
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-4">
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
          <Card className="overflow-hidden bg-gray-50 border-0 flex-1 min-w-[300px] max-w-[400px]">
            <div className="aspect-[4/3] relative">
              <Image src="/assets/images/participate.png" alt="Participate" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <UserPlus className="h-4 w-4 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Participate</h3>
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <p>Our Data</p>
                <p>Our Interventions</p>
                <p>Our Advocacy</p>
              </div>
              <Button
                variant="outline"
                className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9]"
                onClick={() => setParticipateModalOpen(true)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <ParticipateModal open={participateModalOpen} onOpenChange={setParticipateModalOpen} />
      <PartnerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} />
      <InvestModal open={investModalOpen} onOpenChange={setInvestModalOpen} />
    </section>
  )
}