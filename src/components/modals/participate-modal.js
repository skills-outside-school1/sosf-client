"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Share2, Trophy, Megaphone, FileText, X } from "lucide-react"
import { useState, useEffect } from "react"

export function ParticipateModal({ open, onOpenChange }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 sm:max-w-[90vw]">
        {/* Custom Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="fixed sm:absolute top-4 right-4 z-50 rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition-colors"
          aria-label="Close"
          style={{
            width: isMobile ? '48px' : '40px',
            height: isMobile ? '48px' : '40px'
          }}
        >
          <X size={isMobile ? 28 : 24} />
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          <DialogHeader className="text-center mb-6 sm:mb-8">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              PARTICIPATE IN ADVOCACY
            </DialogTitle>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Choose your advocacy path and make a meaningful impact through various engagement opportunities
            </p>
          </DialogHeader>

          {/* Updated responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-items-center">
            {/* As a Catalyst */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full max-w-sm md:max-w-full">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">As a Catalyst (Ambassador)</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  Advocacy through Ambassadors as catalysts of change - as an alumni (and Ambassador) - Submit your
                  initiative; ambassadors submit your initiative demonstrating how you are a catalyst for change
                </p>
                <Button className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-3 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
                  Get Started →
                </Button>
              </CardContent>
            </Card>

            {/* As a Mobilizer */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300 group w-full max-w-sm md:max-w-full">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-200 transition-colors">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">As a Mobilizer</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  Advocacy through Volunteer Mobilization (Mobilizer) - access reports on our volunteers + register your
                  organization to engage our volunteers for your work
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full font-semibold py-2 sm:py-3 text-xs sm:text-sm md:text-base">
                  Register →
                </Button>
              </CardContent>
            </Card>

            {/* As a Connector */}
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 hover:shadow-lg transition-all duration-300 group w-full max-w-sm md:max-w-full">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                    <Share2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">As a Connector</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  Advocacy through Stakeholder Engagement & Coalition Formation - as a key Connector, indicate interest
                  to form a coalition with SOSF / invite SOSF to join a coalition
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full font-semibold py-2 sm:py-3 text-xs sm:text-sm md:text-base">
                  Join Now →
                </Button>
              </CardContent>
            </Card>

            {/* As a Champion */}
            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:shadow-lg transition-all duration-300 group w-full max-w-sm md:max-w-full">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-200 transition-colors">
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">As a Champion</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  Advocacy through mainstreaming / institutionalizing interventions (champion) register to support us to
                  mainstream/institutionalise our interventions or the outcomes of interventions
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full font-semibold py-2 sm:py-3 text-xs sm:text-sm md:text-base">
                  Be a Champion →
                </Button>
              </CardContent>
            </Card>

            {/* As an Awareness Builder */}
            <Card className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 hover:shadow-lg transition-all duration-300 group w-full max-w-sm md:max-w-full">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors">
                    <Megaphone className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-red-600" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">As an Awareness Builder</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  Advocacy for Awareness Building to co-host an event / strategic campaign or to be an event to speak
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full font-semibold py-2 sm:py-3 text-xs sm:text-sm md:text-base">
                  Invite Now →
                </Button>
              </CardContent>
            </Card>

            {/* As a Policy Advocate */}
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 hover:shadow-lg transition-all duration-300 group w-full max-w-sm md:max-w-full">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-teal-200 transition-colors">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-teal-600" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">As a Policy Advocate</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  Advocacy through Policy & Regulation Design & Implementation (Policy Advocate) to co-design
                  policy/regulation, or a manual for implementation
                </p>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full font-semibold py-2 sm:py-3 text-xs sm:text-sm md:text-base">
                  Collaborate on policy →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}