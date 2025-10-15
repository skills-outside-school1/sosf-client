"use client"

import { Dialog, DialogContent } from "@/components/structure-chart/Main/Main-Atoms/dialog"
import { Button } from "@/components/structure-chart/Main/Main-Atoms/button"
import { Card, CardContent } from "@/components/shared/cards/card"
import {
  Zap,
  Users,
  Share2,
  Trophy,
  Megaphone,
  FileText,
  X,
  BarChart3,
  Database,
  Award,
  Sprout,
  DollarSign,
  Network,
  Building2,
} from "lucide-react"
import { useState, useEffect } from "react"
import IframeModal from "../shared/modals/iframe-modal"


// forms
const accessDataFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFDataAccessRegistrationForm/formperma/tR1QuQRcSMrGhBum8rBKtcywUIs6hsf9UR4U7m7pW5Q"
const contributeDataFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFVolunteerAccessRequestForm/formperma/mT1MKvcPwJZJwotBeHYtC-xUaxrnitcQFkZ1vVArjmE"
const championFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFChampionRegistrationFormMainstreamingInstituti/formperma/vSi3fKfTzzTVYuqFS7xub3G8dP9t3LzzBUb-hv7LStY"
const connectorFormUrl = "https://forms.zohopublic.com/halimaabba/form/AdvocacythroughStakeholderEngagementCoalitionForma/formperma/53pjv9mULg_uCNa8WKo3_qS456VIhfLqofG_LbwbQ_w"
const awanessBuilderFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFAwarenessBuildingCollaborationInterestForm/formperma/whFqmCcBj0Fq9iZ1fjI7Z6HF9FKgGapLrz7JUMIshLA"
const policyAdvocateFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFPolicyRegulationAdvocacyCollaborationForm/formperma/mQOSdgt679TpPzssqcmXYontdRCmnN4auceoWIsuwYM"

// remaining forms ares
// const mobilizerFormUrl = "url here"
// const fundsFormUrl = "url here"
// const bridgeFormUrl = "url here"
// const headstartFormUrl = "url here"
// const grantsFormUrl = "url here"
// const osbOscFormUrl = "url here"
// const catalystFormUrl = "url here"
// 






export function ParticipateModal({ open, onOpenChange }) {
  const [isMobile, setIsMobile] = useState(false)
  // iframe modal states
    const [accessDataFormOpen, setAccessDataFormOpen] = useState(false)
    const [contributeDataFormOpen, setContributeDataFormOpen] = useState(false)
    const [championFormOpen, setChampionFormOpen] = useState(false)
    const [connectorFormOpen, setConnectorFormOpen] = useState(false)
    const [awarenessBuilderFormOpen, setAwarenessBuilderFormOpen] = useState(false)
    const [policyAdvocateFormOpen, setPolicyAdvocateFormOpen] = useState(false)




  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-7xl max-h-[90vh] sm:max-h-[95vh] overflow-hidden p-0 border-0 shadow-2xl">
        <div className="relative w-full h-full">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-50 rounded-full bg-white/95 backdrop-blur-sm p-1.5 sm:p-2 md:p-2.5 hover:bg-gray-100 transition-all duration-200 shadow-lg border border-gray-200"
            aria-label="Close"
          >
            <X size={isMobile ? 14 : 20} className="text-gray-600" />
          </button>

          <div className="overflow-y-auto max-h-[90vh] text-left max-h-[95vh] p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 pt-8 sm:pt-10 md:pt-12">
            {/* Data Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-left">
                PARTICIPATE IN DATA
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {/* Access Data */}
                <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="mx-auto p-3 p-4 md:p-5 lg:p-6 text-center h-full flex justify-center flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      Access Data (as User)
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Request access to SOSF reports and raw datasets
                    </p>
                    <Button className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] hover:scale-105 hover:shadow-xl transition-transform"  
                    onClick={() => setAccessDataFormOpen(true)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                {/* Contribute Data */}
                <Card className="bg-background_blue  border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Database className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      Contribute Data (as Contributor)
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Register your beneficiaries/org in the SOSF Social & Economic Register
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base "
                    onClick={() => setContributeDataFormOpen(true)}
                    >
                      Register →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Intervention Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-left">
                PARTICIPATE IN OUR INTERVENTION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {/* SOSF Bridge */}
                <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Bridge
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                   The SOSF Bridge Program is our flagship education intervention, equipping students in government secondary and tertiary institutions with the knowledge, skills, and attitudes to thrive in tomorrow's world
                    </p>
                    <Button className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] hover:scale-105 hover:shadow-xl transition-transform">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF Headstart */}
                <Card className="bg-background_blue border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Sprout className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Headstart – as a farmer (participant)
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                     Our SOSF Headstart Agropreneurs Program is transforming small-scale and vulnerable farming across Africa. This initiative boosts yield, income, and resilience for farmers of high-value crops like cassava and plantain
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF Grants */}
                <Card className="bg-background_blue border border-purple-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Grants
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      SOSF Grants provide targeted, non-programmatic funding to individuals and institutions poised to drive transformative change across Africa.
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF OSB/OSC */}
                <Card className="bg-background_blue  border border-orange-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center ">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Network className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF OSB/OSC
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      It is a series of flagship digital courses designed to equip existing and emerging entrepreneurs, job seekers, students, with the knowledge, skills, and attitude  needed to start, grow, their careers and sustain impactful ventures.
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF Funds */}
                <Card className="bg-background_blue border border-teal-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Building2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Funds
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      SSOSF Grants provide targeted, non-programmatic funding to individuals and institutions poised to drive transformative change across Africa.
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Advocacy Section */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-left">
                PARTICIPATE IN ADVOCACY
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mb-3 sm:mb-4 lg:mb-6">
                Choose your advocacy path and make a meaningful impact through various engagement opportunities
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {/* As a Catalyst */}
                <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Zap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Catalyst (Ambassador)
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                     Advocacy through Ambassadors as catalysts of change- as an alumni user (Ambassador) – Submit your initiative: ambassadors submit your initiative demonstrating how you are a catalyst for change
                    </p>
                    <Button className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Mobilizer */}
                <Card className="bg-background_blue border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Mobilizer
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Advocacy through Volunteer Mobilization (Mobilizer)- access reports on our volunteers + register your organization to engage our volunteers for your work
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Register →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Connector */}
                <Card className="bg-background_blue border border-purple-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Share2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Connector
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Advocacy through Stakeholder Engagement & Coalition Formation – as a user (Connector)- indicate interest to form a coalition with SOSF / invite SOSF to join a coalitionn
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base" 
                    onClick={() => setConnectorFormOpen(true)}
                    >
                      Join Now →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Champion */}
                <Card className="bg-background_blue border border-orange-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center ">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Champion
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Advocacy through mainstreaming / institutionalizing interventions (champion) register to support us to mainstream/institutionalise our interventions or the outcomes of interventions
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base" 
                    onClick={() => setChampionFormOpen(true)}
                    >
                      Be a Champion →
                    </Button>
                  </CardContent>
                </Card>

                {/* As an Awareness Builder */}
                <Card className="bg-background_blue border border-red-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Megaphone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As an Awareness Builder
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Advocacy for Awareness Building to co-host an event / strategic campaign / invite us to an event to speak
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base" 
                    onClick={() => setAwarenessBuilderFormOpen(true)}
                    >
                      Invite Now →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Policy Advocate */}
                <Card className="bg-background_blue border border-teal-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-4 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <FileText className="h-3 w-3 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Policy Advocate
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 leading-relaxed flex-grow">
                      Advocacy through Policy & Regulation Design & Implementation (Policy Advocate) to co-design a policy/regulation; or a manual for implementation
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base" 
                    onClick={() => setPolicyAdvocateFormOpen(true)}
                    >
                      Collaborate on policy →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

          {/* Iframe Modals */}
                <IframeModal
                  isOpen={accessDataFormOpen}
                  onClose={() => setAccessDataFormOpen(false)}
                  title="Access Data Form"
                  description="Fill out this form to access data as an organization."
                  iframeUrl={accessDataFormUrl}
                />
                <IframeModal
                  isOpen={contributeDataFormOpen}
                  onClose={() => setContributeDataFormOpen(false)}
                  title="Contribute Data Form"
                  description="Fill out this form to contribute data as an organization."
                  iframeUrl={contributeDataFormUrl}
                />
                <IframeModal
                  isOpen={championFormOpen}
                  onClose={() => setChampionFormOpen(false)}
                  title="Champion Form"
                  description="Fill out this form to become a champion."
                  iframeUrl={championFormUrl}
                />
                <IframeModal
                  isOpen={connectorFormOpen}
                  onClose={() => setConnectorFormOpen(false)}
                  title="Connector Form"
                  description="Fill out this form to become a connector."
                  iframeUrl={connectorFormUrl}
                />
                <IframeModal
                  isOpen={awarenessBuilderFormOpen}
                  onClose={() => setAwarenessBuilderFormOpen(false)}
                  title="Awareness Builder Form"  
                  description="Fill out this form to become an awareness builder."
                  iframeUrl={awanessBuilderFormUrl}
                />
                <IframeModal
                  isOpen={policyAdvocateFormOpen}
                  onClose={() => setPolicyAdvocateFormOpen(false)}
                  title="Policy Advocate Form"
                  description="Fill out this form to become a policy advocate."
                  iframeUrl={policyAdvocateFormUrl}
                />
      </DialogContent>
    </Dialog>
  )
}
