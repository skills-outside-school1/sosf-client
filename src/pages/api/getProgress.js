import DataBaseHandler from "./config/mongo";
import QuizProgress from "./models/QuizProgress";

export default async function handler(req, res) {
  const { email } = req.query;

  // Validate email format
  // if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //   return res.status(400).json({ error: "Invalid email" });
  // }
  await DataBaseHandler();
  const progress = await QuizProgress.findOne({ email });
  res.status(200).json({ progress });
}
