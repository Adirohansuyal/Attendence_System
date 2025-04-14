import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import StudentDashboard from "../pages/StudentDashboard"
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<LoginPage />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}