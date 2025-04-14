import React from "react";

export default function StudentAttendance() {
  return (
    <div className="bg-gray-900 p-4 rounded-xl w-1/2">
      <h2 className="text-xl font-semibold mb-4">Attendance Records</h2>
      <ul className="space-y-2">
        <li className="bg-gray-800 p-2 rounded">🗓️ 08-April: Present</li>
        <li className="bg-gray-800 p-2 rounded">🗓️ 09-April: Present</li>
        <li className="bg-gray-800 p-2 rounded">🗓️ 10-April: Absent</li>
        <li className="bg-gray-800 p-2 rounded">🗓️ 11-April: Present</li>
      </ul>
      <button className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
        Download Attendance
      </button>
    </div>
  );
}
