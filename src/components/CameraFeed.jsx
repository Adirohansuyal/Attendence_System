import React, { useState } from "react";

export default function CameraFeed() {
  const [cameraOn, setCameraOn] = useState(false);

  return (
    <div className="bg-gray-900 p-4 rounded-xl w-1/2">
      <h2 className="text-xl font-semibold mb-4">Camera Feed</h2>
      <div className="aspect-video bg-black rounded mb-4"></div>
      <div className="flex gap-4">
        <button
          onClick={() => setCameraOn(true)}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Start
        </button>
        <button
          onClick={() => setCameraOn(false)}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Stop
        </button>
      </div>
    </div>
  );
}