import { Link } from "react-router-dom";

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
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-amber mb-4">Brewery List</h2>

      <div className="mb-4 flex flex-wrap items-center gap-4">
        {/*Filter by city */}
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg"
          placeholder="Filter by city..."
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        />

        {/* Category Filter (Dropdown for Brewery Type) */}
        <select
          className="flex-1 p-2 border border-gray-300 rounded-lg"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)} // Update category filter
        >
          <option value="">All Brewery Types</option>
          <option value="micro">Microbrewery</option>
          <option value="brewpub">Brewpub</option>
          <option value="nano">Nanobrewery</option>
          <option value="regional">Regional Brewery</option>
          <option value="large">Large Brewery</option>
        </select>
      </div>

      {/* State Filter (Radio buttons for state selection, in a new row) */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <h3 className="font-semibold text-lg">Filter by State</h3>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="California"
              checked={stateFilter === "California"}
              onChange={() => setStateFilter("California")}
            />
            California
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Colorado"
              checked={stateFilter === "Colorado"}
              onChange={() => setStateFilter("Colorado")}
            />
            Colorado
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Oregon"
              checked={stateFilter === "Oregon"}
              onChange={() => setStateFilter("Oregon")}
            />
            Oregon
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Washington"
              checked={stateFilter === "Washington"}
              onChange={() => setStateFilter("Washington")}
            />
            Washington
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Texas"
              checked={stateFilter === "Texas"}
              onChange={() => setStateFilter("Texas")}
            />
            Texas
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="New York"
              checked={stateFilter === "New York"}
              onChange={() => setStateFilter("New York")}
            />
            New York
          </label>
        </div>
        <button
          onClick={clearFilters}
          className="mb-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Clear All Filters
        </button>
      </div>

      {filteredBreweries.length > 0 ? (
        <table className="w-full border-collapse border border-gray-200 mt-6">
          <thead>
            <tr className="bg-pink-200">
              <th className="border p-2 text-left">Brewery Name</th>
              <th className="border p-2 text-left">Brewery Type</th>
              <th className="border p-2 text-left">City</th>
              <th className="border p-2 text-left">State</th>
            </tr>
          </thead>
          <tbody>
            {filteredBreweries.map((brewery) => (
              <tr key={brewery.id} className="hover:bg-gray-100">
                <td className="border p-2">
                  <Link
                    to={`/brewery/${brewery.id}`}
                    className="text-breweryGreen hover:underline"
                  >
                    {brewery.name}
                  </Link>
                </td>
                <td className="border p-2">{brewery.brewery_type}</td>
                <td className="border p-2">{brewery.city}</td>
                <td className="border p-2">{brewery.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center p-4">No results found.</p>
      )}
    </div>
  );
};

export default BreweryList;
