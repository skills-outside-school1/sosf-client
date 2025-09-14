import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true
  },
  selectedOption: {
    type: String,
    required: true
  },
  questionText: String,
  correctOption: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const QuizSubmissionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: true
  },
  answers: [AnswerSchema],
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

// Compound index for better query performance
QuizSubmissionSchema.index({ email: 1, quizId: 1 });
QuizSubmissionSchema.index({ submittedAt: -1 });

export default mongoose.models.QuizSubmission || mongoose.model('QuizSubmission', QuizSubmissionSchema);