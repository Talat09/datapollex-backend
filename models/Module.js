const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: { type: String, required: true },
    position: { type: Number },
  },
  { timestamps: true }
);

const Module = mongoose.model("Module", ModuleSchema);
module.exports=Module;
