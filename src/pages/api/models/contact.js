import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    interest: { type: String, required: true },
    org_name: { type: String },
    category: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "Contact-Us", //  MongoDB collection
  }
);

//enable hot reload
export default mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", MessageSchema);
