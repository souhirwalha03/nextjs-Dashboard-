"use client";

import { useState } from "react";
import AnalyticsChart from "../../../components/AnalyticsChart";

const StatisticsClientComponent = ({ data }) => {
  const [view, setView] = useState("daily");

  // Process chart data
  const dailyChartData = data.dashboard.contentMetrics.daily.chartData.map(
    (item) => ({
      timestamp: item.timestamp,
      count: item.count,
      dataset: "Daily",
    })
  );
  const monthlyChartData = data.dashboard.contentMetrics.monthly.chartData.map(
    (item) => ({
      timestamp: item.timestamp,
      count: item.count,
      dataset: "Monthly",
    })
  );
  const mergedChartData = [...dailyChartData, ...monthlyChartData].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );
  const dailyStats = [
    {
      title: "Total Posts",
      value: data.dashboard.contentMetrics.daily.totalPosts,
    },
    {
      title: "Total Category",
      value: data.dashboard.contentMetrics.daily.totalCategory,
    },
    {
      title: "Total Post Exit Count",
      value: data.dashboard.contentMetrics.daily.totalPostExitCount,
    },
    {
      title: "Total Post Shares",
      value: data.dashboard.contentMetrics.daily.totalPostShares,
    },
    {
      title: "Total Views",
      value: data.dashboard.contentMetrics.daily.totalViews,
    },
    {
      title: "Total Comments",
      value: data.dashboard.contentMetrics.daily.totalComments,
    },
    {
      title: "Total Post Blocked",
      value: data.dashboard.contentMetrics.daily.totalPostBlocked,
    },
    {
      title: "Total Post Deleted",
      value: data.dashboard.contentMetrics.daily.totalPostDeleted,
    },
  ];

  const monthlyStats = [
    {
      title: "Total Posts",
      value: data.dashboard.contentMetrics.monthly.totalPosts,
    },
    {
      title: "Total Category",
      value: data.dashboard.contentMetrics.monthly.totalCategory,
    },
    {
      title: "Total Post Exit Count",
      value: data.dashboard.contentMetrics.monthly.totalPostExitCount,
    },
    {
      title: "Total Post Shares",
      value: data.dashboard.contentMetrics.monthly.totalPostShares,
    },
    {
      title: "Total Views",
      value: data.dashboard.contentMetrics.monthly.totalViews,
    },
    {
      title: "Total Comments",
      value: data.dashboard.contentMetrics.monthly.totalComments,
    },
    {
      title: "Total Post Blocked",
      value: data.dashboard.contentMetrics.monthly.totalPostBlocked,
    },
    {
      title: "Total Post Deleted",
      value: data.dashboard.contentMetrics.monthly.totalPostDeleted,
    },
  ];

  const stats = view === "daily" ? dailyStats : monthlyStats;

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <main className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">
            Content Management Dashboard
          </h2>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md font-semibold ${
                view === "daily"
                  ? "bg-slate-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setView("daily")}
            >
              Daily
            </button>
            <button
              className={`px-4 py-2 rounded-md font-semibold ${
                view === "monthly"
                  ? "bg-slate-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setView("monthly")}
            >
              Monthly
            </button>
          </div>

          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">
              {view.charAt(0).toUpperCase() + view.slice(1)} Statistics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r bg-slate-400 bg-slate-400 bg-slate-400 p-4 rounded-lg text-white shadow"
                >
                  <h4 className="text-lg font-bold">{stat.title}</h4>
                  <p className="text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Analytics Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AnalyticsChart chartData={mergedChartData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StatisticsClientComponent;
