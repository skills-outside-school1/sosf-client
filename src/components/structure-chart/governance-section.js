import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Crown, HandCoins,Hand,Users  } from "lucide-react"

export default function GovernanceSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 text-governblue border-governblue rounded-full px-3 py-1">
            Govern
          </Badge>
          <p className="text-sm text-gray-600 mb-2">Join as a scale up impact partner</p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
              Want to Shape Strategy and Oversight?
            </h2>
            <Button variant="default" className="hidden text-black md:flex items-center gap-2 bg-governblue hover:bg-governblue/90 border-governblue rounded-full">
              Join the team
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Become an SOSF Advisor */}
          <Card className="bg-background_blue border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <HandCoins className="w-8 h-8 text-governblue" />
              </div>
              <CardTitle className="text-xl mb-4">Become an SOSF Advisor</CardTitle>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Who this is for</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Experts and leaders with deep knowledge in education, enterprise, finance, policy, development
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Role</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Provide insights, strategic advice, review initiatives, represent SOSF at engagements
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Become a Volunteer */}
          <Card className="bg-background_blue  border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <Hand className="w-8 h-8 text-governblue" />
              </div>
              <CardTitle className="text-xl mb-4">Become a Volunteer</CardTitle>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Types of Volunteer Roles</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-governblue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Program facilitation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-governblue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Mentorship</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-governblue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Event coordination</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-governblue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Content support</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-governblue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Training & curriculum delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Join the Board of Trustees */}
          <Card className="bg-background_blue border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-governblue" />
              </div>
              <CardTitle className="text-xl mb-4">Join the Board of Trustees</CardTitle>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Role</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Governance, fiduciary oversight, accountability
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What's expected of you</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Attendance at board meetings, approvals, strategic alignment
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
