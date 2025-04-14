import React from "react";
import { useNavigate } from "react-router-dom";
import AdminStudentList from "../components/AdminStudentList";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleDownload = () => {
    alert("Attendance downloaded!");
  };

  const handleMessageParent = (studentName) => {
    alert(`Message sent to parent of ${studentName}`);
  };

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-1 gap-6 overflow-hidden">
        <AdminStudentList onMessage={handleMessageParent} />
        <div className="w-1/2 bg-gray-900 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Attendance Analysis</h3>
            <ul className="space-y-2">
              <li className="bg-gray-800 p-3 rounded">📊 Total Students: 60</li>
              <li className="bg-gray-800 p-3 rounded">✅ Present Today: 54</li>
              <li className="bg-gray-800 p-3 rounded">❌ Absent Today: 6</li>
              <li className="bg-gray-800 p-3 rounded">📅 Average Attendance: 91%</li>
            </ul>
          </div>
          <button
            onClick={handleDownload}
            className="mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Download Attendance Report
          </button>
        </div>
      </div>
    </div>
  );
}