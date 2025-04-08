import React, { useState } from "react";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userType, setUserType] = useState("admin");
  const [mode, setMode] = useState("login");
  const [cameraOn, setCameraOn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "student" && mode === "login") {
      setCameraOn(true);
    }

    // Simulated login logic
    setTimeout(() => {
      navigate(userType === "admin" ? "/admin" : "/student");
    }, 1000);
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome !
        </h1>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              userType === "admin" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setUserType("admin");
              setCameraOn(false);
            }}
          >
            Admin
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              userType === "student" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setUserType("student");
              setCameraOn(false);
            }}
          >
            Student
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Full Name"
              type="text"
              required
            />
          )}

          {userType === "student" && (
            <input
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Student ID"
              type="text"
              required
            />
          )}

          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Username"
            type="text"
            required
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
            type="password"
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 flex justify-center items-center gap-2"
          >
            {userType === "student" && mode === "login" && <Camera size={18} />}
            {mode === "login"
              ? `Login as ${userType}`
              : `Register as ${userType}`}
          </button>

          <p
            className="text-sm text-center text-blue-700 cursor-pointer hover:underline"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setCameraOn(false);
            }}
          >
            {mode === "login"
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>

          {cameraOn && (
            <div className="mt-4 p-4 border border-blue-500 rounded-xl bg-white">
              <p className="text-center font-medium mb-2">Camera Preview</p>
              <div className="aspect-video w-full bg-black rounded-lg"></div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
