import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import QuestionStep from "@/components/Get-Involved/Quiz/QuestionStep";
import { AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { QuizTree } from "@/utils/libraries/QuizTree";
import ClipLoader from "react-spinners/ClipLoader";

// ROOT QUESTION
const ROOT_QUESTION = {
  id: "root",
  text: "Choose where you want to get involved:",
  options: [
    { value: "partner", label: " Partner" },
    { value: "invest", label: " Invest" },
    { value: "govern", label: " Govern" },
    { value: "participate", label: " Participate" },
  ],
};

//  EmailJS keys
const SERVICE_KEY = "service_p9tcsgd";
const TEMPLATE_ID = "template_0uzjc3g";
const PUBLIC_KEY = "M02SK14LBZ";

export default function Quiz() {
  const router = useRouter();
  const { email } = router.query;

  const [questions, setQuestions] = useState([ROOT_QUESTION]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email) return;

    const loadProgress = async () => {
      const res = await fetch(`/api/getProgress?email=${email}`);
      const data = await res.json();

      if (data.progress && data.progress.answers.length > 0) {
        const rootAnswer = data.progress.answers[0].answer;
        const tree = [ROOT_QUESTION, ...QuizTree(rootAnswer)];
        setQuestions(tree);
        setAnswers(data.progress.answers);
        setCurrentIndex(data.progress.answers.length);
      }

      setLoading(false);
    };

    loadProgress();
  }, [email]);

  const handleSelect = async (option) => {
    let updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = {
      questionId: questions[currentIndex].id,
      answer: option.value,
    };

    if (currentIndex === 0) {
      const newTree = [ROOT_QUESTION, ...QuizTree(option.value)];
      setQuestions(newTree);
      setAnswers([updatedAnswers[0]]);
      setCurrentIndex(1);
    } else {
      setAnswers(updatedAnswers);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        handleSubmit(updatedAnswers);
      }
    }

    await fetch("/api/saveProgress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, answers: updatedAnswers }),
    });
  };

  const handleSubmit = async (finalAnswers) => {
    const recommendation = getRecommendation(finalAnswers);

    await fetch("/api/submitQuiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, answers: finalAnswers, recommendation }),
    });

    emailjs.send(
      SERVICE_KEY,
      TEMPLATE_ID,
      {
        to_email: email,
        message: `Your answers:\n${JSON.stringify(
          finalAnswers,
          null,
          2
        )}\n\nRecommendation: ${recommendation}`,
      },
      PUBLIC_KEY
    );

    Swal.fire({
      icon: "success",
      title: "Your Recommendation",
      html: `<strong>${recommendation}</strong><br>Check your email for full details.`,
      confirmButtonText: "Done",
      confirmButtonColor: "#2563eb",
    }).then(() => router.push("/get-involved"));
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const getRecommendation = (answers) => {
    const root = answers[0]?.answer;
    switch (root) {
      case "partner":
        return "You are best suited for Partnership!";
      case "invest":
        return "Investment is your best path!";
      case "govern":
        return "You excel at Governance!";
      case "participate":
        return "Participation suits you best!";
      default:
        return "Thank you for completing the quiz!";
    }
  };

  if (loading)
    return (
      <main className="flex items-center justify-center h-screen">
        <ClipLoader size={50} color="#2563eb" />
      </main>
    );

  return (
    <main className=" quiz-environment flex flex-col items-center justify-center p-4 gap-y-8 min-h-[900px] max-h-screen">
      <div className="w-full    bg-milk  min-h-[300px]  block justify-start  max-w-xl   border-x-2 border-y-2    border-secondary_blue p-6 rounded-md shadow-2xl">
        <div className="flex justify-between mb-4">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`flex-1 h-1 w-1 mx-1 rounded-[100px] ${
                idx <= currentIndex ? "bg-blue" : "bg-secondary_blue"
              }`}
            ></div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {questions[currentIndex] && (
            <QuestionStep
              key={questions[currentIndex].id}
              question={questions[currentIndex]}
              onSelect={handleSelect}
            />
          )}
        </AnimatePresence>

        {currentIndex > 0 && (
          <button
            onClick={handleBack}
            className="mt-4 text-sm text-blue underline hover:text-secondary_blue"
          >
            ← Back
          </button>
        )}
      </div>
    </main>
  );
}
