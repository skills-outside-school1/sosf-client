import { Button } from "@/components/structure-chart/Main/Main-Atoms/button"
import { Input } from "@/components/structure-chart/Main/Main-Atoms/input"
import { Card, CardContent } from "@/components/shared/cards/card"
import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

export function NewsletterSurvey() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleStartSurvey = () => {
    if (!email) return
    
    sessionStorage.setItem("quizEmail", email)
    router.push("/quiz")
  }

  return (
    <section className="w-full h-[fixed]  bg-gray-50 flex flex-col py-16">
      <div className="mx-auto pl-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            Let’s Get You the Right Pathway!
          </h2>
          <p className="text-lg text-gray-600">
            Answer a few quick questions and we will guide you to the perfect path that suits you. Start your journey with SOSF today!
          </p>
        </div>

          <Card className="bg-white border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Get news about what we are supporting and more by subscribing to our newsletter
              </p>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Enter your email address" className="flex-1 bg-white border-gray-200" />
                  <Button className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9]">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  By subscribing, you agree to <br />
                  <Link href="#" className="text-blue-600 hover:underline">
                    School's Privacy Policy
                  </Link>{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Skills Outside
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}