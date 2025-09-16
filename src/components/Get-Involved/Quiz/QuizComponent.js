import React, { useState, useEffect } from "react";

const QuizComponent = ({ questionTree, initialProgress, onSave }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState("ROOT");
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [systemResponse, setSystemResponse] = useState(null);
  const [cta, setCta] = useState(null);
  const [history, setHistory] = useState(["ROOT"]);
  const [multiSelectAnswers, setMultiSelectAnswers] = useState({});

  // Restore progress if available
  useEffect(() => {
    if (initialProgress) {
      setCurrentQuestionId(initialProgress.currentQuestionId || "ROOT");
      setAnswers(initialProgress.answers || {});
      setHistory(initialProgress.history || ["ROOT"]);
      setRecommendation(initialProgress.recommendation || null);
      setSystemResponse(initialProgress.systemResponse || null);
      setCta(initialProgress.cta || null);
      setMultiSelectAnswers(initialProgress.multiSelectAnswers || {});
    }
  }, [initialProgress]);

  const currentQuestion = questionTree[currentQuestionId];

  const handleAnswerSelect = (answer) => {
    const newAnswers = { ...answers, [currentQuestionId]: answer.id };
    setAnswers(newAnswers);

    if (answer.recommendation) {
      setRecommendation(answer.recommendation);
      onSave?.(newAnswers, currentQuestionId, answer.recommendation);
    } else if (answer.systemResponse) {
      setSystemResponse(answer.systemResponse);
      onSave?.(newAnswers, currentQuestionId, null);
    } else if (answer.cta) {
      setCta(answer.cta);
      onSave?.(newAnswers, currentQuestionId, null);
    } else if (answer.nextQuestion) {
      setHistory([...history, answer.nextQuestion]);
      setCurrentQuestionId(answer.nextQuestion);
      onSave?.(newAnswers, answer.nextQuestion, null);
    }
  };

  const handleMultiSelectAnswer = (answerId, isSelected) => {
    const currentSelections = multiSelectAnswers[currentQuestionId] || [];
    let newSelections;

    if (isSelected) {
      newSelections = [...currentSelections, answerId];
    } else {
      newSelections = currentSelections.filter((id) => id !== answerId);
    }

    setMultiSelectAnswers({
      ...multiSelectAnswers,
      [currentQuestionId]: newSelections,
    });
  };

  const handleMultiSelectSubmit = () => {
    const selectedAnswers = multiSelectAnswers[currentQuestionId] || [];

    if (selectedAnswers.length > 0) {
      const firstAnswer = currentQuestion.answers.find(
        (a) => a.id === selectedAnswers[0]
      );

      const newAnswers = {
        ...answers,
        [currentQuestionId]: selectedAnswers,
      };
      setAnswers(newAnswers);

      if (firstAnswer?.nextQuestion) {
        setHistory([...history, firstAnswer.nextQuestion]);
        setCurrentQuestionId(firstAnswer.nextQuestion);
        onSave?.(newAnswers, firstAnswer.nextQuestion, null);
      } else if (firstAnswer?.recommendation) {
        setRecommendation(firstAnswer.recommendation);
        onSave?.(newAnswers, currentQuestionId, firstAnswer.recommendation);
      }
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevQuestionId = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentQuestionId(prevQuestionId);
      setRecommendation(null);
      setSystemResponse(null);
      setCta(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionId("ROOT");
    setAnswers({});
    setRecommendation(null);
    setSystemResponse(null);
    setCta(null);
    setHistory(["ROOT"]);
    setMultiSelectAnswers({});
  };

  if (!currentQuestion) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <h2>Question not found</h2>
          <button onClick={restartQuiz} style={styles.button}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  if (recommendation) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Pathway Recommendation</h2>
          <button onClick={goBack} style={styles.backButton}>
            ← Back
          </button>
        </div>
        <div style={styles.recommendation}>
          <div style={styles.recommendationIcon}>✓</div>
          <p>Based on your answers, we recommend:</p>
          <h3 style={styles.recommendationText}>{recommendation}</h3>
          <button onClick={restartQuiz} style={styles.button}>
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if (systemResponse) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Thank You</h2>
          <button onClick={goBack} style={styles.backButton}>
            ← Back
          </button>
        </div>
        <div style={styles.systemResponse}>
          <p>{systemResponse}</p>
          <button onClick={restartQuiz} style={styles.button}>
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if (cta) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Next Steps</h2>
          <button onClick={goBack} style={styles.backButton}>
            ← Back
          </button>
        </div>
        <div style={styles.cta}>
          <p>Your next step is to:</p>
          <h3 style={styles.ctaText}>{cta}</h3>
          <button onClick={restartQuiz} style={styles.button}>
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Welcome to the Skills Outside School Foundation (SOSF). Below is Personalized Pathway to getting involved as a partner, investor, participant or governance contributor.</h2>
        {history.length > 1 && (
          <button onClick={goBack} style={styles.backButton}>
            ← Back
          </button>
        )}
      </div>

      <div style={styles.progress}>
        <div
          style={{
            ...styles.progressBar,
            width: `${(history.length / 10) * 100}%`, // Approximate progress
          }}
        ></div>
      </div>

      <div style={styles.questionContainer}>
        <p style={styles.questionText}>{currentQuestion.text}</p>

        <div style={styles.answersContainer}>
          {currentQuestion.multiSelect ? (
            <>
              {currentQuestion.answers.map((answer) => {
                const isSelected =
                  multiSelectAnswers[currentQuestionId]?.includes(answer.id) ||
                  false;
                return (
                  <div
                    key={answer.id}
                    style={{
                      ...styles.multiSelectOption,
                      ...(isSelected ? styles.selectedMultiSelectOption : {}),
                    }}
                    onClick={() =>
                      handleMultiSelectAnswer(answer.id, !isSelected)
                    }
                  >
                    <div style={styles.checkbox}>
                      {isSelected ? "✓" : ""}
                    </div>
                    <span>{answer.text}</span>
                  </div>
                );
              })}
              <button
                onClick={handleMultiSelectSubmit}
                style={styles.button}
                disabled={!multiSelectAnswers[currentQuestionId]?.length}
              >
                Continue
              </button>
            </>
          ) : (
            currentQuestion.answers.map((answer) => (
              <button
                key={answer.id}
                style={styles.answerButton}
                onClick={() => handleAnswerSelect(answer)}
              >
                {answer.text}
              </button>
            ))
          )}
        </div>
      </div>

      <div style={styles.footer}>
        <p style={styles.progressText}>Question {history.length} of ~10</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
     minHeight: "80vh",         
   
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "15px",
  },
  title: {
    color: "#2c3e50",
    fontSize: "24px",
    fontWeight: "600",
    margin: "0",
    textAlign: "center",
  },
  backButton: {
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "#6c757d",
    border: "1px solid #6c757d",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
  progress: {
    height: "8px",
    backgroundColor: "#e0e0e0",
    borderRadius: "4px",
    marginBottom: "25px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#",
    transition: "width 0.3s ease",
  },
  questionContainer: {
    marginBottom: "20px",
  },
  questionText: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "25px",
    color: "#333",
    lineHeight: "1.5",
  },
  answersContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  answerButton: {
    padding: "15px",
    backgroundColor: "#fff",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "16px",
    transition: "all 0.2s ease",
    color: "#333",
  },
  multiSelectOption: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#fff",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  selectedMultiSelectOption: {
    borderColor: "#4c7abf",    
    backgroundColor: "#e8f2f5", 
  },
  checkbox: {
    width: "20px",
    height: "20px",
    border: "2px solid #ccc",
    borderRadius: "4px",
    marginRight: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#4caf50",
  },
  button: {
    padding: "12px 24px",
    backgroundColor:  "#4c6faf",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "15px",
    alignSelf: "flex-start",
  },
  recommendation: {
    padding: "30px",
    backgroundColor: "#e8f2f5",
    borderRadius: "12px",
    textAlign: "center",
    margin: "20px 0",
  },
  recommendationIcon: {
    fontSize: "48px",
    color: "#4c6faf",
    marginBottom: "15px",
  },
  recommendationText: {
    color: "#4c6faf",
    fontSize: "24px",
    margin: "15px 0",
    fontWeight: "600",
  },
  systemResponse: {
    padding: "30px",
    backgroundColor: "#e3f2fd",
    borderRadius: "12px",
    textAlign: "center",
    margin: "20px 0",
  },
  cta: {
    padding: "30px",
    backgroundColor: "#fff3e0",
    borderRadius: "12px",
    textAlign: "center",
    margin: "20px 0",
  },
  ctaText: {
    color: "#f57c00",
    fontSize: "20px",
    margin: "15px 0",
    fontWeight: "600",
  },
  footer: {
    marginTop: "auto",      
  paddingTop: "15px",
  borderTop: "1px solid #e0e0e0",
  textAlign: "center",
  },
  progressText: {
    color: "#6c757d",
    fontSize: "14px",
    margin: "0",
  },
  error: {
    padding: "30px",
    backgroundColor: "#ffebee",
    borderRadius: "12px",
    textAlign: "center",
  },
};

export default QuizComponent;
