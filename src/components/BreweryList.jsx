import { Link } from "react-router-dom";
import BreweryTypeChart from "./BreweryTypeChart";
import BreweriesByStateChart from "./BreweriesByStateChart";
import { useState } from "react";

const BreweryList = ({
  breweries,
  filteredCount,
  searchQuery,
  categoryFilter,
  setCategoryFilter,
  cityFilter,
  setCityFilter,
  stateFilter,
  setStateFilter,
  clearFilters,
}) => {
  const [visibleComponent, setVisibleComponent] = useState("both"); // <-- Moved here!

  const filteredBreweries = breweries
    .filter(
      (brewery) =>
        brewery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brewery.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brewery.state.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((brewery) =>
      !categoryFilter ? true : brewery.brewery_type === categoryFilter
    )
    .filter((brewery) =>
      !cityFilter
        ? true
        : brewery.city.toLowerCase() === cityFilter.toLowerCase()
    )
    .filter((brewery) =>
      !stateFilter
        ? true
        : brewery.state.toLowerCase() === stateFilter.toLowerCase()
    )
    .slice(0, filteredCount);

  return (
    <div className="p-6 bg-gradient-to-br from-[#1a1f3c] to-[#0e1328] text-white shadow-xl rounded-xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-purple-300 mb-6 tracking-wide">
        Brewery Dashboard
      </h2>

      {/* Charts Toggle Section */}
      <div className="flex gap-4 mb-8 justify-center items-center">
        <button
          onClick={() => setVisibleComponent("a")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Show Pie Chart
        </button>
        <button
          onClick={() => setVisibleComponent("b")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Show Bar Chart
        </button>
        <button
          onClick={() => setVisibleComponent("none")}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Hide Both
        </button>
        <button
          onClick={() => setVisibleComponent("both")}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-gray-700"
        >
          Show Both
        </button>
      </div>

      {/* Chart Rendering Section */}
      {visibleComponent === "a" && (
        <div className="flex justify-center mb-10">
          <div className="w-full md:w-2/3">
            <BreweryTypeChart breweries={filteredBreweries} />
          </div>
        </div>
      )}

      {visibleComponent === "b" && (
        <div className="flex justify-center mb-10">
          <div className="w-full md:w-2/3">
            <BreweriesByStateChart breweries={filteredBreweries} />
          </div>
        </div>
      )}

      {visibleComponent === "both" && (
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <BreweryTypeChart breweries={filteredBreweries} />
          <BreweriesByStateChart breweries={filteredBreweries} />
        </div>
      )}

      {/* Filter Section */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-[#2b2f4c] text-white placeholder-gray-400 border border-purple-600 focus:ring-2 focus:ring-purple-400"
          placeholder="Filter by city..."
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        />

        <select
          className="flex-1 p-2 rounded-lg bg-[#2b2f4c] text-white border border-purple-600 focus:ring-2 focus:ring-purple-400"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Brewery Types</option>
          <option value="micro">Microbrewery</option>
          <option value="brewpub">Brewpub</option>
          <option value="nano">Nanobrewery</option>
          <option value="regional">Regional Brewery</option>
          <option value="large">Large Brewery</option>
        </select>
      </div>

      {/* State Filter */}
      <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex flex-wrap gap-4 items-center">
          <h3 className="font-semibold text-lg text-purple-200">
            Filter by State:
          </h3>
          {[
            "California",
            "Colorado",
            "Oregon",
            "Washington",
            "Texas",
            "New York",
          ].map((state) => (
            <label
              key={state}
              className="flex items-center gap-2 text-gray-300"
            >
              <input
                type="radio"
                value={state}
                checked={stateFilter === state}
                onChange={() => setStateFilter(state)}
              />
              {state}
            </label>
          ))}
        </div>
        <button
          onClick={clearFilters}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Clear All Filters
        </button>
      </div>

      {/* Brewery Table */}
      {filteredBreweries.length > 0 ? (
        <table className="w-full border border-purple-800 text-left rounded-lg overflow-hidden shadow-md">
          <thead className="bg-purple-800 text-white">
            <tr>
              <th className="p-3">Brewery Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">City</th>
              <th className="p-3">State</th>
            </tr>
          </thead>
          <tbody className="bg-[#1e223f]">
            {filteredBreweries.map((brewery) => (
              <tr key={brewery.id} className="hover:bg-[#2a2e4c] transition">
                <td className="p-3">
                  <Link
                    to={`/brewery/${brewery.id}`}
                    className="text-blue-300 hover:underline"
                  >
                    {brewery.name}
                  </Link>
                </td>
                <td className="p-3 capitalize text-gray-300">
                  {brewery.brewery_type}
                </td>
                <td className="p-3 text-gray-300">{brewery.city}</td>
                <td className="p-3 text-gray-300">{brewery.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center p-6 text-gray-400">No results found.</p>
      )}
    </div>
  );
};

export default BreweryList;
