// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User , BarChart3, ListTodoIcon } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
    { name: "Task Management", icon: <ListTodoIcon size={20} />, path: "/task-management" },
    { name: "Progress", icon: <BarChart3 size={20} />, path: "/progress" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#0F172A] text-white flex flex-col justify-between p-5 
    border-r-2 border-indigo-900/50 shadow-[0_2px_20px_rgba(99,102,241,0.1)]">
      <div>

        <nav className="space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-indigo-700 hover:text-white"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
