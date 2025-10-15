import { Badge } from "@/components/structure-chart/Main/Main-Atoms/badge"
import { Button } from "@/components/structure-chart/Main/Main-Atoms/button"
import {ChevronRight } from "lucide-react"
import CustomIcon from "./CustomIcon"

export default function PartnerSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 text-partnerblue border-partnerblue rounded-full px-3 py-1 ">
            Partner
          </Badge>
          <p className="text-sm text-gray-600 mb-2">Join as a scale up impact partner</p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
              Are You an Individual with a Passion for Legacy and Social Impact?
            </h2>
            <Button variant="default" className="hidden md:flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
          {/* Who this is for */}
          <div className="bg-background_blue border-gray-200 flex flex-col items-center py-[25px] px-[15px] gap-[21px] w-[355px] h-[354px]">
             <CustomIcon src="/assets/icons/01.svg" alt="User Icon" className="w-6 h-6 text-blue-600" />
             <h1 className="text-lg">Who this is for</h1>
             <p className="text-sm leading-relaxed">
                Senior industry leaders, retirees, philanthropists, and purpose-driven individuals looking to create long-term, scalable impact aligned with their values.
              </p>
          </div>

          {/* What's Expected of You */}
          <div className="bg-background_blue border-gray-200 flex flex-col items-center p-[25px] px-[15px] gap-[21px] w-[355px] h-[354px]">
                <CustomIcon src="/assets/icons/02.svg" alt="Target Icon" className="w-6 h-6 text-blue-600" />
                <h1 className="text-lg">What's Expected of You</h1>
              <div className="flex justify-center items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check  Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Provide the vision, funding (or assets), and time (if desired)</p>
              </div>
              <div className="flex justify-center items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm"> Collaborate in reviews and final decisions</p>
              </div>
          </div>

          {/* What You Can Do */}
          <div className="bg-background_blue border-gray-200 flex flex-col items-center p-[25px] px-[15px] gap-[21px] w-[355px] h-[354px]">
                <CustomIcon src="/assets/icons/03.svg" alt="Lightbulb Icon" className="w-6 h-6 text-blue-600 mt-6 ml-6" />
                <h1 className="text-lg">What You Can Do</h1>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">
                 Launch your own social initiatives (scholarships, fellowships, mentorships, waqf funds, zakat administration, grant schemes, etc.)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">
                   Co-create and lead impactful projects with SOSF’s full backend support
                </p>
              </div>
          </div>

          {/* What SOSF Does for You */}
          <div className="bg-background_blue border-gray-200 flex flex-col items-center p-[15px] px-[15px] gap-[21px] w-[353px] h-[354px]">
                <CustomIcon src="/assets/icons/04.svg" alt="Support Icon"/>
                <h1 className="text-lg">What SOSF Does for You</h1>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Research and Strategy Design</p>
              </div>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Full Project Execution</p>
              </div>
              <div className="flex items-start  gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Marketing and Outreach</p>
              </div>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Marketing and Outreach</p>
              </div>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Impact Reporting and Analytics</p>
              </div>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Partnership Development</p>
              </div>
              <div className="flex items-start gap-4">
                <CustomIcon src="/assets/icons/check.svg" alt="Check Icon" className="w-[16px] h-[16px]" />
                <p className="text-sm">Financial Oversight and Resource Allocation</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
