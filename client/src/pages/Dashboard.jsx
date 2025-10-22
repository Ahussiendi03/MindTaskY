// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p>Welcome to your dashboard!</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
