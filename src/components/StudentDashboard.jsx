import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [isCameraOn, setIsCameraOn] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const handleDownload = () => {
    alert("Downloading attendance...");
  };

  const handleStartCamera = () => {
    setIsCameraOn(true);
    console.log("Camera started"); // Placeholder: Add real camera logic
  };

  const handleStopCamera = () => {
    setIsCameraOn(false);
    console.log("Camera stopped"); // Placeholder: Add real camera stop logic
  };

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Student Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 gap-6">
        {/* Left: Camera Feed */}
        <div className="w-1/2 bg-gray-900 rounded-xl p-4 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Camera Feed</h3>
          
          {/* Camera Preview */}
          <div className="w-full aspect-video bg-black rounded-lg border border-gray-700 mb-6 flex items-center justify-center text-gray-500">
            {isCameraOn ? "Camera Streaming..." : "Camera is Off"}
          </div>

          {/* Camera Controls */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleStartCamera}
              className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
            >
              Start
            </button>
            <button
              onClick={handleStopCamera}
              className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black font-semibold"
            >
              Stop
            </button>
          </div>
        </div>

        {/* Right: Attendance Info */}
        <div className="w-1/2 bg-gray-900 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Attendance</h3>
            <ul className="space-y-2">
              <li className="bg-gray-800 p-3 rounded">📅 01 April - ✅ Present</li>
              <li className="bg-gray-800 p-3 rounded">📅 02 April - ❌ Absent</li>
              <li className="bg-gray-800 p-3 rounded">📅 03 April - ✅ Present</li>
            </ul>
          </div>
          <button
            onClick={handleDownload}
            className="mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Download Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
