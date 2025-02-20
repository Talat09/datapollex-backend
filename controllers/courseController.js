const Course = require("../models/Course.js");

// @desc    Create a new course
// @route   POST /api/courses
const createCourse = async (req, res) => {
  try {
    const { title, price, description, thumbnailUrl } = req.body;

    if (!thumbnailUrl) {
      return res.status(400).json({ message: "Thumbnail URL is required" });
    }

    const newCourse = new Course({
      title,
      price,
      description,
      thumbnailUrl, // Only storing Cloudinary URL
    });

    await newCourse.save();
    res
      .status(201)
      .json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all courses
// @route   GET /api/courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get a single course by ID
// @route   GET /api/courses/:id
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Export all functions
module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  deleteCourse,
};
