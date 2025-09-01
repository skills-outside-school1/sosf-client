import DataBaseHandler from "./config/mongo";
import Contact from "./models/contact";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await DataBaseHandler();

    const { full_name, email, phone, interest, org_name, category, message } =
      req.body;

    if (!full_name || !email) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }

    try {
      const newMessage = await Contact.create({
        full_name,
        email,
        phone,
        interest,
        org_name,
        category,
        message,
      });

      return res.status(200).json({ success: true, data: newMessage });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }
}
