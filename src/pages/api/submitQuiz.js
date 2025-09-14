import DataBaseHandler from "./config/mongo";
import QuizProgress from "./models/QuizProgress";
import QuizSubmission from "./models/QuizSubmission";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email, quizId, answers, timeSpent, quizTitle } = req.body;

    // Validate required fields
    if (!email || !quizId || !answers) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: email, quizId, and answers are required'
      });
    }

    await DataBaseHandler();

    // Calculate score
    const score = calculateScore(answers);

    // Create quiz submission
    const submission = await QuizSubmission.create({
      email,
      quizId,
      quizTitle: quizTitle || `Quiz ${quizId}`,
      answers,
      timeSpent: timeSpent || 0,
      score: score.percentage,
      correctAnswers: score.correct,
      totalQuestions: score.total,
      submittedAt: new Date()
    });

    // Optional: Clear progress after submission if needed
    await QuizProgress.findOneAndDelete({ email, quizId });

    res.status(200).json({
      success: true,
      submission,
      score: {
        correct: score.correct,
        total: score.total,
        percentage: score.percentage
      },
      message: 'Quiz submitted successfully'
    });

  } catch (error) {
    console.error('Quiz submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

function calculateScore(answers) {
  let correctCount = 0;
  
  answers.forEach(answer => {
    if (answer.isCorrect) {
      correctCount++;
    }
  });
  
  return {
    correct: correctCount,
    total: answers.length,
    percentage: answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0
  };
}