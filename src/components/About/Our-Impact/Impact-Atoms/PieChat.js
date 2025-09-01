import React from "react";
import {ReusablePieChart} from "@/components/shared/Atoms/Chats-Atoms/ReusablePiechat";

export  function PiChat() {
  const charts = [
    [
      { label: "Sales", value: 300, color: "#FF6384" },
      { label: "Marketing", value: 200, color: "#36A2EB" },
      { label: "Development", value: 150, color: "#FFCE56" },
    ],
    [
      { label: "Support", value: 100, color: "#4BC0C0" },
      { label: "Other", value: 50, color: "#9966FF" },
      { label: "Research", value: 180, color: "#FF9F40" },
    ],
    [
      { label: "HR", value: 120, color: "#FF6384" },
      { label: "Operations", value: 200, color: "#36A2EB" },
      { label: "Logistics", value: 80, color: "#FFCE56" },
    ],
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">


      {/* Grid layout for multiple pie charts */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {charts.map((chartData, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center"
          >
            <ReusablePieChart data={chartData} />
          </div>
        ))}
      </div>
    </div>
  );
}
