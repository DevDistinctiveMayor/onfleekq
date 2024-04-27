import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TimeGraph = () => {
  // Sample data for the chart
  const data = {
    labels: [
      "1h 10min",
      "2 20min",
      "3h 30min",
      "4h 40min",
      "5h 10min",
      "6h 40min",
      "7h 10min",
      "8h 20min",
    ], // Time points

    datasets: [
      {
        label: "",
        data: [22, 23, 22.5, 23.5, 23, 23.5, 25], // Sample temperature data
        borderColor: "rgb(255, 0, 0)",
        borderWidth: 1,
        fill: false,
        backgroundColor: "white",
        pointRadius: 3, // Adjust the size of the data points
      },
    ],
  };

  // Chart.js options
  const options = {
    plugins: {
      tooltip: {
        backgroundColor: "rgba(255, 0, 0, 0.8)", // Red background color for the tooltip
        displayColors: false, // Hide color boxes in the tooltip
        callbacks: {
          time: function (context) {
            return `${context.dataset.label}: ${context.parsed.y} `; // Customize tooltip label
          },
          time: function (context) {
            const timeIndex = context.dataIndex; // Get the index of the data point
            return `Time: ${data.labels[timeIndex]}`; // Display time from labels array
          },
        },
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
  };

  return (
    <div className="ml-5 h-[18.7rem] w-[23rem] shadow-slate-300 shadow-xl rounded-[10px] p-5">
      <div class="mt-4">
        <h2 className="font-medium">Spent time</h2>
        <Line data={data} options={options} />
        <div class="flex gap-7 mt-[2rem] font-medium text-sm">
          <p>Sun</p>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
          <p class="text-red-500">Fri</p>
          <p>Sat</p>
        </div>
      </div>
    </div>
  );
};

export default TimeGraph;
