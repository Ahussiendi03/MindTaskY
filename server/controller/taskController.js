const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    console.log("📩 Incoming Task Data:", req.body);
    console.log("👤 Authenticated user:", req.user);

    const { title, description, priority } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized: No user ID found" });
    }

    const existingTask = await Task.findOne({ userId, title });
    if (existingTask) {
      return res
        .status(400)
        .json({ message: "Task with this title already exists" });
    }

    const newTask = new Task({
      userId,
      title,
      description,
      priority,
      createdAt: new Date(),
    });

    await newTask.save();
    console.log("✅ Task created successfully:", newTask);

    res.status(201).json(newTask);
  } catch (error) {
    console.error("❌ Server error creating task:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      console.log("❌ No user ID found from token");
      return res
        .status(403)
        .json({ message: "Unauthorized: No user ID found" });
    }
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("❌ Server error fetching tasks:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PATCH /api/tasks/:id/complete
exports.markTaskCompleted = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    console.error("Error marking task completed:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
