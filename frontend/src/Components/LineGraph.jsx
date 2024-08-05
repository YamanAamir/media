import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineGraph = ({ currentYearData, lastYearData, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Current Year Earnings",
        data: currentYearData,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)", // Teal color for current year
        borderColor: "rgba(75,192,192,1)", // Teal color for current year
        tension: 0.4,
      },
      {
        label: "Last Year Earnings",
        data: lastYearData,
        fill: false,
        backgroundColor: "rgba(255,182,193,0.2)", // Light pink color for last year
        borderColor: "rgba(255,182,193,1)", // Light pink color for last year
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "white", // X-axis label color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "white", // Y-axis label color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Legend label color
        },
      },
      tooltip: {
        titleColor: "white", // Tooltip title color
        bodyColor: "white", // Tooltip body color
      },
    },
  };

  return (
    <div className="p-4 bg-[#1C1C20] text-white shadow-md rounded-lg">
      <h2 className="text-2xl fontbold font-krona mb-4 text-center">Yearly Earnings</h2>
      <div className="relative h-52">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
