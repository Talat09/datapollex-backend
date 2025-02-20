const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    moduleNumber: { type: Number },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

ModuleSchema.pre("save", async function (next) {
  if (!this.moduleNumber) {
    const highestModule = await this.constructor
      .findOne({ courseId: this.courseId })
      .sort("-moduleNumber");
    this.moduleNumber = highestModule ? highestModule.moduleNumber + 1 : 1;
  }
  next();
});

module.exports = mongoose.model("Module", ModuleSchema);
