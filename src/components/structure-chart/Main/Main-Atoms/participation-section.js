import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/cards/card"
import { Badge } from "@/components/structure-chart/Main/Main-Atoms/badge"
import { GraduationCap, Users, Briefcase, Lightbulb, Building, Globe, ChevronRight } from "lucide-react"


// Zoho forms integration TODO: Add Zoho form links to the relevant participant types



export default function ParticipationSection() {
  const participantTypes = [
    {
      title: "K–12 Student (JSS3)",
      details: [
        "Start with SOSF Bridge Basic",
        "Apply for SOSF Funds OR go through:",
        "Online Skill Up for Career",
        "Online Skill Up for Businesses",
      ],
      icon: GraduationCap,
    },
    {
      title: "K–12 Student (SS1-SS3)",
      details: [
        "Start with SOSF Bridge Intermediate",
        "Apply for SOSF Funds OR go through:",
        "Online Skill Up for Career",
        "Online Skill Up for Businesses",
      ],
      icon: GraduationCap,
    },
    {
      title: "K–12 Teacher (JSS3)",
      details: [
        "Join as a Bridge Basic Teacher",
        "Apply for SOSF Funds OR go through:",
        "Online Skill Up for Career",
        "Online Skill Up for Businesses",

      ],
      icon: Users,

    },
    {
      title: "K–12 Teacher (SS1-SS3)",
      details: [
        "Join as a Bridge Intermediate Teacher",
        "Apply for SOSF Funds OR go through:",
        "Online Skill Up for Career",
        "Online Skill Up for Businesses",
      ],
      icon: Users,
    },
    {
      title: "Tertiary Student",
      details: [
        "Start with SOSF Bridge Advanced",
        "Apply for SOSF Funds OR go through:",
        "Online Skill Up for Career",
        "Online Skill Up for Businesses",

      ],
      icon: GraduationCap,
    },
    {
      title: "Entrepreneur (Any age)",
      details: [
        "Start with Online Skill Up for Business",
        "Apply for SOSF Enterprise Funds",
      ],
      icon: Lightbulb,
    },
    {
      title: "Professional (Any age)",
      details: [
        "Start with Online Skill Up for Business",
        "Apply for SOSF Scholarship Funds",
      ],
      icon: Briefcase,
    },
    {
      title: "Farmer (Smallholder)",
      details: [
        "Join SOSF Headstart Agropreneurs",
      ],
      icon: Users,
    },
    {
      title: "School K-12",
      details: [
        "Enroll teachers/students in SOSF Bridge Basic or Intermediate",
      ],
      icon: Building,
    },
    {
      title: "Informal Sector Worker (Other Industries)",
      details: [
        "Join SOSF Headstart (General)",
      ],
      icon: Globe,
    },
    {
      title: "Intermediary Organization (NGO, Trust, Company etc)",
      details: [
        "Apply for SOSF Grants(Micro, Small, Large)"
      ],
      icon: Globe,
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 text-participateorange border-participateorange rounded-full px-3 py-1">
            Participate
          </Badge>
          <p className="text-sm text-gray-600 mb-2">Are you a beneficiary? Start your journey</p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
              Are You a Beneficiary? Start Your Journey
            </h2>
            <ChevronRight className="w-6 h-6 text-blue-600 hidden md:block" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participantTypes.map((participant, index) => {
            const IconComponent = participant.icon
            return (
              <Card key={index} className={`bg-background_blue border-2 hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3 mb-2">
                    <IconComponent className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-base leading-tight mb-2">{participant.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                {participant.details && (
                  <CardContent className="space-y-2 pt-0">
                    {participant.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-governblue rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{detail}</p>
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
