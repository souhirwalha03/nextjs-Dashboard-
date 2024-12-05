// // 'use client';
// // import React, { useState } from 'react';

// // const UserManagement = () => {
// //   // Sample user data
// //   const users = [
// //     { id: 1, name: 'John Doe', activity: 'Active' },
// //     { id: 2, name: 'Jane Smith', activity: 'Inactive' },
// //     { id: 3, name: 'Alice Johnson', activity: 'Active' },
// //     { id: 4, name: 'Bob Brown', activity: 'Inactive' },
// //     { id: 5, name: 'Charlie Davis', activity: 'Active' },
// //   ];

// //   // State for search filters
// //   const [search, setSearch] = useState('');
// //   const [filter, setFilter] = useState('All');

// //   // Filter users based on search term and activity filter
// //   const filteredUsers = users.filter((user) => {
// //     const nameMatches = user.name.toLowerCase().includes(search.toLowerCase());
// //     const activityMatches = filter === 'All' || user.activity === filter;
// //     return nameMatches && activityMatches;
// //   });

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold mb-4">User Management</h1>

// //       {/* Filters */}
// //       <div className="mb-4">
// //         <input
// //           type="text"
// //           placeholder="Search by name..."
// //           className="border px-4 py-2 rounded-md w-full md:w-1/3"
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //         <select
// //           value={filter}
// //           onChange={(e) => setFilter(e.target.value)}
// //           className="border px-4 py-2 rounded-md ml-4"
// //         >
// //           <option value="All">All Activities</option>
// //           <option value="Active">Active</option>
// //           <option value="Inactive">Inactive</option>
// //         </select>
// //       </div>

// //       {/* Table */}
// //       <table className="min-w-full table-auto border-collapse">
// //         <thead>
// //           <tr className="bg-gray-200">
// //             <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
// //             <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Activity</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredUsers.length === 0 ? (
// //             <tr>
// //               <td colSpan={2} className="px-6 py-3 text-center text-sm text-gray-500">
// //                 No users found.
// //               </td>
// //             </tr>
// //           ) : (
// //             filteredUsers.map((user) => (
// //               <tr key={user.id} className="border-b">
// //                 <td className="px-6 py-3 text-sm text-gray-700">{user.name}</td>
// //                 <td className="px-6 py-3 text-sm text-gray-700">{user.activity}</td>
// //               </tr>
// //             ))
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default UserManagement;
// 'use client';
// import React, { useState, useEffect } from 'react';

// const UserManagement = () => {
//   const [data, setData] = useState(null); // Stores fetched data
//   const [error, setError] = useState(null); // Stores any error message
//   const [loading, setLoading] = useState(true); // Loading state
//   const [search, setSearch] = useState(''); // Search input state
//   const [filter, setFilter] = useState('All'); // Filter state

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//   // Fetch users
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setData(data);  // Set the fetched data to state
//       setLoading(false);  // Set loading to false after data is fetched
//     } catch (error) {
//       setError('Error fetching users: ' + error.message);  // Handle error
//       setLoading(false);
//     }
//   };

//   // Fetch users once the component mounts
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Filter users based on search term and activity filter
//   const filteredUsers = data ? data.users.filter((user) => {
//     const nameMatches = user.name.toLowerCase().includes(search.toLowerCase());
//     const activityMatches = filter === 'All' || user.activity === filter;
//     return nameMatches && activityMatches;
//   }) : [];

//   if (loading) {
//     return <div className="p-6">Loading...</div>;
//   }

//   if (error) {
//     return <div className="p-6 text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">User Management</h1>

//       {/* Filters */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           className="border px-4 py-2 rounded-md w-full md:w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="border px-4 py-2 rounded-md ml-4"
//         >
//           <option value="All">All Activities</option>
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//       </div>

//       {/* Table */}
//       <table className="min-w-full table-auto border-collapse">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
//             <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.length === 0 ? (
//             <tr>
//               <td colSpan={2} className="px-6 py-3 text-center text-sm text-gray-500">
//                 No users found.
//               </td>
//             </tr>
//           ) : (
//             filteredUsers.map((user) => (
//               <tr key={user.id} className="border-b">
//                 <td className="px-6 py-3 text-sm text-gray-700">{user.name}</td>
//                 <td className="px-6 py-3 text-sm text-gray-700">{user.activity}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

/**.        */
// import React from "react";
// import UserAnalyticsChart from "../AnalyticsChart/page";

// // Fetch data from the API
// async function fetchData() {
//   const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
//   const data = await res.json();
//   return data;
// }

// const UserManagementPage = async () => {
//   const data = await fetchData();

//   // Process chart data
//   const dailyChartData = data.dashboard.userMetrics.daily.chartData.map(
//     (item) => ({
//       timestamp: item.timestamp,
//       count: item.count,
//       dataset: "Daily",
//     })
//   );
//   const monthlyChartData = data.dashboard.userMetrics.monthly.chartData.map(
//     (item) => ({
//       timestamp: item.timestamp,
//       count: item.count,
//       dataset: "Monthly",
//     })
//   );

//   const mergedChartData = [...dailyChartData, ...monthlyChartData].sort(
//     (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
//   );

//   // Monthly data (example)
//   const monthlyData = data.dashboard.userMetrics.monthly;

//   const DailyData = data.dashboard.userMetrics.daily;

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
//           {/* Daily Stats Box */}
//           <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//             <h3 className="text-xl font-semibold mb-4">Daily Statistics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">Total Users</h4>
//                 <p className="text-2xl text-gray-900">{DailyData.totalUser}</p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">
//                   Total Referrals
//                 </h4>
//                 <p className="text-2xl text-gray-900">
//                   {DailyData.totalReferral}
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">
//                   Active Users
//                 </h4>
//                 <p className="text-2xl text-gray-900">{DailyData.activeUser}</p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">Creators</h4>
//                 <p className="text-2xl text-gray-900">{DailyData.creator}</p>
//               </div>
//             </div>
//           </div>
//           {/* Monthly Stats Box */}
//           <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//             <h3 className="text-xl font-semibold mb-4">Monthly Statistics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">Total Users</h4>
//                 <p className="text-2xl text-gray-900">
//                   {monthlyData.totalUser}
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">
//                   Total Referrals
//                 </h4>
//                 <p className="text-2xl text-gray-900">
//                   {monthlyData.totalReferral}
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">
//                   Active Users
//                 </h4>
//                 <p className="text-2xl text-gray-900">
//                   {monthlyData.activeUser}
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow">
//                 <h4 className="text-lg font-bold text-gray-700">Creators</h4>
//                 <p className="text-2xl text-gray-900">{monthlyData.creator}</p>
//               </div>
//             </div>
//           </div>

//           {/* Analytics Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <UserAnalyticsChart chartData={mergedChartData} />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserManagementPage;

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
