"use client";

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-date-fns"; // Import the date adapter

const AnalyticsChart = ({ chartData }) => {
  const dailyChartRef = useRef(null);
  const monthlyChartRef = useRef(null);

  const dailyChartInstance = useRef(null); // Reference for daily chart instance
  const monthlyChartInstance = useRef(null); // Reference for monthly chart instance

  useEffect(() => {
    // Handle Daily Chart
    if (dailyChartRef.current) {
      const dailyData = chartData.filter((item) => item.dataset === "Daily");
      
      const firstTimestamp = dailyData.length > 0 ? new Date(dailyData[0].timestamp).toLocaleDateString() : "Date Not Available";

      // Destroy the previous daily chart instance if it exists
      if (dailyChartInstance.current) {
        dailyChartInstance.current.destroy();
      }

      dailyChartInstance.current = new Chart(dailyChartRef.current, {
        type: "line",
        data: {
          labels: dailyData.map((item) => item.timestamp), // X-axis specific to Daily Activity
          datasets: [
            {
              label: "Activity",
              data: dailyData.map((item) => item.count),
              backgroundColor: "rgba(37, 99, 235, 0.5)",
              borderColor: "rgba(37, 99, 235, 1)",
              borderWidth: 2,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              bottom: 20, // Add padding specifically at the bottom
            },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit: "minute", // Adjust time unit as needed
              },
            },
            y: {
              title: {
                display: true,
                text: `${firstTimestamp} Activity`,
              },
            },
          },
        },
      });
    }

    // Handle Monthly Chart
    if (monthlyChartRef.current) {
      const monthlyData = chartData.filter((item) => item.dataset === "Monthly");

      // Destroy the previous monthly chart instance if it exists
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
      }

      monthlyChartInstance.current = new Chart(monthlyChartRef.current, {
        type: "line",
        data: {
          labels: monthlyData.map((item) => item.timestamp), // X-axis specific to Monthly Activity
          datasets: [
            {
              label: "Activity",
              data: monthlyData.map((item) => item.count),
              backgroundColor: "rgba(75, 192, 192, 0.5)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              bottom: 20, // Add padding specifically at the bottom
            },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day", // Adjust time unit as needed
              },
            },
            y: {
              title: {
                display: true,
                text: "2024 Monthly Activity",
              },
            },
          },
        },
      });
    }

    // Clean up both charts on unmount
    return () => {
      if (dailyChartInstance.current) {
        dailyChartInstance.current.destroy();
      }
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
      }
    };
  }, [chartData]); // Re-run effect when chartData changes

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Chart for Daily Activity */}
      <div className="w-full h-96 p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-bold mb-2">Daily Activity</h2>
        <canvas ref={dailyChartRef} />
      </div>

      {/* Chart for Monthly Activity */}
      <div className="w-full h-96 p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-bold mb-2">Monthly Activity</h2>
        <canvas ref={monthlyChartRef} />
      </div>
    </div>
  );
};

export default AnalyticsChart;
