import React, { useState } from "react";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("admin");
  const [cameraOn, setCameraOn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === "student") {
      setCameraOn(true);
      // Mock login, then navigate to student dashboard
      setTimeout(() => navigate("/student"), 2000);
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              userType === "admin" ? "bg-blue-600 text-white" : "bg-gray-700"
            }`}
            onClick={() => setUserType("admin")}
          >
            Admin
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              userType === "student" ? "bg-blue-600 text-white" : "bg-gray-700"
            }`}
            onClick={() => setUserType("student")}
          >
            Student
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          {userType === "admin" ? (
            <>
              <input className="w-full p-2 rounded bg-gray-800" placeholder="Admin Username" required />
              <input className="w-full p-2 rounded bg-gray-800" placeholder="Password" type="password" required />
            </>
          ) : (
            <>
              <input className="w-full p-2 rounded bg-gray-800" placeholder="Student Name" required />
              <input className="w-full p-2 rounded bg-gray-800" placeholder="Student ID" required />
              <input className="w-full p-2 rounded bg-gray-800" placeholder="Password" type="password" required />
            </>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 flex justify-center items-center gap-2"
          >
            {userType === "student" && <Camera size={18} />}
            {userType === "student" ? "Login with Face Recognition" : "Login as Admin"}
          </button>
        </form>

        {cameraOn && userType === "student" && (
          <div className="mt-4 p-4 border border-blue-500 rounded-xl bg-black">
            <p className="text-center font-medium mb-2">Camera Preview</p>
            <div className="aspect-video w-full bg-black rounded-lg"></div>
          </div>
        )}

        <p className="text-center text-sm mt-2">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Register
            </span>
          </p>
      </div>

      
    </div>
  );
}
