"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Building, X } from "lucide-react"
import IframeModal from "../iframe-modal"

export function PartnerModal({ open, onOpenChange }) {
  // iframe URLs (just the src, not full <iframe> markup)
  const individualUrl =
    "https://forms.zohopublic.com/halimaabba/form/SOSFScaleupimpactEOIFormIndividual/formperma/_6dt-f6LUe1dKRsucb6PyuCieYiSGeCO3pF2wtMjDmo"
  const corporateUrl =
    "https://forms.zohopublic.com/halimaabba/form/241CORPORATEINNOVATIVEPARTNERSHIPSTRATEGICIMPACTPA/formperma/nHhsgIjr47PijzuUaC5aM2tK1Lp0jX8nHgK9IoW3d2s"

  // Modal states
  const [individualModalOpen, setIndividualModalOpen] = useState(false)
  const [corporateModalOpen, setCorporateModalOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] overflow-hidden p-0 border-0 shadow-2xl">
        <div className="relative w-full h-full">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-white/95 backdrop-blur-sm hover:bg-gray-100 shadow-lg border border-gray-200 w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-3 w-3" />
          </Button>

          <div className="overflow-y-auto max-h-[60vh] sm:max-h-[95vh]">
            <div className="grid grid-cols-1 gap-4 m-8 lg:grid-cols-2 min-h-[350px] sm:min-h-[500px]">
              {/* Individual Partner */}
              <Card className="border-0 bg-background_blue rounded-2xl">
                <CardContent className="p-4 md:p-8 lg:p-12 text-left gap-4 h-full flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    An individual with passion for legacy and social impact?
                  </h3>
                  <p className="text-gray-600 text-base">Join as a scale up impact partner</p>

                  <div className="flex items-center justify-start gap-3 mb-3">
                    <User className="h-4" />
                    <span className="font-bold text-base">Individuals</span>
                  </div>

                  <p className="text-gray-600 font-medium text-sm">
                    SOSF Scale up - Impact - as an applicant
                  </p>

                  <div
                    className="flex items-center text-blue justify-start cursor-pointer hover:text-gray-900"
                    onClick={() => setIndividualModalOpen(true)}
                  >
                    <span>Get Started</span>
                  </div>
                </CardContent>
              </Card>

              {/* Corporate Partner */}
              <Card className="border-0 rounded-none bg-background_blue rounded-2xl">
                <CardContent className="p-4 md:p-8 lg:p-12 text-left gap-4 h-full flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    A corporate/institution looking to scale your social impact?
                  </h3>
                  <p className="text-gray-600 text-base">Join as a strategic impact partner</p>

                  <div className="flex items-center justify-start gap-3 mb-3">
                    <Building className="h-4" />
                    <span className="font-bold text-gray-900 text-base">Corporate</span>
                  </div>
                  <p className="text-xs text-gray-600">(NGOs, Private & Public Sector)</p>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">
                    SOSF Strategic Impact partnership - as an applicant
                  </p>

                  <div
                    className="flex items-center justify-start text-blue cursor-pointer hover:text-gray-900"
                    onClick={() => setCorporateModalOpen(true)}
                  >
                    <span>Get Started</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Individual Iframe Modal */}
          <IframeModal
            isOpen={individualModalOpen}
            onClose={() => setIndividualModalOpen(false)}
            title="SOSF Scale up impact EOI Form (Individual)"
            description="Please complete the form below to apply as an Individual Impact Partner."
            iframeUrl={individualUrl}
          />

          {/* Corporate Iframe Modal */}
          <IframeModal
            isOpen={corporateModalOpen}
            onClose={() => setCorporateModalOpen(false)}
            title="SOSF Strategic Impact partnership EOI Form (Corporate)"
            description="Please complete the form below to apply as a Corporate Impact Partner."
            iframeUrl={corporateUrl}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
