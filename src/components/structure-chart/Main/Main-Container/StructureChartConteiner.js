import HeroChart from "../Main-Atoms/hero-chart";
import PartnerSection from "../Main-Atoms/partner-section";
import InvestmentSection from "../Main-Atoms/investment-section";
import GovernanceSection from "../Main-Atoms/governance-section";
import ParticipationSection from "../Main-Atoms/participation-section";
import { Element } from "react-scroll";
import WorkNav from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import MainSub from "@/components/Get-Involved/Main/Main-Atoms/MainSub";
import { NewsletterSurvey } from "@/components/Get-Involved/Main/Main-Atoms/newsletter-survey";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";

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
      <WorkNav />
      <Subscribe />
    </div>
  );
}
