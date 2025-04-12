import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#00c49f",
  "#d0ed57",
];

const BreweryTypeChart = ({ breweries = [] }) => {
  if (!Array.isArray(breweries) || breweries.length === 0) {
    return (
      <p className="text-gray-400">No brewery data available for chart.</p>
    );
  }

  const typeCounts = breweries.reduce((acc, brewery) => {
    const type = brewery.brewery_type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(typeCounts).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  return (
    <div className="bg-[#2b2f4c] p-4 rounded-lg shadow-md">
      <h3 className="text-xl text-purple-300 mb-4">
        Brewery Type Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BreweryTypeChart;
