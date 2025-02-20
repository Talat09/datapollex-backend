const express = require("express");
const router = express.Router();
const lectureController = require("../controllers/lectureController");

router.post("/", lectureController.createLecture);
router.get("/:moduleId", lectureController.getLectures);

module.exports = router;
