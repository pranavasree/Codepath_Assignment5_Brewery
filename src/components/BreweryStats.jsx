import { useState, useEffect } from "react";

const BreweryStats = ({
  breweries,
  filteredBreweriesCount,
  setFilteredBreweriesCount,
  clearStatFilters,
}) => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [mostCommonType, setMostCommonType] = useState("");
  const [phoneAvailability, setPhoneAvailability] = useState(0);

  useEffect(() => {
    if (breweries.length === 0) return;

    const typesCount = breweries.reduce((acc, brewery) => {
      acc[brewery.brewery_type] = (acc[brewery.brewery_type] || 0) + 1;
      return acc;
    }, {});

    const mostCommonType = Object.keys(typesCount).reduce((a, b) =>
      typesCount[a] > typesCount[b] ? a : b
    );

    setMostCommonType(mostCommonType);

    const phoneAvailableCount = breweries.filter(
      (brewery) => brewery.phone
    ).length;

    setPhoneAvailability((phoneAvailableCount / breweries.length) * 100);
  }, [breweries]);

  const handleFilter = () => {
    let count = breweries.length;

    if (minValue && maxValue) {
      const min = parseInt(minValue, 10);
      const max = parseInt(maxValue, 10);

      if (!isNaN(min) && !isNaN(max) && min <= max) {
        count = Math.max(min, Math.min(breweries.length, max));
      }
    }

    setFilteredBreweriesCount(count);
  };

  const clearFilters = () => {
    setMinValue("");
    setMaxValue("");
    clearStatFilters();
  };

  return (
    <div className="w-full p-6 bg-gradient-to-br from-[#1a1f3c] to-[#0e1328] text-white shadow-xl rounded-xl backdrop-blur-md mb-6">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-purple-300">The Brewery ☕</h2>
        <p className="text-lg text-gray-300">
          Quick overview of the brewery data
        </p>
      </div>

      {/* Min and Max filter */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="number"
          placeholder="Min Breweries"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
          className="p-2 w-48 rounded-lg bg-[#2b2f4c] text-white placeholder-gray-400 border border-purple-600 focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="number"
          placeholder="Max Breweries"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
          className="p-2 w-48 rounded-lg bg-[#2b2f4c] text-white placeholder-gray-400 border border-purple-600 focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-600 transition"
        >
          Apply Filter
        </button>
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
        >
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Breweries */}
        <div className="p-6 bg-[#2b2f4c] border border-purple-600 rounded-xl text-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-300 mb-1">
            Total Breweries
          </h3>
          <p className="text-3xl font-bold text-purple-300">
            {filteredBreweriesCount}
          </p>
        </div>

        {/* Most Common Type */}
        <div className="p-6 bg-[#2b2f4c] border border-purple-600 rounded-xl text-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-300 mb-1">
            Most Common Type
          </h3>
          <p className="text-3xl font-bold text-green-400 capitalize">
            {mostCommonType || "N/A"}
          </p>
        </div>

        {/* Phone Availability */}
        <div className="p-6 bg-[#2b2f4c] border border-purple-600 rounded-xl text-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-300 mb-1">
            Phone Availability
          </h3>
          <p className="text-3xl font-bold text-sky-400">
            {phoneAvailability.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreweryStats;
