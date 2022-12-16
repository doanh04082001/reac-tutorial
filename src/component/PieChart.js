// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container w-44 h-auto">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
