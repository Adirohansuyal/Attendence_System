import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    { name: "Rahul Sharma", id: "101" },
    { name: "Sneha Mehta", id: "104" },
    { name: "Amit Patel", id: "109" },
    { name: "Pooja Singh", id: "112" },
    { name: "Karan Verma", id: "115" },
    { name: "Neha Gupta", id: "118" },
    { name: "Ravi Kumar", id: "120" },
    { name: "Simran Kaur", id: "123" },
    { name: "Vikas Yadav", id: "126" },
    { name: "Aarav Jain", id: "129" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const handleDownload = () => {
    alert("Attendance downloaded!");
  };

  const handleMessageParent = (studentName) => {
    alert(`Message sent to parent of ${studentName}`);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 gap-6 overflow-hidden">
        {/* Left: Absent Students */}
        <div className="w-1/2 bg-gray-900 rounded-xl p-4 flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Absent Students Today</h3>

          <input
            type="text"
            placeholder="Search student..."
            className="mb-4 p-2 w-full rounded text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="overflow-y-auto flex-1 space-y-3 pr-2">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="bg-gray-800 p-3 rounded flex justify-between items-center"
              >
                <div>
                  🧑 {student.name} - ID: {student.id}
                </div>
                <button
                  onClick={() => handleMessageParent(student.name)}
                  className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Message Parent
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Actions & Analysis */}
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
