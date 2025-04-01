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

  // Calculate statistics when breweries or filters change
  useEffect(() => {
    if (breweries.length === 0) return; // Early exit if no breweries

    // Count brewery types
    const typesCount = breweries.reduce((acc, brewery) => {
      acc[brewery.brewery_type] = (acc[brewery.brewery_type] || 0) + 1;
      return acc;
    }, {});

    // Find most common type
    const mostCommonType = Object.keys(typesCount).reduce((a, b) =>
      typesCount[a] > typesCount[b] ? a : b
    );

    setMostCommonType(mostCommonType);

    // Calculate phone availability percentage
    const phoneAvailableCount = breweries.filter(
      (brewery) => brewery.phone
    ).length;

    setPhoneAvailability((phoneAvailableCount / breweries.length) * 100);
  }, [breweries]);

  // Handle min/max filter
  const handleFilter = () => {
    let count = breweries.length;

    if (minValue && maxValue) {
      const min = parseInt(minValue, 10);
      const max = parseInt(maxValue, 10);

      if (!isNaN(min) && !isNaN(max) && min <= max) {
        count = Math.max(min, Math.min(breweries.length, max));
      }
    }

    setFilteredBreweriesCount(count); // Update BreweryList component with new count
  };

  // Reset filters
  const clearFilters = () => {
    setMinValue("");
    setMaxValue("");
    // setFilteredBreweriesCount(breweries.length);
    clearStatFilters();
  };

  return (
    <div className="w-full p-6 bg-pink-200 shadow-lg rounded-xl mb-3">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-500">The Brewery ☕</h2>
        <p className="text-lg text-gray-800">
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
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="number"
          placeholder="Max Breweries"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
        >
          Apply Filter
        </button>
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Breweries */}
        <div className="stat-card p-6 bg-gray-50 shadow-lg rounded-xl text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Total Breweries
          </h3>
          <p className="text-3xl font-bold text-yellow-600">
            {filteredBreweriesCount}
          </p>
        </div>

        {/* Most Common Type */}
        <div className="stat-card p-6 bg-gray-50 shadow-lg rounded-xl text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Most Common Type
          </h3>
          <p className="text-3xl font-bold text-green-500 capitalize">
            {mostCommonType || "N/A"}
          </p>
        </div>

        {/* Phone Availability */}
        <div className="stat-card p-6 bg-gray-50 shadow-lg rounded-xl text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Phone Availability
          </h3>
          <p className="text-3xl font-bold text-blue-500">
            {phoneAvailability.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreweryStats;
