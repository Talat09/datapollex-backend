const Lecture = require("../models/Lecture");

exports.createLecture = async (req, res) => {
  try {
    const { title, videoUrl, module } = req.body;
    const lecture = new Lecture({ title, videoUrl, module });

    await lecture.save();
    res.status(201).json(lecture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find().populate("module");
    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLectureById = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id).populate("module");
    if (!lecture) return res.status(404).json({ message: "Lecture not found" });

    res.status(200).json(lecture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) return res.status(404).json({ message: "Lecture not found" });

    await Lecture.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Lecture deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
