import Image from "next/image";

export default function Home() {
  return (
    <main>
           {/* Hero Section */}
           <section className="flex flex-col items-center justify-center bg-slate-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
        <p className="text-lg text-gray-700 mb-8">
          A powerful tool for managing users and moderating content effectively.
        </p>
        <div className="flex gap-4 justify-center mt-8">
  <a
    href="/UserManagement"
    className="px-6 py-3 bg-slate-400 text-white rounded-lg shadow-md hover:bg-slate-500"
  >
    User Management Dashboard
  </a>
  <a
    href="/ContentModeration"
    className="px-6 py-3 bg-slate-400 text-white rounded-lg shadow-md hover:bg-slate-500"
  >
    Content Management Dashboard
          </a>
          <a
    href="/engagement"
    className="px-6 py-3 bg-slate-400 text-white rounded-lg shadow-md hover:bg-slate-500"
  >
    Engagement Dashboard
  </a>
</div>

      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white">
        <h3 className="text-2xl font-bold text-center mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-2">User Management</h4>
            <p className="text-gray-700">
            Easily view & track activity, referrals, and identify active users or creators.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-2">Content Moderation</h4>
            <p className="text-gray-700">
              Review and moderate content seamlessly with real-time analytics.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-2">Analytics Dashboard</h4>
            <p className="text-gray-700">
              Gain insights into user behavior with detailed charts and reports.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
