import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Briefcase, Lightbulb, Building, Globe, ChevronRight } from "lucide-react"

export default function ParticipationSection() {
  const participantTypes = [
    {
      title: "K–12 Student (JSS3)",
      description: "Join our SOSF Scholarship Program",
      details: "Apply for SOSF Scholarship Program. Online SOSF for K-12 Courses. Online SOSF for K-12 Business",
      icon: GraduationCap,
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      title: "K–12 Student (SS1-SS3)",
      description: "Join our SOSF Scholarship Program",
      details: "Apply for SOSF Scholarship Program. Online SOSF for K-12 Courses. Online SOSF for K-12 Business",
      icon: GraduationCap,
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      title: "K–12 Teacher (JSS3)",
      description: "Join our SOSF Teacher Program",
      details: "Online SOSF for Teacher. Online SOSF for K-12 Business",
      icon: Users,
      color: "bg-purple-50 border-purple-200 text-purple-700",
    },
    {
      title: "K–12 Teacher (SS1-SS3)",
      description: "Join our SOSF Teacher Program",
      details: "Apply for SOSF Scholarship Program. Online SOSF for Teacher. Online SOSF for K-12 Business",
      icon: Users,
      color: "bg-orange-50 border-orange-200 text-orange-700",
    },
    {
      title: "Tertiary Student",
      description: "Apply for SOSF Scholarship Program",
      details: "Apply for SOSF Scholarship Program. Online SOSF for Teacher. Online SOSF for K-12 Business",
      icon: GraduationCap,
      color: "bg-pink-50 border-pink-200 text-pink-700",
    },
    {
      title: "Entrepreneur (Any age)",
      description: "Start with Online SOSF for Business",
      details: "Apply for SOSF Scholarship Program",
      icon: Lightbulb,
      color: "bg-yellow-50 border-yellow-200 text-yellow-700",
    },
    {
      title: "Professional (Any age)",
      description: "Start with Online SOSF for Business",
      details: "Apply for SOSF Scholarship Program",
      icon: Briefcase,
      color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    },
    {
      title: "Farmer (Smallholder)",
      description: "Join SOSF Impactful Experiences",
      details: "",
      icon: Users,
      color: "bg-teal-50 border-teal-200 text-teal-700",
    },
    {
      title: "School K-12",
      description: "Enroll multiple/cohorts in SOSF design thinking and entrepreneurship",
      details: "",
      icon: Building,
      color: "bg-red-50 border-red-200 text-red-700",
    },
    {
      title: "Informal Sector Worker (Other Industries)",
      description: "Join SOSF Impactful Experiences",
      details: "Apply for SOSF Scholarship Program. Online SOSF for Teacher. Online SOSF for K-12 Business",
      icon: Globe,
      color: "bg-cyan-50 border-cyan-200 text-cyan-700",
    },
    {
      title: "Intermediary Organization (NGO, Trust, Company etc)",
      description: "Apply for SOSF Scholarship Program. Online SOSF for Teacher. Online SOSF for K-12 Business",
      details: "",
      icon: Globe,
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
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
                      <p className="text-sm font-medium">{participant.description}</p>
                    </div>
                  </div>
                </CardHeader>
                {participant.details && (
                  <CardContent className="pt-0">
                    <p className="text-xs text-gray-600 leading-relaxed">{participant.details}</p>
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
