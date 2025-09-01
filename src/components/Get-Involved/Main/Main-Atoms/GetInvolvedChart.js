import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { useState } from "react";
import { useRouter } from "next/router";
import { H2, H3 } from "@/components/shared/Atoms/Typography/typography";
import GetInvolvedButton from "../../Chart/GetInvolvedButton";
import GetInvolvedModal from "../../Chart/GetInvolvedModal";
import { AnimatePresence } from "framer-motion";

export default function GetInvolvedChart() {
  //functions
  // function to open the get involve chart modal
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleStart = async () => {
    if (!email) return;
    router.push(`/quiz?email=${email}`);
  };

  const data = [
    {
      heading1: <span>SOSF &quot;Get Involved&quot; Structure Chart</span>,
      paragraph: (
        <span>
          Welcome to the Skills Outside School Foundation (SOSF). Below is your
          personalized pathway to getting involved – whether as a partner,
          investor, participant, or governance contributor.
        </span>
      ),
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-8 justify-start  items-start    ">
      <section className="lg:ml-auto lg:mr-2">
        {" "}
        <SubHero items={data} />
      </section>
      <section className="chart-button  px-3  md:px-[4rem] lg:px-[7rem]">
        <GetInvolvedButton onClick={() => setOpen(true)} />
        <AnimatePresence>
          {open && <GetInvolvedModal onClose={() => setOpen(false)} />}
        </AnimatePresence>
      </section>
      <div className="button-text-container flex  flex-col gap-y-6 justify-start items-start px-3 md:px-[4rem] lg:px-[7rem]">
        <section className="flex flex-col gap-y-4 mb-4">
          <H2 className="text-xl "> Let's Get You the right Pathway !</H2>
          <H3 className="text-base  font-medium ">
            Enter Your Email and Take a 5 Minutes Survey
          </H3>
        </section>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-secondary_blue border-2 text-[#000] px-4 py-2 mb-4  w-full outline-none  focus:ring-1 focus:ring-offset-primary_blue  md:w-[500px]"
          placeholder="you@example.com"
        />
        <button
          onClick={handleStart}
          className="hover:text-blue font-lato  bg-secondary_blue w-[180px] h-[60px] px-2   font-bold text-lg text-[#000]  rounded"
        >
          Start Survey
        </button>
      </div>
    </div>
  );
}
