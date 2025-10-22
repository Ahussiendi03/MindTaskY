import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Plus, X } from "lucide-react";
import axios from "axios";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });


  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

useEffect(() => { 
    const getTasks = async () => { 
        try {
            const res = await axios.get("http://localhost:5000/api/tasks/get-tasks", {
                withCredentials: true
            });
            setTasks(res.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
        
      };
      getTasks();
});
  // Add new task
  const handleAddTask = async (e) => {
    e.preventDefault();

    const { title, description, priority } = newTask;
    if (!title || !description || !priority)
      return alert("Please fill in all fields");

    const taskData = {
      title,
      description,
      priority,
      createdAt: new Date().toLocaleDateString(),
    };

    try {
        const res = await axios.post(
        "http://localhost:5000/api/tasks/add-tasks",
        taskData,
        {
            withCredentials: true
        }
      );
      setTasks([...tasks, res.data]);
      toggleModal();
      setNewTask({ title: "", description: "", priority: "Medium" });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Toggle completed task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const priorityColors = {
    Low: "bg-green-600/30 text-green-300 border-green-500/40",
    Medium: "bg-yellow-600/30 text-yellow-300 border-yellow-500/40",
    High: "bg-red-600/30 text-red-300 border-red-500/40",
  };

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      <Sidebar />

      <div className="flex-1 p-10 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Task Management</h1>

          <button
            onClick={toggleModal}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            <Plus size={18} /> Add Task
          </button>
        </div>

        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-gray-400">No tasks yet. Add your first one!</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task._id}
                className={`bg-slate-800 p-4 rounded-lg border border-indigo-900/40 transition-all duration-300 ${
                  task.completed ? "opacity-70 line-through" : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{task.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{task.description}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-md border ${priorityColors[task.priority]}`}
                    >
                      {task.priority} Priority
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Created: {task.createdAt}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm"
                    >
                      {task.completed ? "Undo" : "Done"}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
            <div className="bg-[#1E293B] p-8 rounded-xl shadow-lg w-96 relative border border-indigo-900/40">
              <button
                onClick={toggleModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-4">Add New Task</h2>

              <form onSubmit={handleAddTask} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm mb-2">Task Title</label>
                  <input
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleChange}
                    placeholder="Enter task title..."
                    className="w-full px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm mb-2">Description</label>
                  <textarea
                    name="description"
                    value={newTask.description}
                    onChange={handleChange}
                    placeholder="Write a brief description..."
                    rows="3"
                    className="w-full px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm mb-2">Priority</label>
                  <select
                    name="priority"
                    value={newTask.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md font-semibold transition-all duration-300"
                >
                  Add Task
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManagement;
