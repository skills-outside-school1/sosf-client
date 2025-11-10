import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, 
    image: { type: String },
    role: { type: String, default: "admin" }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
