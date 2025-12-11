import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/structure-chart/Atoms/button";
import { Input } from "@/components/structure-chart/Atoms/input";

export default function Pathway() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleStartSurvey = () => {
    if (!email) return;
    sessionStorage.setItem("quizEmail", email);
    router.push("/quiz");
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4 mb-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-3 text-gray-900 mb-4 leading-tight">
            Let’s Get You the Right Pathway!
          </h2>
          <p className="text-lg text-gray-600">
            Answer a few quick questions and we will guide you to the perfect
            path that suits you. Start your journey with SOSF today!
          </p>
        </div>

        {/* Right Column: Survey Form Elements */}
        <div className="w-full md:w-1/2 max-w-sm md:max-w-md">
          <p className="text-base text-gray-800 mb-3 text-center md:text-left">
            Enter Your Email and Take a 5 Minutes Survey
          </p>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-[59px] px-4 py-4 text-gray-700 bg-gray-200/50 border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 shadow-sm placeholder-gray-500 text-base"
              aria-label="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-[216px] p-6 text-lg font-semibold text-black bg-[#B7C8F4] rounded-[20px] shadow-md hover:bg-blue-400/80 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            onClick={handleStartSurvey}
          >
            Start Survey
          </Button>
        </div>
      </div>
    </div>
  );
}
