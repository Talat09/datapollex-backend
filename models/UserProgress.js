const mongoose = require("mongoose");

const UserProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    completedLectures: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Lecture" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserProgress", UserProgressSchema);
