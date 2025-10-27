import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/tasks/user-tasks",
          {
            withCredentials: true,
          }
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);


  const chartData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];


  const COLORS = ["#4ade80", "#facc15"]; // Green for completed, Yellow for pending

  return (
    <div className="flex min-h-screen bg-slate-900 text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-indigo-400">
          Dashboard Overview
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-indigo-600/20 border border-indigo-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <h2 className="text-lg font-semibold text-indigo-300">
              Total Tasks
            </h2>
            <p className="text-3xl font-bold mt-2">{total}</p>
          </div>

          <div className="bg-green-600/20 border border-green-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <h2 className="text-lg font-semibold text-green-300">Completed</h2>
            <p className="text-3xl font-bold mt-2">{completed}</p>
          </div>

          <div className="bg-yellow-600/20 border border-yellow-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <h2 className="text-lg font-semibold text-yellow-300">Pending</h2>
            <p className="text-3xl font-bold mt-2">{pending}</p>
          </div>
        </div>

        {/* Chart + Progress Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Progress Bar */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-indigo-700 shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">
              Overall Progress
            </h2>
            <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
              <div
                className="bg-indigo-500 h-4 transition-all duration-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {progress}% of your tasks are completed
            </p>
          </div>

          {/* Pie Chart */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-indigo-700 shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">
              Task Completion Chart
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
          <h2 className="text-xl font-semibold text-indigo-300 mb-4">
            Recent Tasks
          </h2>

          {tasks.length === 0 ? (
            <p className="text-gray-500">
              No tasks yet. Create your first one!
            </p>
          ) : (
            <ul className="space-y-4">
              {tasks.slice(0, 5).map((task) => (
                <li
                  key={task._id}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    task.completed
                      ? "bg-green-900/20 border-green-600/40 line-through opacity-70"
                      : "bg-slate-900/50 border-slate-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">
                        {task.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {task.description}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-md ${
                        task.completed
                          ? "bg-green-600/30 text-green-400 border border-green-500/30"
                          : "bg-yellow-600/30 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {task.completed ? "Completed" : "Pending"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
