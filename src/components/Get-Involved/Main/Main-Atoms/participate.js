"use client";

import { Button } from "@/components/structure-chart/Atoms/button";
import { Card, CardContent } from "@/components/shared/cards/card";
import {
  Zap,
  Users,
  Share2,
  Trophy,
  Megaphone,
  FileText,
  X,
  BarChart3,
  Database,
  Award,
  Sprout,
  DollarSign,
  Network,
  Building2,
} from "lucide-react";
import { useState, useEffect } from "react";
import IframeModal from "../../../shared/modals/iframe-modal";

// forms (unchanged)
const accessDataFormUrl =
  "https://forms.zohopublic.com/halimaabba/form/SOSFDataAccessRegistrationForm/formperma/tR1QuQRcSMrGhBum8rBKtcywUIs6hsf9UR4U7m7pW5Q";
const contributeDataFormUrl =
  "https://forms.zohopublic.com/halimaabba/form/SOSFVolunteerAccessRequestForm/formperma/mT1MKvcPwJZJwotBeHYtC-xUaxrnitcQFkZ1vVArjmE";
const championFormUrl =
  "https://forms.zohopublic.com/halimaabba/form/SOSFChampionRegistrationFormMainstreamingInstituti/formperma/vSi3fKfTzzTVYuqFS7xub3G8dP9t3LzzBUb-hv7LStY";
const connectorFormUrl =
  "https://forms.zohopublic.com/halimaabba/form/AdvocacythroughStakeholderEngagementCoalitionForma/formperma/53pjv9mULg_uCNa8WKo3_qS456VIhfLqofG_LbwbQ_w";
const awanessBuilderFormUrl =
  "https://forms.zohopublic.com/halimaabba/form/SOSFAwarenessBuildingCollaborationInterestForm/formperma/whFqmCcBj0Fq9iZ1fjI7Z6HF9FKgGapLrz7JUMIshLA";
const policyAdvocateFormUrl =
  "https://forms.zohopublic.com/halimaabba/form/SOSFPolicyRegulationAdvocacyCollaborationForm/formperma/mQOSdgt679TpPzssqcmXYontdRCmnN4auceoWIsuwYM";
const osbOscFormUrl =
  "https://www.udemy.com/user/skills-outside-school/?srsltid=AfmBOoq1RoOD9Q_BubAaraqk5kBUbrFip3IOgpWm31fyQPtcVVYhc5pm";

export default function Participate() {
  const [isMobile, setIsMobile] = useState(false);
  // iframe modal states
  const [accessDataFormOpen, setAccessDataFormOpen] = useState(false);
  const [contributeDataFormOpen, setContributeDataFormOpen] = useState(false);
  const [championFormOpen, setChampionFormOpen] = useState(false);
  const [connectorFormOpen, setConnectorFormOpen] = useState(false);
  const [awarenessBuilderFormOpen, setAwarenessBuilderFormOpen] =
    useState(false);
  const [policyAdvocateFormOpen, setPolicyAdvocateFormOpen] = useState(false);
  const [osbOscFormOpen, setOsbOscFormOpen] = useState(false);

  // useEffect kept for responsive icon sizing (unchanged)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-10 py-10 px-4 md:px-8 bg-white">
      <div className="w-full max-w-7xl text-left">
        <div className="relative">
          <div className="text-left p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 pt-8 sm:pt-10 md:pt-12">
            {/* Data Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-left">
                PARTICIPATE IN DATA
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {/* Access Data */}
                <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="mx-auto p-3 p-4 md:p-5 lg:p-6 text-center h-full flex justify-center flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      Access Data (as User)
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Request access to SOSF reports and raw datasets
                    </p>
                    <Button
                      className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] hover:scale-105 hover:shadow-xl transition-transform"
                      onClick={() => setAccessDataFormOpen(true)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                {/* Contribute Data */}
                <Card className="bg-background_blue  border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Database className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      Contribute Data (as Contributor)
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Register your beneficiaries/org in the SOSF Social &
                      Economic Register
                    </p>
                    <Button
                      className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base "
                      onClick={() => setContributeDataFormOpen(true)}
                    >
                      Register →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Intervention Section (content unchanged) */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-left">
                PARTICIPATE IN OUR INTERVENTION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {/* SOSF Bridge */}
                <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Bridge
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Our flagship intervention, equipping students in
                      government secondary & higher educational institutions
                      with the tools, knowledge, skills & attitude to become
                      Valuable, Influential & Profitable through Tongston's
                      all-in-one platform: T-World.
                    </p>
                    <Button className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] hover:scale-105 hover:shadow-xl transition-transform">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF Headstart */}
                <Card className="bg-background_blue border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Sprout className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Headstart – as a farmer
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Transforming small-scale and vulnerable farming by
                      boosting yield, income, and resilience for farmers thereby
                      positioning agriculture into a Valuable, Influential &
                      Profitable profession.
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF Grants */}
                <Card className="bg-background_blue border border-purple-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Grants
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Providing targeted, non-programmatic funding & capacity
                      building - media, enterprise, education, finance to
                      individuals & institutions running social change projects,
                      initiatives & businesses through Tongston's all
                      in-one-platform: T-World.
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF OSB/OSC */}
                <Card className="bg-background_blue  border border-orange-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center ">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Network className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF OSB/OSC
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Digital udemy-based courses designed to equip existing &
                      emerging entrepreneurs, job seekers, students, with the
                      knowledge, skills & attitudes to start, grow, sustain
                      their careers and ventures.
                    </p>
                    <Button
                      onClick={() => setOsbOscFormOpen(true)}
                      className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base"
                    >
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* SOSF Funds */}
                <Card className="bg-background_blue border border-teal-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Building2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      SOSF Funds
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Providing access to patient & catalytic capital to alumni
                      of our interventions to support careers & business
                      expansion through our flagship Scholarship & Enterprise
                      Funds, accessible through Tongston's all in-one-platform:
                      T-World.
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Advocacy Section */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-left">
                PARTICIPATE IN ADVOCACY
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mb-3 sm:mb-4 lg:mb-6">
                Choose your advocacy path and make a meaningful impact through
                various engagement opportunities
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {/* As a Catalyst */}
                <Card className="bg-background_blue border border-blue-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Zap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Catalyst (Ambassador)
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Advocacy through Ambassadors as catalysts of change- as an
                      alumni user (Ambassador) – Submit your initiative:
                      ambassadors submit your initiative demonstrating how you
                      are a catalyst for change
                    </p>
                    <Button className="w-full bg-secondary_blue hover:bg-blue-700 text-blue-100 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
                      Get Started →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Mobilizer */}
                <Card className="bg-background_blue border border-green-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Mobilizer
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Access reports on our volunteers + register your
                      organization to engage our volunteers for your work
                    </p>
                    <Button className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base">
                      Register →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Connector */}
                <Card className="bg-background_blue border border-purple-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Share2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Connector
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Indicate interest to form a coalition with SOSF / invite
                      SOSF to join a coalition
                    </p>
                    <Button
                      className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base"
                      onClick={() => setConnectorFormOpen(true)}
                    >
                      Join Now →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Champion */}
                <Card className="bg-background_blue border border-orange-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center ">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Champion
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Register to support us to mainstream/institutionalize our
                      interventions or the outcomes of interventions
                    </p>
                    <Button
                      className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base"
                      onClick={() => setChampionFormOpen(true)}
                    >
                      Be a Champion →
                    </Button>
                  </CardContent>
                </Card>

                {/* As an Awareness Builder */}
                <Card className="bg-background_blue border border-red-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <Megaphone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As an Awareness Builder
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                      Co-host an event / strategic campaign / invite us to an
                      event to speak
                    </p>
                    <Button
                      className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base"
                      onClick={() => setAwarenessBuilderFormOpen(true)}
                    >
                      Invite Now →
                    </Button>
                  </CardContent>
                </Card>

                {/* As a Policy Advocate */}
                <Card className="bg-background_blue border border-teal-100 hover:shadow-lg transition-all duration-300 group w-full">
                  <CardContent className="p-3 md:p-5 lg:p-6 text-center h-full flex flex-col items-center">
                    <div className="mb-4 md:mb-4">
                      <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        <FileText className="h-3 w-3 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 text-blue" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
                      As a Policy Advocate
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 leading-relaxed flex-grow">
                      Co-design a policy/regulation; or a manual for
                      implementation
                    </p>
                    <Button
                      className="bg-background_blue text-blue w-fit hover:bg-background_blue font-semibold py-1.5 py-2 md:py-2.5 lg:py-3 text-xs md:text-base"
                      onClick={() => setPolicyAdvocateFormOpen(true)}
                    >
                      Collaborate on policy →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Iframe Modals */}
        <IframeModal
          isOpen={accessDataFormOpen}
          onClose={() => setAccessDataFormOpen(false)}
          title="Access Data Form"
          description="Fill out this form to access data as an organization."
          iframeUrl={accessDataFormUrl}
        />
        <IframeModal
          isOpen={contributeDataFormOpen}
          onClose={() => setContributeDataFormOpen(false)}
          title="Contribute Data Form"
          description="Fill out this form to contribute data as an organization."
          iframeUrl={contributeDataFormUrl}
        />
        <IframeModal
          isOpen={championFormOpen}
          onClose={() => setChampionFormOpen(false)}
          title="Champion Form"
          description="Fill out this form to become a champion."
          iframeUrl={championFormUrl}
        />
        <IframeModal
          isOpen={connectorFormOpen}
          onClose={() => setConnectorFormOpen(false)}
          title="Connector Form"
          description="Fill out this form to become a connector."
          iframeUrl={connectorFormUrl}
        />
        <IframeModal
          isOpen={awarenessBuilderFormOpen}
          onClose={() => setAwarenessBuilderFormOpen(false)}
          title="Awareness Builder Form"
          description="Fill out this form to become an awareness builder."
          iframeUrl={awanessBuilderFormUrl}
        />
        <IframeModal
          isOpen={policyAdvocateFormOpen}
          onClose={() => setPolicyAdvocateFormOpen(false)}
          title="Policy Advocate Form"
          description="Fill out this form to become a policy advocate."
          iframeUrl={policyAdvocateFormUrl}
        />
        <IframeModal
          isOpen={osbOscFormOpen}
          onClose={() => setOsbOscFormOpen(false)}
          title="SOSF OSB/OSC"
          description="Visit our Udemy page to explore our courses."
          iframeUrl={osbOscFormUrl}
        />
      </div>
    </div>
  );
}
