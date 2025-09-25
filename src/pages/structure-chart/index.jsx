import HeroChart from "@/components/structure-chart/hero-chart"
import PartnerSection from "@/components/structure-chart/partner-section"
import InvestmentSection from "@/components/structure-chart/investment-section"
import GovernanceSection from "@/components/structure-chart/governance-section"
import ParticipationSection from "@/components/structure-chart/participation-section"
import { Element } from "react-scroll"

export default function StructureChartPage() {
  return (
    <main className="min-h-screen">
      <Element name="hero-section">
        <HeroChart />
      </Element>

      <Element name="partner-section">
        <PartnerSection />
      </Element>
      <Element name="invest-section">
        <InvestmentSection />
      </Element>
      <Element name="govern-section">
        <GovernanceSection />
      </Element>
      <Element name="participate-section">
        <ParticipationSection />
      </Element>
    </main>
  )
}
