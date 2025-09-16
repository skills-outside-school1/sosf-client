"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Building, X } from "lucide-react"

interface PartnerModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PartnerModal({ open, onOpenChange }: PartnerModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 bg-white/80 hover:bg-white shadow-sm"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Individual Partner */}
            <Card className="border-0 rounded-none bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8 lg:p-12 text-center h-full flex flex-col justify-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    An individual with passion for legacy and social impact?
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">Join as a scale up impact partner</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl mb-8 border border-blue-100">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <User className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-gray-900 text-lg">Individuals</span>
                  </div>
                  <p className="text-gray-600 font-medium">SOSF Scale up - Impact - as an applicant</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get started
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Partner */}
            <Card className="border-0 rounded-none bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 lg:p-12 text-center h-full flex flex-col justify-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    A corporate/institution looking to scale your social impact?
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">Join as a strategic impact partner</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl mb-8 border border-green-100">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Building className="h-5 w-5 text-green-600" />
                    <span className="font-bold text-gray-900 text-lg">Corporate</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">(NGOs, Private & Public Sector)</p>
                  <p className="text-gray-600 font-medium">SOSF Strategic Impact partnership- as an applicant</p>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
