import React, { useState } from "react";

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

export default function AdminStudentList({ onMessage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-1/2 bg-gray-900 rounded-xl p-4 flex flex-col">
      <h3 className="text-xl font-semibold mb-4">Absent Students Today</h3>
      <input
        type="text"
        placeholder="Search student..."
        className="mb-4 p-2 w-full rounded text-white bg-gray-700 placeholder-gray-300"
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
              onClick={() => onMessage(student.name)}
              className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600"
            >
              Message Parent
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}