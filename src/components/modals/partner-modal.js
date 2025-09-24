"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Building, X } from "lucide-react"


export function PartnerModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] sm:max-h-[95vh] overflow-hidden p-0 border-0 shadow-2xl">
        <div className="relative w-full h-full">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-50 bg-white/95 backdrop-blur-sm hover:bg-gray-100 shadow-lg border border-gray-200 w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>

          <div className="overflow-y-auto max-h-[90vh] sm:max-h-[95vh]">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px]">
              {/* Individual Partner */}
              <Card className="border-0 rounded-none bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 text-center h-full flex flex-col justify-center">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <User className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      An individual with passion for legacy and social impact?
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">Join as a scale up impact partner</p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-blue-100">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <span className="font-bold text-gray-900 text-base sm:text-lg">Individuals</span>
                    </div>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      SOSF Scale up - Impact - as an applicant
                    </p>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                    Get started
                  </Button>
                </CardContent>
              </Card>

              {/* Corporate Partner */}
              <Card className="border-0 rounded-none bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 text-center h-full flex flex-col justify-center">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Building className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      A corporate/institution looking to scale your social impact?
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                      Join as a strategic impact partner
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-green-100">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Building className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      <span className="font-bold text-gray-900 text-base sm:text-lg">Corporate</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">(NGOs, Private & Public Sector)</p>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      SOSF Strategic Impact partnership- as an applicant
                    </p>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
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
