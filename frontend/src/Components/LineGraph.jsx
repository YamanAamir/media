import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineGraph = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Monthly Earnings",
        data: data,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Monthly Earnings</h2>
      <div className="relative h-52">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
