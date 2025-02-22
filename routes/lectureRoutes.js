const express = require("express");
const {
  createLecture,
  getAllLectures,
  getLectureById,
  deleteLecture,
} = require("../controllers/lectureController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/", createLecture);
router.get("/", getAllLectures);
router.get("/:id", getLectureById);
router.delete("/:id", authMiddleware, isAdmin, deleteLecture);

module.exports = router;
