
import StatisticsClientComponent from "./components/StatisticsClientComponent";

const EngagementPage = async () => {
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

export default EngagementPage;
