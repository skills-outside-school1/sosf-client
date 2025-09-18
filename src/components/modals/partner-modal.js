"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Building, X } from "lucide-react"
import { useState, useEffect } from "react"

export function PartnerModal({ open, onOpenChange }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl sm:max-w-[95vw] max-h-[95vh] overflow-y-auto p-0 gap-0">
        <div className="relative h-full">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close modal"
            className="absolute right-3 top-3 z-50 rounded-full bg-blue-100 p-3 hover:bg-gray-100 shadow-md border border-gray-200 transition-all duration-200"
            style={{
              width: isMobile ? "56px" : "48px",
              height: isMobile ? "56px" : "48px",
            }}
          >
            <X size={isMobile ? 28 : 24} className="text-gray-700" />
          </button>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Individual Partner */}
            <div className="overflow-y-auto lg:overflow-hidden">
              <Card className="border-0 rounded-none bg-gradient-to-br from-blue-50 to-indigo-50 h-full flex flex-col hover:shadow-lg transition-all">
                <CardContent className="p-6 sm:p-8 lg:p-10 xl:p-12 text-center flex flex-col justify-center flex-grow">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <User className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      An individual with passion for legacy and social impact?
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                      Join as a scale up impact partner
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl mb-6 sm:mb-8 border border-blue-100">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <span className="font-bold text-gray-900 text-base sm:text-lg">
                        Individuals
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      SOSF Scale up – Impact – as an applicant
                    </p>
                  </div>

                  <Button
                    className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-3 text-base sm:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
                  >
                    Get started
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Corporate Partner */}
            <div className="overflow-y-auto lg:overflow-hidden">
              <Card className="border-0 rounded-none bg-gradient-to-br from-green-50 to-emerald-50 h-full flex flex-col hover:shadow-lg transition-all">
                <CardContent className="p-6 sm:p-8 lg:p-10 xl:p-12 text-center flex flex-col justify-center flex-grow">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Building className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      A corporate/institution looking to scale your social impact?
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                      Join as a strategic impact partner
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl mb-6 sm:mb-8 border border-green-100">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <Building className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      <span className="font-bold text-gray-900 text-base sm:text-lg">
                        Corporate
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">
                      (NGOs, Private & Public Sector)
                    </p>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      SOSF Strategic Impact partnership – as an applicant
                    </p>
                  </div>

                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base sm:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
                  >
                    Get started
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
