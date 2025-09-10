import DataBaseHandler from "./config/mongo";

export default async function handler(req, res) {
  const { email, answers, recommendation } = req.body;
  await DataBaseHandler();
  await QuizProgress.findOneAndUpdate({ email }, { answers, completed: true });
  res.status(200).json({ success: true });
}
