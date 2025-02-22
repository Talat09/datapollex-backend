
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  thumbnailUrl: { type: String, required: true }, // Stores Cloudinary URL
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
  category: { type: String, enum: ["Programming", "Design", "Marketing", "Business", "Other"], default: "Other" },
  enrollmentCount: { type: Number, default: 0 },
  status: { type: String, enum: ["draft", "published", "archived"], default: "draft" }
}, { timestamps: true });
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
