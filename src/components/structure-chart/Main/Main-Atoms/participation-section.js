import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/shared/cards/card";
import { Badge } from "@/components/structure-chart/Main/Main-Atoms/badge";
import {
  Users,
  ChevronRight,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import CustomIcon from "./CustomIcon";
import IframeModal from "../../../shared/modals/iframe-modal"
import { Button } from "./button"

// forms
const accessDataFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFDataAccessRegistrationForm/formperma/tR1QuQRcSMrGhBum8rBKtcywUIs6hsf9UR4U7m7pW5Q"
const contributeDataFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFVolunteerAccessRequestForm/formperma/mT1MKvcPwJZJwotBeHYtC-xUaxrnitcQFkZ1vVArjmE"
const awanessBuilderFormUrl = "https://forms.zohopublic.com/halimaabba/form/SOSFAwarenessBuildingCollaborationInterestForm/formperma/whFqmCcBj0Fq9iZ1fjI7Z6HF9FKgGapLrz7JUMIshLA"

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
const school = "/assets/icons/school.svg"
const informal = "/assets/icons/informal.svg"

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
        formModal: awanessBuilderFormUrl,
        modalTitle: "K–12 Student (JSS3) Registration",
        modalDescription: "Register as a K–12 Student (JSS3) to start your journey with SOSF Bridge Basic"
      },
      {
        title: "K–12 Student (SS1-SS3)",
        details: ["Start with SOSF Bridge Intermediate", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: Student_ss1,
        formModal: awanessBuilderFormUrl,
        modalTitle: "K–12 Student (SS1-SS3) Registration",
        modalDescription: "Register as a K–12 Student (SS1-SS3) to start your journey with SOSF Bridge Intermediate"
      },
      {
        title: "K–12 Teacher (JSS3)",
        details: ["Join as a Bridge Basic Teacher", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: teacherjss3,
        formModal: awanessBuilderFormUrl,
        modalTitle: "K–12 Teacher (JSS3) Registration",
        modalDescription: "Register as a K–12 Teacher (JSS3) to join as a Bridge Basic Teacher"
      },
      {
        title: "K–12 Teacher (SS1-SS3)",
        details: ["Join as a Bridge Intermediate Teacher", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: teacherss1,
        formModal: awanessBuilderFormUrl,
        modalTitle: "K–12 Teacher (SS1-SS3) Registration",
        modalDescription: "Register as a K–12 Teacher (SS1-SS3) to join as a Bridge Intermediate Teacher"
      },
      {
        title: "Tertiary Student",
        details: ["Start with SOSF Bridge Advanced", "Apply for SOSF Funds OR go through:", "Online Skill Up for Career", "Online Skill Up for Businesses"],
        icon: tercherstd,
        formModal: awanessBuilderFormUrl,
        modalTitle: "Tertiary Student Registration",
        modalDescription: "Register as a Tertiary Student to start your journey with SOSF Bridge Advanced"
      },
      {
        title: "Entrepreneur (Any age)",
        details: ["Start with Online Skill Up for Business", "Apply for SOSF Enterprise Funds"],
        icon: endntrepreneur,
        formModal: awanessBuilderFormUrl,
        modalTitle: "Entrepreneur Registration",
        modalDescription: "Register as an Entrepreneur to start with Online Skill Up for Business"
      },
      {
        title: "Professional (Any age)",
        details: ["Start with Online Skill Up for Business", "Apply for SOSF Scholarship Funds"],
        icon: professinal,
        formModal: awanessBuilderFormUrl,
        modalTitle: "Professional Registration",
        modalDescription: "Register as a Professional to start with Online Skill Up for Business"
      },
      {
        title: "Farmer (Smallholder)",
        details: ["Join SOSF Headstart Agropreneurs"],
        icon: farmer,
        formModal: awanessBuilderFormUrl,
        modalTitle: "Farmer Registration",
        modalDescription: "Register as a Farmer to join SOSF Headstart Agropreneurs"
      },
      {
        title: "School K-12",
        details: ["Enroll teachers/students in SOSF Bridge Basic or Intermediate"],
        icon: school,
        formModal: awanessBuilderFormUrl,
        modalTitle: "School Registration",
        modalDescription: "Register your school to enroll teachers/students in SOSF Bridge programs"
      },
      {
        title: "Informal Sector Worker (Other Industries)",
        details: ["Join SOSF Headstart (General)"],
        icon: informal,
        formModal: awanessBuilderFormUrl,
        modalTitle: "Informal Sector Worker Registration",
        modalDescription: "Register as an Informal Sector Worker to join SOSF Headstart (General)"
      },
      {
        title: "Intermediary Organization (NGO, Trust, Company etc)",
        details: ["Apply for SOSF Grants(Micro, Small, Large)"],
        icon: intermediary,
        formModal: awanessBuilderFormUrl,
        modalTitle: "Intermediary Organization Registration",
        modalDescription: "Register your organization to apply for SOSF Grants"
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
        formModal: accessDataFormUrl,
        modalTitle: "Data Access & Contribution",
        modalDescription: "Access or contribute to SOSF data resources"
      },
      {
        title: "Advocacy",
        icon: Users,
        details: ["As a Catalyst (Ambassador)", "As a Mobilizer", "As a Connector"],
        formModal: contributeDataFormUrl,
        modalTitle: "Advocacy Participation",
        modalDescription: "Join our advocacy efforts as a Catalyst, Mobilizer, or Connector"
      },
    ],
  },
];

// --- Main Component ---
export default function ParticipationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 
  const [isFading, setIsFading] = useState(false); 
  const autoSlideRef = useRef(null);
  const currentSlide = participationSlides[currentIndex];
  const totalSlides = participationSlides.length;

  // Modal states
  const [activeModal, setActiveModal] = useState({
    isOpen: false,
    title: "",
    description: "",
    url: ""
  });

  // Function to handle the index change with fade transition
  const goToIndex = (newIndex) => {
    if (newIndex === currentIndex || newIndex < 0 || newIndex >= totalSlides) return;

    // 1. Start the fade-out
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 300);
  };


  const autoNext = () => {
    goToIndex((currentIndex + 1) % totalSlides);
  };

  const handleNext = () => {
    // Manually trigger next slide using the fade logic
    goToIndex((currentIndex + 1) % totalSlides);
  };

  const handleDotClick = (index) => {
    goToIndex(index);
  };

  // Modal handlers
  const handleOpenModal = (title, description, url) => {
    setActiveModal({
      isOpen: true,
      title,
      description,
      url
    });
  };

  const handleCloseModal = () => {
    setActiveModal({
      isOpen: false,
      title: "",
      description: "",
      url: ""
    });
  };

  const startTimer = () => {
    if (totalSlides > 0) {
      // Reduced timer: 4000ms (4 seconds)
      return setInterval(() => {
        autoNext();
      }, 4000); 
    }
    return null;
  };

  useEffect(() => {
    // Clear any existing timer
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    // Start the timer only if not paused
    if (!isPaused) {
      autoSlideRef.current = startTimer();
    }

    // Cleanup function
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [totalSlides, isPaused]); // Depend on totalSlides and isPaused

  useEffect(() => {
    if (!isPaused && autoSlideRef.current) {
      // Clear interval set by interaction
      clearInterval(autoSlideRef.current);
      // Set a new timer for the original duration (7000ms from your initial code)
      autoSlideRef.current = setInterval(() => {
        autoNext();
      }, 7000); 
    }
  }, [currentIndex]); 

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  // Tailwind class based on the fading state (NEW)
  const fadeClass = isFading ? 'opacity-0' : 'opacity-100';


  return (
    <section 
      className="py-20 px-4 bg-white sm:mx-6 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="solid" className="mb-4  rounded-lg  border-[#E5CC34] px-4 py-1.5  text-2xl text-black border font-semibold">
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

        {/* Carousel Content*/}
        <div 
          className={`transition-opacity duration-300 ease-in-out ${fadeClass}`} 
        >
          {currentSlide.type === "beneficiaryGrid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSlide.participants.map((participant, index) => {
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
                    <CardFooter className="pt-4">
                      <Button
                        className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] hover:scale-105 hover:shadow-xl transition-transform"
                        onClick={() => handleOpenModal(
                          participant.modalTitle,
                          participant.modalDescription,
                          participant.formModal
                        )}
                      >
                        Get Started
                      </Button>
                    </CardFooter>
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
                      <Button
                        className="w-32 border-[#B7C8F4] bg-[#B7C8F4] text-gray-900 hover:bg-[#A5B9E9] hover:border-[#A5B9E9] hover:scale-105 hover:shadow-xl transition-transform"
                        onClick={() => handleOpenModal(
                          card.modalTitle,
                          card.modalDescription,
                          card.formModal
                        )}
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {participationSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
                }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Iframe Modal */}
      <IframeModal
        isOpen={activeModal.isOpen}
        onClose={handleCloseModal}
        title={activeModal.title}
        description={activeModal.description}
        iframeUrl={activeModal.url}
      />
    </section>
  );
}