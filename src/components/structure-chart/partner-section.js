import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, HandHeart, ChevronRight } from "lucide-react"

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Who this is for */}
          <Card className="bg-background_blue border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg">Who this is for</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
               Senior industry leaders, retirees, philanthropists, and purpose-drivenindividuals looking to create long-term, scalable impact aligned with their values.
              </p>
            </CardContent>
          </Card>

          {/* What's Expected of You */}
          <Card className="bg-background_blue border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg">What's Expected of You</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Provide the vision, funding (or assets), and time (if desired)</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700"> Collaborate in reviews and final decisions</p>
              </div>
            </CardContent>
          </Card>

          {/* What You Can Do */}
          <Card className="bg-background_blue border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg">What You Can Do</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">
                  Launch your own social initiatives (scholarships, fellowships, mentorships, seed funds, talent
                  administration, grant schemes, etc.)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">
                  Co-create and lead impactful projects with SOSF's full backend support
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What SOSF Does for You */}
          <Card className="bg-background_blue border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <HandHeart className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg">Wha`t SOSF Does for You</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Research and Strategy Design</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Full Project Execution</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Marketing and Outreach</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Impact Reporting and Analytics</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Partnership Development</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Financial Oversight and Resource Allocation</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
