const Lecture = require("../models/Lecture");

exports.createLecture = async (req, res) => {
  try {
    const lecture = new Lecture(req.body);
    await lecture.save();
    res.status(201).json(lecture);
  } catch (error) {
    res.status(400).json({ message: "Error creating lecture", error });
  }
};

exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find({ moduleId: req.params.moduleId });
    res.status(200).json(lectures);
  } catch (error) {
    res.status(400).json({ message: "Error fetching lectures", error });
  }
};
