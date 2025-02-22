const express = require("express");
const { createModule, getAllModules, getModuleById, deleteModule } = require("../controllers/moduleController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/",  createModule);
router.get("/", getAllModules);
router.get("/:id", getModuleById);
router.delete("/:id", authMiddleware, isAdmin, deleteModule);

module.exports = router;
