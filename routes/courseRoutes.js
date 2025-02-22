const express = require("express");
const {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
} = require("../controllers/courseController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/", getAllCourses); // Get all courses
router.get("/:id", getCourseById); // Get course by ID
router.post("/",  createCourse);
router.delete("/:id", authMiddleware, isAdmin, deleteCourse); // DELETE Route

module.exports = router;
