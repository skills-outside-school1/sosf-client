// pages/api/test-connection.js
import DataBaseHandler from "./config/mongo";

export default async function handler(req, res) {
  try {
    await DataBaseHandler();
    res.status(200).json({ message: "Database connection successful!" });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection failed", error });
  }
}
