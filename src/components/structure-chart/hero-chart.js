"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Shield, Target } from "lucide-react"
import { Link } from "react-scroll"
import Hero from "@/components/home/Home-Atoms/Hero";

export default function HeroChart() {
  const paths = [
    {
      id: "partner",
      title: "Partner",
      description: "Join as an impact partner and create scalable social initiatives",
      icon: Users,
      color: "bg-blue-100 text-blue-700 border-blue-200", // Corrected (was likely misspelled)
      hoverColor: "hover:bg-blue-200",
    },
    {
      id: "invest",
      title: "Invest",
      description: "Contribute financial resources, assets, or in-kind support",
      icon: TrendingUp,
      color: "bg-pink-100 text-pink-700 border-pink-200", // Corrected (was likely misspelled)
      hoverColor: "hover:bg-pink-200",
    },
    {
      id: "govern",
      title: "Govern",
      description: "Shape strategy through advisory, board, or volunteer roles",
      icon: Shield,
      color: "bg-purple-100 text-purple-700 border-purple-200", // This one was correct
      hoverColor: "hover:bg-purple-200",
    },
    {
      id: "participate",
      title: "Participate",
      description: "Engage directly in programs, data sharing, or advocacy",
      icon: Target,
      color: "bg-yellow-100 text-yellow-700 border-yellow-200", // Corrected (was likely misspelled)
      hoverColor: "hover:bg-yellow-200",
    },
  ]
  return (
      <div className="w-full h-[fixed]">
         <Hero />
      <div className="relative z-10 max-w-6xl mx-auto pt-16 pb-8"> {/* Added top padding */}
        <div className="text-left mb-12"> {/* Increased bottom margin, removed my-12 */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">Which path suits you?</h1> {/* Increased bottom margin */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Reduced gap between cards */}
          {paths.map((path) => {
            const IconComponent = path.icon
            return (
              <Link
                key={path.id}
                to={`${path.id}-section`}
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer"
              >
                <Card
                  className={`${path.color} border-2 transition-all duration-300 cursor-pointer ${path.hoverColor} hover:shadow-lg hover:scale-105 h-full`}
                >
                  <CardContent className="p-5 text-center"> {/* Reduced padding */}
                    <div className="mb-3 flex justify-center"> {/* Reduced margin */}
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{path.title}</h3> {/* Reduced text size and margin */}
                    <p className="text-sm leading-relaxed text-pretty">{path.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}