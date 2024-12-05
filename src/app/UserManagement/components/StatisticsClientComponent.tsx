"use client";

import { useState } from "react";
import AnalyticsChart from "../../../components/AnalyticsChart";

const UserManagementpage = ({ data }) => {
  const [view, setView] = useState("daily");

  // Process chart data
  const dailyChartData = data.dashboard.userMetrics.daily.chartData.map(
    (item) => ({
      timestamp: item.timestamp,
      count: item.count,
      dataset: "Daily",
    })
  );
  const monthlyChartData = data.dashboard.userMetrics.monthly.chartData.map(
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
    { title: "Total Users", value: data.dashboard.userMetrics.daily.totalUser },
    {
      title: "Total Referral",
      value: data.dashboard.userMetrics.daily.totalReferral,
    },
    {
      title: "Active User",
      value: data.dashboard.userMetrics.daily.activeUser,
    },
    { title: "Creator", value: data.dashboard.userMetrics.daily.creator },
  ];

  const monthlyStats = [
    {
      title: "Total Users",
      value: data.dashboard.userMetrics.monthly.totalUser,
    },
    {
      title: "Total Referral",
      value: data.dashboard.userMetrics.monthly.totalReferral,
    },
    {
      title: "Active User",
      value: data.dashboard.userMetrics.monthly.activeUser,
    },
    { title: "Creator", value: data.dashboard.userMetrics.monthly.creator },
  ];

  const stats = view === "daily" ? dailyStats : monthlyStats;

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <main className="p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">User Management Dashboard</h2>
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

export default UserManagementpage;
