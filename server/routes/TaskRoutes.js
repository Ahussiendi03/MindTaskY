const express = require("express");

const {
  createTask,
  getTasks,
  markTaskCompleted,
  deleteTask,
} = require("../controller/taskController");
const authMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/add-tasks", authMiddleware, createTask);

router.get("/get-tasks", authMiddleware, getTasks);

router.patch("/:id/complete", authMiddleware, markTaskCompleted);

router.delete("/:id/delete", authMiddleware, deleteTask);

module.exports = router;
