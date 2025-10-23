"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/structure-chart/Main/Main-Atoms/button"
import { Card, CardContent } from "@/components/shared/cards/card"
import { User, Users, DollarSign, Building, UserPlus, Mail } from "lucide-react"
import { PartnerModal } from "../../../modals/partner-modal"

import IframeModal from "../../../shared/modals/iframe-modal"   

import ReusableModal from "../../../shared/modals/reusablemodal"


export function InvolvementCards() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false)
  const [mailModalOpen, setMailModalOpen] = useState(false)
  // iframe
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false) 
   const [governModalOpen, setGovernModalOpen] = useState(false) 

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-10 py-10 justify-start items-start">
      {/* First row - 3 cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-start items-start px-4 w-full md:px-[4rem] lg:px-[7rem]">
         {/* Volunteer Card */}
        <Card className="overflow-hidden bg-gray-50 border-0 rounded-[24px] w-full h-full flex flex-col">
          <div className="aspect-[4/3] relative min-h-[150px]">
            <Image src="/assets/images/volunteer.png" alt="Volunteer" fill className="object-cover" />
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <User className="h-4 w-4 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Volunteer</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
              Volunteer in our third-party data, advocacy & interventions efforts such as research, consultations, and more.
            </p>
            <Button 
              variant="outline" 
              className="w-fit rounded-[15px]  border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] mt-auto"
              onClick={() => setVolunteerModalOpen(true)} 
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
            <div className="flex items-center justify-between">
              <Button
              variant="outline"
              className="w-fit bg-gray-50 text-blue"
              onClick={() => setPartnerModalOpen(true)}
            >
              Learn More
            </Button>
            <Mail onClick={() => setMailModalOpen(true)} className="inline-block ml-2 h-4 w-4 text-gray-700" />
             
            </div>
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
            <Link href="/get-involved/invest-forms">
            <Button
              variant="outline"
              className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] mt-auto">
            
              Learn More
            </Button>
            </Link>
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
            <div className="space-y-3 text-sm text-gray-600 mb-4 flex-1">
              <div 
                className="flex items-center justify-between cursor-pointer hover:text-gray-900"
                onClick={() => setGovernModalOpen(true)}
              >
                <span>Join the Advisors</span>
                <span className="text-gray-400">→</span>
              </div>
              <div 
                className="flex items-center justify-between cursor-pointer hover:text-gray-900"
                onClick={() => setGovernModalOpen(true)}
              >
                <span>Join the Team, Executive Council</span>
                <span className="text-gray-400">→</span>
              </div>
              <div 
                className="flex items-center justify-between cursor-pointer hover:text-gray-900"
                onClick={() => setGovernModalOpen(true)}
              >
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
            <Link href="/get-involved/participate">
            <Button
              variant="outline"
              className="w-full border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] mt-auto"
            >
              Learn More
            </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Empty spacer for grid consistency */}
        <div className="hidden lg:block opacity-0 pointer-events-none">
          {/* Empty spacer to maintain 3-column grid on desktop */}
        </div>
      </section>
      <PartnerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} />
      
      {/* New Volunteer Modal form*/}
      <IframeModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
        title="Volunteer Application Form"
        description="Join us by filling out the form below and become part of our volunteer community."
        iframeUrl="https://forms.zohopublic.com/halimaabba/form/VolunteerApplicationForm/formperma/WKRQtXOv2NVaAQbw77Rd_LTMyKSX2bYqp0BlYzvRRvg"
      />
        {/* Govern Modal */}
      <IframeModal
        isOpen={governModalOpen}
        onClose={() => setGovernModalOpen(false)}
        title="Advisory Council - Expression of Interest"
        description="Apply to join our Advisors, Executive Council, or Board of Trustees by filling out this form."
        iframeUrl="https://forms.zohopublic.com/halimaabba/form/SKILLSOUTSIDESCHOOLFOUNDATIONAdvisoryCouncilExpres/formperma/Ry1wfylvudjknxAgciW_0AUuzauE0WJShnwO1wkt_pE"
      />

      {/* Mail Modal */}
      <ReusableModal
        isOpen={mailModalOpen}
        onClose={() => setMailModalOpen(false)}
        className="text-blue"
      >
        <p className="font-semibold">partner.relations@skillsoutsideschool.com</p>
      </ReusableModal>
    </div>
  )
}