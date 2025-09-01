import DataBaseHandler from "./config/mongo";
import QuizProgress from "./models/QuizProgress";

export default async function handler(req, res) {
  const { email } = req.query;
  await DataBaseHandler();
  const progress = await QuizProgress.findOne({ email });
  res.status(200).json({ progress });
}
