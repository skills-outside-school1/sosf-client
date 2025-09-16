import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function LearnMoreSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Learn more about SOSF</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="p-2 h-8 w-8 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="p-2 h-8 w-8 bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gray-900 text-white border-0">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-white">Our History & Strategy</h3>
              <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                Explore our journey from inception to where we stand today, guided by a strategic vision aimed at
                empowering communities and creating sustainable impact.
              </p>
              <Link href="/our-history" passHref>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  Visit Page
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white border-0">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-white">Our Pillars</h3>
              <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                Discover the foundational principles that drive our work, shaping the framework of our interventions and
                guiding our mission to empower change.
              </p>
              <Link href="/our-pillars" passHref>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  Visit Page
              </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white border-0">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-white">Our Core Values</h3>
              <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                At the SOSF, we hold integrity, service, and collaboration as our fundamental core values. Our pledge to
                these principles defines our commitment to impactful change.
              </p>
              <Link href="/core-values" passHref>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  Visit Page
              </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white border-0">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-white">Our USPs</h3>
              <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                Skills Outside School Foundation has reached over 100,000 people across diverse regions, delivering
                unique solutions that address ground challenges.
              </p>
              <Link href="/our-usp" passHref>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  Visit Page
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
