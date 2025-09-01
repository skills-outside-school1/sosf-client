import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export   function ReusablePieChart({ data }) {
  // Validate props
  if (!Array.isArray(data) || data.some(item => !item.label || item.value === undefined || !item.color)) {
    console.error("Invalid data prop passed to ReusablePieChart");
    return <div>Error: Invalid data prop</div>;
  }

  // Extracting values for the chart
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 1,
        
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
      {/* Pie Chart */}
      <div className="flex justify-center">
        <div className="w-full max-w-lg h-auto">
          <Pie data={chartData} />
        </div>
      </div>

      {/* Chart Legend */}
      <div className="p-4 space-y-4">
        <h3 className="text-lg font-semibold">Key</h3>
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <span
                className="w-4 h-4 inline-block"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.label}</span>
            </span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
