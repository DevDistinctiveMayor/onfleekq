import React from "react";
import { Chart } from "react-google-charts";
import "./statistics.css";

export const data = [
  ["", "", "", "", ""],
  ["Nov", 15, 70, 30, 40],
  ["", 20, 60, 30, 60],
  ["Dec", 25, 80, 90, 50],
  ["", 25, 40, 80, 40],
  ["Jan", 20, 60, 38, 55],
  ["", 30, 100, 99, 55],
  ["Feb", 30, 65, 45, 55],
  ["", 30, 55, 30, 40],
  ["Mar", 60, 75, 50, 55],
  ["", 25, 65, 40, 55],
  ["Apr", 40, 70, 50, 70],
  ["", 30, 100, 99, 55],
  ["May", 30, 80, 50, 55],
  ["", 20, 60, 38, 55],
  ["Jun", 60, 73, 50, 40],
];

export const options = {
  title: "",
  legend: "none",
  bar: { groupWidth: "20%" }, // Remove space between bars.
  backgroundColor: "#DBEAFE", // Set background
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#4B0082" }, // Change falling (violet) candlestick color
    risingColor: { strokeWidth: 0, fill: "#ff0000" }, // Change rising (red) candlestick color
    candlestickStrokeColor: "#4B0082", // Change candlestick stroke color
  },
  hAxis: {
    title: "",
    textStyle: {
      color: "#333", // Text color for the axis labels
    },
    titleTextStyle: {
      color: "#333", // Text color for the axis title
    },
    gridlines: { color: "transparent", count: 5 }, // Adjust horizontal gridlines count
  },
  vAxis: {
    title: "",
    textStyle: {
      color: "#333", // Text color for the axis labels
    },
    titleTextStyle: {
      color: "#333", // Text color for the axis title
    },
    gridlines: { color: "transparent" }, // Remove vertical gridlines
  },
  chartArea: {
    left: 38, // Adjust left margin
    top: 70, // Adjust top margin
    width: "90%", // Adjust width
    height: "55%", // Adjust height
  },
};
export const additionalOptions = {
  series: {
    10: { type: "candlesticks" }, // Adjust the series type to 'candlesticks' for candlestick series
  },
  // Define additional options here if needed
};

function Statistics() {
  return (
    <div className="chart-container">
      {" "}
      {/* Apply custom CSS class */}
      <Chart
        chartType="CandlestickChart"
        height="370px"
        marginTop=""
        data={data}
        options={{ ...options, ...additionalOptions }}
      />
      {/* </div> */}
      <div class="">
        <div class="absolute lg:-mt-[22rem] lg:flex lg:ml-8 hidden lg:visible">
          <div>
            <p class="font-medium">Statistics</p>
          </div>

          <div class="">
            <select className="p-1 w-[5rem] rounded-xl h-[2rem] text-violet-800 ml-[30rem] bg-slate-300 lg:bg-white">
              <option>Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
