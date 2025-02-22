const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema(
  {
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
    title: { type: String, required: true },
    videoUrl: { type: String },
    content: { type: String },
    position: { type: Number },
  },
  { timestamps: true }
);
const Lecture = mongoose.model("Lecture", LectureSchema);
module.exports = Lecture
