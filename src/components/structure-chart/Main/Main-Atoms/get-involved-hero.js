"use client"

import { Card, CardContent } from "@/components/shared/cards/card"
import { Button } from "@/components/structure-chart/Main/Main-Atoms/button"
import { Users, Handshake, DollarSign, Building, Laptop } from "lucide-react"
import Image from "next/image"

export default function GetInvolvedHero() {
  const cards = [
    {
      id: "volunteer",
      title: "Volunteer",
      icon: <Users className="w-5 h-5 text-gray-600" />,
      description:
        "Volunteer in our third-party data, advocacy & interventions efforts such as research, consultations, and more.",
      image: "/images/volunteer-person.jpg",
      buttonText: "Start as a Volunteer",
      buttonStyle: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    },
    {
      id: "partner",
      title: "Partner",
      icon: <Handshake className="w-5 h-5 text-gray-600" />,
      description:
        "As NGOs, private & public sector, partner with us to scale our impact, community or advocacy through co-design/delivery, consultancy, grants & more partner opportunities.",
      image: "/images/handshake-business.jpg",
      buttonText: "Learn More",
      buttonStyle: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    },
    {
      id: "invest",
      title: "Invest",
      icon: <DollarSign className="w-5 h-5 text-gray-600" />,
      description: "Liquid invest\nNon-liquid asset\nCash contribution\nService contribution",
      image: "/images/plant-coins.jpg",
      buttonText: "Learn More",
      buttonStyle: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    },
    {
      id: "govern",
      title: "Govern",
      icon: <Building className="w-5 h-5 text-gray-600" />,
      description: "Join the Advisors\nJoin the Team, Executive Council\nJoin the Board of Trustees",
      image: "/images/meeting-room.jpg",
      buttonText: "Learn More",
      buttonStyle: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    },
    {
      id: "participate",
      title: "Participate",
      icon: <Laptop className="w-5 h-5 text-gray-600" />,
      description: "Our Data\nOur Interventions\nOur Advocacy",
      image: "/images/laptop-people.jpg",
      buttonText: "Learn More",
      buttonStyle: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Get Involved</h1>
          <p className="text-lg text-gray-700 max-w-4xl">
            There are several made-to-measure solutions and ways for you to disrupt development and redefine
            philanthropy with us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-48 w-full">
                <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {card.icon}
                  <h3 className="text-lg font-semibold text-black">{card.title}</h3>
                </div>
                <div className="mb-6">
                  {card.description.split("\n").map((line, index) => (
                    <p key={index} className="text-sm text-gray-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
                <Button className={`w-full ${card.buttonStyle} font-medium text-sm py-2 rounded-md transition-colors`}>
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
