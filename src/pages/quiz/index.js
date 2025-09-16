// pages/quiz.js
import { useEffect, useState } from "react";
import QuizComponent from "@/components/Get-Involved/Quiz/QuizComponent";
import data from "@/constants/data.json";

export default function QuizPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(null);
  const [email, setEmail] = useState("");

  // Get email from sessionStorage on mount
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("quizEmail");
    if (!storedEmail) {
      // Redirect if no email found
      window.location.href = "/"; // or wherever your survey component is located
      return;
    }
    
    setEmail(storedEmail);
    
    const loadProgress = async () => {
      try {
        const res = await fetch(`/api/getProgress?email=${encodeURIComponent(storedEmail)}`);
        if (!res.ok) throw new Error("Failed to fetch progress");
        const data = await res.json();
        if (data.progress) {
          setProgress(data.progress);
        }
      } catch (err) {
        console.error("Error loading progress:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, []);

  // Save progress + handle submission
  const handleSave = async (answers, currentQuestionId, recommendation) => {
    try {
      // Always save progress
      await fetch("/api/saveProgress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers, currentQuestionId }),
      });

      // If quiz ends with a recommendation, trigger submission
      if (recommendation) {
        await fetch("/api/submitQuiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, answers, recommendation }),
        });
        
        // Clear the stored email after submission
        sessionStorage.removeItem("quizEmail");
      }
    } catch (err) {
      console.error("Error saving progress:", err);
    }
  };

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Loading quiz...</p>
      </main>
    );
  }

  return (
    <QuizComponent
      questionTree={data.questionTree}
      initialProgress={progress}
      onSave={handleSave}
    />
  );
}