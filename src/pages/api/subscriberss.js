// pages/api/subscribe.js
import dbConnect from "@/pages/api/config/mongo";
import Subscriber from "@/pages/api/models/subscriber-model";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  await dbConnect();

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Already a subscriber" });
    }

    await Subscriber.create({ email });

    return res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
