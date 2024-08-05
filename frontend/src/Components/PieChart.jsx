import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";

const PieChart = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(70, 130, 180, 0.8)", // Steel Blue
          "rgba(255, 165, 0, 0.8)", // Orange
          "rgba(154, 205, 50, 0.8)", // Yellow Green
          "rgba(220, 20, 60, 0.8)",  // Crimson
        ],
        borderColor: [
          "rgba(70, 130, 180, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(154, 205, 50, 1)",
          "rgba(220, 20, 60, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right", // Move the legend to the right side
        align: "center", // Center-align the text in the legend
        labels: {
          color: "white", // Legend text color
          usePointStyle: true, // Display the legend as a list of colored circles
          padding: 20, // Add padding between items
          boxWidth: 20, // Size of the color box
          font: {
            size: 16, // Increase font size
          },
        },
      },
      tooltip: {
        titleColor: "white", // Tooltip title color
        bodyColor: "white",  // Tooltip body color
      },
    },
  };

  return (
    <div className="p-4 bg-[#1C1C20] text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-krona mb-4 text-center">Monthly Uploads</h2>
      <div className="relative h-52">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;

