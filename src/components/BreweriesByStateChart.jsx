import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BreweriesByStateChart = ({ breweries = [] }) => {
  if (!Array.isArray(breweries) || breweries.length === 0) {
    return (
      <p className="text-gray-400">No brewery data available for chart.</p>
    );
  }

  const stateCounts = breweries.reduce((acc, brewery) => {
    const state = brewery.state;
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {});

  const sortedStates = Object.entries(stateCounts)
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10); // Top 10 states

  return (
    <div className="bg-[#2b2f4c] p-4 rounded-lg shadow-md ">
      <h3 className="text-xl text-purple-300 px-8 mb-4">
        Top 10 States by Number of Breweries
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={sortedStates}>
          <XAxis dataKey="state" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BreweriesByStateChart;
