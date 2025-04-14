import React from "react";
import CameraFeed from "../components/CameraFeed";
import StudentAttendance from "../components/StudentAttendence";
import { useNavigate } from "react-router-dom";


export default function StudentDashboard() {

  const navigate = useNavigate();
const handleLogout = () => {
  navigate("/login");
};


  return (
    <div className="h-screen w-screen bg-black text-white p-6 flex gap-6">
      <button
  onClick={handleLogout}
  className="absolute top-4 right-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
>
  Logout
</button>
      <CameraFeed />
      <StudentAttendance />
    </div>
  );
}