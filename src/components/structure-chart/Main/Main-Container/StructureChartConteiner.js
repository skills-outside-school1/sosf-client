import HeroChart from "../Main-Atoms/hero-chart"
import PartnerSection from "../Main-Atoms/partner-section"
import InvestmentSection from "../Main-Atoms/investment-section"
import GovernanceSection from "../Main-Atoms/governance-section"
import ParticipationSection from "../Main-Atoms/participation-section"
import { Element } from "react-scroll"

export default function StructureChartContainer() {
  return (
      <div className="w-full h-[fixed]">
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
        </div>
  )
}
