import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userType, setUserType] = useState("admin");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Backend integration here
    alert(`${userType} registered successfully`);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

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

        <form className="space-y-4" onSubmit={handleRegister}>
          {userType === "admin" ? (
            <>
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Admin Username"
                required
              />
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                type="password"
                placeholder="Password"
                required
              />
            </>
          ) : (
            <>
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Student Name"
                required
              />
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Student ID"
                required
              />
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                type="password"
                placeholder="Password"
                required
              />
            </>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Register
          </button>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
