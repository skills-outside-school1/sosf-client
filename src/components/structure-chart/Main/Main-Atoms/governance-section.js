import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/cards/card"
import { Badge } from "@/components/structure-chart/Main/Main-Atoms/badge"
import { Button } from "@/components/structure-chart/Main/Main-Atoms/button"
import {  CheckCircle2 } from "lucide-react"
import CustomIcon from "./CustomIcon";



// Shared icon 
const advisor = "/assets/icons/advisor.svg";
const board = "/assets/icons/advisor.svg"
const tertiarystd = "/assets/icons/tertiarystd.svg"



export default function GovernanceSection() {
  const advisorContent = [
    {
      title: "Who this is for",
      description: "Experts and leaders with deep knowledge in education, enterprise, finance, policy, development",
    },
    {
      title: "Role",
      description: "Provide insights, strategic advice, review initiatives, represent SOSF at engagements",
    },
  ]

  const volunteerRoles = [
    "Program facilitation",
    "Mentorship",
    "Event hosting",
    "Content support",
    "Training & curriculum delivery",
  ]

  const trusteesContent = [
    {
      title: "Role",
      description: "Governance, fiduciary oversight, accountability",
    },
    {
      title: "What's expected of you",
      description: "Attendance at board meetings, approvals, strategic alignment",
    },
  ]

  return (
    <section className="py-10 px-4 bg-white sm:mx-2 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge
            variant="outline"
            className="mb-4 text-governblue border-governblue rounded-lg px-4 py-1 font-medium"
          >
            Govern
          </Badge>
          <p className="text-md text-gray-600 mb-2">Join as a scale up impact partner</p>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight">
              Want to Shape Strategy and Oversight?
            </h2>
            <Button
              variant="default"
              className="hidden md:inline-flex bg-[#B7C8F4] text-blue-800 hover:bg-bg-[#B7C8F4] rounded-lg px-5 py-2.5 font-semibold"
            >
              Join the team
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Become an SOSF Advisor */}
          <Card className="bg-background_blue border border-gray-200/80 rounded-2xl shadow-sm p-4">
            <CardHeader className="text-center items-center pb-4">
              <CustomIcon src={advisor}  className="w-8 h-8 text-indigo-400"  />
              <CardTitle className="text-lg font-semibold text-gray-800">Become an SOSF Advisor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {advisorContent.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Become a Volunteer */}
          <Card className="bg-background_blue border border-gray-200/80 rounded-2xl shadow-sm p-4">
            <CardHeader className="text-center items-center pb-4">
              <CustomIcon src={board}  className="text-center w-8 h-8 text-indigo-400"  />
              <CardTitle className="text-lg font-semibold text-gray-800">Become a Volunteer</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-sm text-center mb-3">Types of Volunteer Roles</h4>
              <div className="space-y-3">
                {volunteerRoles.map((role, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />   
                    <p className="text-sm text-gray-600">{role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Join the Board of Trustees */}
          <Card className="bg-background_blue border border-gray-200/80 rounded-2xl shadow-sm p-4">
            <CardHeader className="text-center items-center pb-4">
              <CustomIcon src={tertiarystd}  className="w-8 h-8 text-indigo-400" />
              <CardTitle className="text-lg font-semibold text-gray-800">Join the Board of Trustees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trusteesContent.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Dashed Line Divider */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="border-t-2 border-blue-400 border-dashed"></div>
      </div>
    </section>
  )
}