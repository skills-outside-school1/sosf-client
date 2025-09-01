import DataBaseHandler from "./config/mongo";
import QuizProgress from "./models/QuizProgress";

export default async function handler(req, res) {
  const { email, answers } = req.body;
  await DataBaseHandler();
  const progress = await QuizProgress.findOneAndUpdate(
    { email },
    { answers },
    { upsert: true, new: true }
  );
  res.status(200).json({ success: true, progress });
}
