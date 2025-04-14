import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ title }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      <button
        onClick={() => navigate("/login")}
        className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
