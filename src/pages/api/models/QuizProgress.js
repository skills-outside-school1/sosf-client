import mongoose from "mongoose";

const QuizProgressSchema = new mongoose.Schema({
  email: { type: String, required: true },
  answers: [{ questionId: String, answer: String }],
  completed: { type: Boolean, default: false },
});

export default mongoose.models.QuizProgress ||
  mongoose.model("QuizProgress", QuizProgressSchema);
