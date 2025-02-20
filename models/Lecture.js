const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    videoUrl: String,
    pdfNotes: [String],
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lecture", LectureSchema);
