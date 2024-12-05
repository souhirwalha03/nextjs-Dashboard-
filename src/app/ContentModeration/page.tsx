// import React from "react";
// import UserAnalyticsChart from "../AnalyticsChart/page";

// // Fetch data from the API
// async function fetchData() {
//   const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
//   const data = await res.json();
//   return data;
// }

// const ContentModerationPage = async () => {
//   const data = await fetchData();

//   // Process chart data
//   const dailyChartData = data.dashboard.contentMetrics.daily.chartData.map(
//     (item) => ({
//       timestamp: item.timestamp,
//       count: item.count,
//       dataset: "Daily",
//     })
//   );
//   const monthlyChartData = data.dashboard.contentMetrics.monthly.chartData.map(
//     (item) => ({
//       timestamp: item.timestamp,
//       count: item.count,
//       dataset: "Monthly",
//     })
//   );

//   const mergedChartData = [...dailyChartData, ...monthlyChartData].sort(
//     (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
//   );

//   const dailyStats = [
//     {
//       title: "Total Posts",
//       value: data.dashboard.contentMetrics.daily.totalPosts,
//     },
//     {
//       title: "Total Category",
//       value: data.dashboard.contentMetrics.daily.totalCategory,
//     },
//     {
//       title: "Total Post Exit Count",
//       value: data.dashboard.contentMetrics.daily.totalPostExitCount,
//     },
//     {
//       title: "Total Post Shares",
//       value: data.dashboard.contentMetrics.daily.totalPostShares,
//     },
//     {
//       title: "Total Views",
//       value: data.dashboard.contentMetrics.daily.totalViews,
//     },
//     {
//       title: "Total Comments",
//       value: data.dashboard.contentMetrics.daily.totalComments,
//     },
//     {
//       title: "Total Post Blocked",
//       value: data.dashboard.contentMetrics.daily.totalPostBlocked,
//     },
//     {
//       title: "Total Post Deleted",
//       value: data.dashboard.contentMetrics.daily.totalPostDeleted,
//     },
//   ];

//   const monthlyStats = [
//     {
//       title: "Total Posts",
//       value: data.dashboard.contentMetrics.monthly.totalPosts,
//     },
//     {
//       title: "Total Category",
//       value: data.dashboard.contentMetrics.monthly.totalCategory,
//     },
//     {
//       title: "Total Post Exit Count",
//       value: data.dashboard.contentMetrics.monthly.totalPostExitCount,
//     },
//     {
//       title: "Total Post Shares",
//       value: data.dashboard.contentMetrics.monthly.totalPostShares,
//     },
//     {
//       title: "Total Views",
//       value: data.dashboard.contentMetrics.monthly.totalViews,
//     },
//     {
//       title: "Total Comments",
//       value: data.dashboard.contentMetrics.monthly.totalComments,
//     },
//     {
//       title: "Total Post Blocked",
//       value: data.dashboard.contentMetrics.monthly.totalPostBlocked,
//     },
//     {
//       title: "Total Post Deleted",
//       value: data.dashboard.contentMetrics.monthly.totalPostDeleted,
//     },
//   ];
//   const StatsCard = ({ title, value }) => (
//     <div className="bg-gray-100 p-4 rounded-lg shadow">
//       <h4 className="text-lg font-bold text-gray-700">{title}</h4>
//       <p className="text-2xl text-gray-900">{value}</p>
//     </div>
//   );
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Fixed Sidebar */}
//       <div className="fixed inset-y-0 left-0 bg-white shadow-lg w-64 p-6">
//         <h2 className="text-2xl font-bold">Menu</h2>
//         <ul className="mt-6">
//           <li className="py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
//             Dashboard
//           </li>
//           <li className="py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
//             Analytics
//           </li>
//           <li className="py-2 px-4 rounded hover:bg-gray-200 cursor-pointer">
//             Settings
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-64 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
//           <h1 className="text-xl font-semibold">My Web App</h1>
//         </header>

//         {/* Content */}
//         <main className="p-6 overflow-y-auto">
//           <h2 className="text-2xl font-bold mb-4">User Management Dashboard</h2>

//           {/* Daily Stats */}
//           <section className="bg-white p-6 rounded-lg shadow-md mb-6">
//             <h3 className="text-xl font-semibold mb-4">Daily Statistics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               {dailyStats.map((stat, index) => (
//                 <StatsCard key={index} title={stat.title} value={stat.value} />
//               ))}
//             </div>
//           </section>

//           {/* Monthly Stats */}
//           <section className="bg-white p-6 rounded-lg shadow-md mb-6">
//             <h3 className="text-xl font-semibold mb-4">Monthly Statistics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               {monthlyStats.map((stat, index) => (
//                 <StatsCard key={index} title={stat.title} value={stat.value} />
//               ))}
//             </div>
//           </section>
//           {/* Analytics Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <UserAnalyticsChart chartData={mergedChartData} />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ContentModerationPage;

import StatisticsClientComponent from "./components/StatisticsClientComponent";

const ContentModerationPage = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-red-500">
          Error loading data.
        </p>
      </div>
    );
  }

  const data = await response.json();

  return <StatisticsClientComponent data={data} />;
};

export default ContentModerationPage;
