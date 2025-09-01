import DataBaseHandler from "./config/mongo";
import ethicsReportingModel from "./models/ethics-reporting-model";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await DataBaseHandler();
      const newReport = await ethicsReportingModel.create(req.body);
      res.status(201).json(newReport);
    } catch (error) {
      console.error("Error saving Ethics report:", error);
      res
        .status(500)
        .json({ message: "Failed to save report", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Welcome to sos Server" });
  }
}
