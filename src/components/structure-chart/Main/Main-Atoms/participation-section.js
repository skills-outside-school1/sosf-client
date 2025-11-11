import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/shared/cards/card";
import { Badge } from "@/components/structure-chart/Main/Main-Atoms/badge";
import {
  GraduationCap,
  Users,
  Briefcase,
  Lightbulb,
  Building,
  Globe,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import CustomIcon from "./CustomIcon";
import Link from "next/link";

// icons
const Student_ss1 = "/assets/icons/ss1.svg"
const Student_jss3 = "/assets/icons/jss3.svg"
const endntrepreneur = "/assets/icons/enterprenuer.svg"
const teacherjss3 = "/assets/icons/teacherjss3.svg"
const teacherss1 = "/assets/icons/teacherss1.svg"
const tercherstd = "/assets/icons/tertiarystd.svg"
const intermediary = "/assets/icons/intermediary.svg"
const farmer = "/assets/icons/farmer.svg"
const professinal = "/assets/icons/professional.svg"
const school =  "/assets/icons/school.svg"
const informal =  "/assets/icons/informal.svg"



// --- Data for Carousel Slides ---

const participationSlides = [
  {
    id: 1,
    subtitle: "Our Interventions",
    title: "Are You a Beneficiary? Start Your Journey",
    type: "beneficiaryGrid",
    participants: [
      {
        title: "K–12 Student (JSS3)",
        details: ["Start with SOSF Bridge Basic", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: Student_jss3,
      },
      {
        title: "K–12 Student (SS1-SS3)",
        details: ["Start with SOSF Bridge Intermediate", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: Student_ss1,
      },
      {
        title: "K–12 Teacher (JSS3)",
        details: ["Join as a Bridge Basic Teacher", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: teacherjss3,
      },
      {
        title: "K–12 Teacher (SS1-SS3)",
        details: ["Join as a Bridge Intermediate Teacher", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: teacherss1,
      },
      {
        title: "Tertiary Student",
        details: ["Start with SOSF Bridge Advanced", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: tercherstd,
      },
      {
        title: "Entrepreneur (Any age)",
        details: ["Start with Online Skill Up for Business", "Apply for SOSF Enterprise Funds"],
        icon: endntrepreneur,
      },
      {
        title: "Professional (Any age)",
        details: ["Start with Online Skill Up for Business", "Apply for SOSF Scholarship Funds"],
        icon: professinal,
      },
      {
        title: "Farmer (Smallholder)",
        details: ["Join SOSF Headstart Agropreneurs"],
        icon:  farmer,
      },
      {
        title: "School K-12",
        details: ["Enroll teachers/students in SOSF Bridge Basic or Intermediate"],
        icon: school,
      },
      {
        title: "Informal Sector Worker (Other Industries)",
        details: ["Join SOSF Headstart (General)"],
        icon: informal,
      },
      {
        title: "Intermediary Organization (NGO, Trust, Company etc)",
        details: ["Apply for SOSF Grants(Micro, Small, Large)"],
        icon: intermediary,
      },
    ],
  },
  {
    id: 2,
    subtitle: "Participate",
    title: "Participate in Data & Advocacy",
    type: "advocacyCards",
    cards: [
      {
        title: "Data",
        icon: BarChart3,
        details: ["Access Data (as User)", "Contribute Data (as Contributor)"],
      },
      {
        title: "Advocacy",
        icon: Users,
        details: ["As a Catalyst (Ambassador)", "As a Mobilizer", "As a Connector"],
      },
    ],
  },
];

// --- Main Component ---
export default function ParticipationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = participationSlides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % participationSlides.length);
  };

  return (
    <section className="py-20 px-4 bg-white sm:mx-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="solid" className="mb-4  rounded-lg  border-[#E5CC34] px-4 py-1.5  text-2xl text-black border font-semibold">
            Participate
          </Badge>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              {currentSlide.title}
            </h2>
            <div
              onClick={handleNext}
              className="bg-slate-700/80 hover:bg-slate-700 p-2 rounded-full cursor-pointer hidden md:block"
            >
              <ChevronRight className="w-6 h-6 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <div>
          {currentSlide.type === "beneficiaryGrid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSlide.participants.map((participant, index) => {
                // const IconComponent = participant.icon;
                return (
                  <Card
                    key={index}
                    className="bg-background_blue border border-slate-700 hover:border-slate-600 rounded-2xl shadow-lg shadow-black/20 transition-all duration-300 flex flex-col p-4"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col items-center gap-4">
                        <CustomIcon src={participant.icon} className="w-8 h-8 text-indigo-400" />
                        <CardTitle className="text-lg font-semibold leading-tight">
                          {participant.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2.5 pt-0">
                      {participant.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm ">{detail}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {currentSlide.type === "advocacyCards" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {currentSlide.cards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Card
                    key={index}
                    className="bg-background_blue border border-bg-background_blue rounded-2xl shadow-lg shadow-black/20 flex flex-col p-8"
                  >
                    <CardHeader className="pb-6">
                      <div className="flex flex-col items-center gap-4">
                        <IconComponent className="w-8 h-8 text-indigo-400" />
                        <CardTitle className="text-xl font-semibold">
                          {card.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-3 pt-0">
                      {card.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                         <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <p className="text-md">{detail}</p>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter className="pt-8 pb-0">
                      <Link href="#" className="flex items-center gap-2 text-indigo-400 font-semibold hover:text-blue-300 transition-colors">
                        <span className="text-center">Learn More</span>
                        <ArrowRight className="w-4 h-4  -rotate-45" />
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}