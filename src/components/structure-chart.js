import { Button } from "@/components/ui/button"

export function StructureChart() {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">SOSF "Get Involved" Structure Chart</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-sm leading-relaxed">
          Welcome to the Skills Outside School Foundation (SOSF). Below is your personalized pathway to getting involved
          – whether as a partner, investor, participant, or governance contributor.
        </p>
        <Button className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9]">Explore the Chart</Button>
      </div>
    </section>
  )
}
