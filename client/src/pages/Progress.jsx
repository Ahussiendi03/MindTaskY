import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Progress = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tasks/user-tasks", {
          withCredentials: true,
        });
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Calculate progress
  const completedTasks = tasks.filter((task) => task.completed);
  const totalTasks = tasks.length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks.length / totalTasks) * 100);

  return (
    <div className="flex bg-[#0F172A]/95 min-h-screen text-white">
      {/* Sidebar */}
      <div className="w-64 fixed">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Your Progress</h1>

        {loading ? (
          <p>Loading...</p>
        ) : totalTasks === 0 ? (
          <p className="text-gray-400">No tasks yet. Start creating one!</p>
        ) : (
          <div className="space-y-8">
            {/* Progress bar */}
            <div>
              <p className="text-lg font-medium mb-2">
                Completed {completedTasks.length} of {totalTasks} tasks
              </p>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2 text-gray-400">{progress}% done</p>
            </div>

            {/* Task Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-indigo-900/70 p-4 rounded-xl shadow-md border border-indigo-500">
                <p className="text-2xl font-bold">{totalTasks}</p>
                <p className="text-gray-400 text-sm">Total Tasks</p>
              </div>

              <div className="bg-green-900/70 border border-green-500 p-4 rounded-xl shadow-md">
                <p className="text-2xl font-bold">{completedTasks.length}</p>
                <p className="text-gray-400 text-sm">Completed</p>
              </div>

              <div className="bg-yellow-900/70 border border-yellow-500 p-4 rounded-xl shadow-md">
                <p className="text-2xl font-bold">
                  {tasks.filter((t) => !t.completed).length}
                </p>
                <p className="text-gray-400 text-sm">Pending</p>
              </div>
            </div>

            {/* ✅ Completed Tasks List */}
            <div>
              <h2 className="text-2xl font-semibold mt-10 mb-4">Completed Tasks</h2>

              {completedTasks.length === 0 ? (
                <p className="text-gray-500">No completed tasks yet.</p>
              ) : (
                <div className="space-y-3">
                  {completedTasks.map((task) => (
                    <div
                      key={task._id}
                      className="bg-slate-800 border border-green-600/40 rounded-lg p-4 flex justify-between items-start "
                    >
                      <div className="">
                        <h3 className="font-semibold text-lg text-green-400">
                          {task.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{task.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Completed on:{" "}
                          {new Date(task.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <span className="bg-green-700/30 text-green-300 text-xs px-2 py-1 rounded-md border border-green-600/40">
                        Done
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
