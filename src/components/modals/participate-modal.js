"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

export function ParticipateModal({ open, onOpenChange }) {
  const [isMobile, setIsMobile] = useState(false)

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
      <DialogContent className="max-w-7xl w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] max-h-[95vh] overflow-y-auto p-0 border-0 shadow-2xl">
        <button
          onClick={() => onOpenChange(false)}
          className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 rounded-full bg-white/90 backdrop-blur-sm p-2 sm:p-3 hover:bg-gray-100 transition-all duration-200 shadow-lg border border-gray-200"
          aria-label="Close"
          style={{
            width: isMobile ? "44px" : "48px",
            height: isMobile ? "44px" : "48px",
          }}
        >
          <X size={isMobile ? 20 : 24} className="text-gray-600" />
        </button>

        <div className="p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Data Section */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-left">
              PARTICIPATE IN DATA
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-start">
              {/* Access Data */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-blue-200 transition-colors">
                      <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    Access Data (as User)
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Request access to SOSF reports and raw datasets
                  </p>
                  <Button className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Contribute Data */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-green-200 transition-colors">
                      <Database className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    Contribute Data (as Contributor)
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Register your beneficiaries/org in the SOSF Social & Economic Register
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Register →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Intervention Section */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-left">
              PARTICIPATE IN OUR INTERVENTION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-start">
              {/* SOSF Bridge */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-blue-200 transition-colors">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    SOSF Bridge
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    The SOSF Bridge Program is our flagship education intervention, equipping students in government
                    secondary and tertiary institutions with the knowledge, skills, and attitudes to thrive in
                    tomorrow's world
                  </p>
                  <Button className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* SOSF Headstart */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-green-200 transition-colors">
                      <Sprout className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    SOSF Headstart – as a farmer (participant)
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Our SOSF Headstart Agropreneurs Program is transforming small-scale and vulnerable farming across
                    Africa. This initiative boosts yield, income, and resilience for farmers of high-value crops like
                    cassava and plantain
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Get Started →
                  </Button>
                </CardContent>
              </Card>

              {/* SOSF Grants */}
              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-purple-200 transition-colors">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    SOSF Grants
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    SOSF Grants provide targeted, non-programmatic funding to individuals and institutions poised to
                    drive transformative change across Africa.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Get Started →
                  </Button>
                </CardContent>
              </Card>

              {/* SOSF OSB/OSC */}
              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-orange-200 transition-colors">
                      <Network className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    SOSF OSB/OSC
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    It is a series of flagship digital courses designed to equip existing and emerging entrepreneurs,
                    job seekers, students, with the knowledge, skills, and attitude needed to start, grow, their careers
                    and sustain impactful ventures.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Get Started →
                  </Button>
                </CardContent>
              </Card>

              {/* SOSF Funds */}
              <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-teal-200 transition-colors">
                      <Building2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    SOSF Funds
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    SOSF Grants provide targeted, non-programmatic funding to individuals and institutions poised to
                    drive transformative change across Africa.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Get Started →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Advocacy Section */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-left">
              PARTICIPATE IN ADVOCACY
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mb-4 sm:mb-6">
              Choose your advocacy path and make a meaningful impact through various engagement opportunities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-start">
              {/* As a Catalyst */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-blue-200 transition-colors">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    As a Catalyst (Ambassador)
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Advocacy through Ambassadors as catalysts of change - as an alumni (and Ambassador) - Submit your
                    initiative; ambassadors submit your initiative demonstrating how you are a catalyst for change
                  </p>
                  <Button className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
                    Get Started →
                  </Button>
                </CardContent>
              </Card>

              {/* As a Mobilizer */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-green-200 transition-colors">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    As a Mobilizer
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Advocacy through Volunteer Mobilization (Mobilizer) - access reports on our volunteers + register
                    your organization to engage our volunteers for your work
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Register →
                  </Button>
                </CardContent>
              </Card>

              {/* As a Connector */}
              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-purple-200 transition-colors">
                      <Share2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    As a Connector
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Advocacy through Stakeholder Engagement & Coalition Formation - as a key Connector, indicate
                    interest to form a coalition with SOSF / invite SOSF to join a coalition
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Join Now →
                  </Button>
                </CardContent>
              </Card>

              {/* As a Champion */}
              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-orange-200 transition-colors">
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    As a Champion
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Advocacy through mainstreaming / institutionalizing interventions (champion) register to support us
                    to mainstream/institutionalise our interventions or the outcomes of interventions
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Be a Champion →
                  </Button>
                </CardContent>
              </Card>

              {/* As an Awareness Builder */}
              <Card className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-red-200 transition-colors">
                      <Megaphone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-red-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    As an Awareness Builder
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Advocacy for Awareness Building to co-host an event / strategic campaign or to be an event to speak
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Invite Now →
                  </Button>
                </CardContent>
              </Card>

              {/* As a Policy Advocate */}
              <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg transition-all duration-300 group w-full">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col">
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-teal-200 transition-colors">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    As a Policy Advocate
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow">
                    Advocacy through Policy & Regulation Design & Implementation (Policy Advocate) to co-design
                    policy/regulation, or a manual for implementation
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full font-semibold py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg">
                    Collaborate on policy →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
