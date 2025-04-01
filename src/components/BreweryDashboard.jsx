import { useState, useEffect } from "react";
import BreweryStats from "./BreweryStats";
import BreweryList from "./BreweryList";
import { fetchBreweries } from "../api";

const BreweryDashboard = () => {
  const [breweries, setBreweries] = useState([]);
  const [filteredBreweriesCount, setFilteredBreweriesCount] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBreweries();
      setBreweries(data);
    };

    fetchData();
  }, []);

  // Function to clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setCityFilter("");
    setStateFilter("");
    setFilteredBreweriesCount(10); // Reset to default count
  };

  return (
    <div className="p-6">
      <BreweryStats
        breweries={breweries}
        setFilteredBreweriesCount={setFilteredBreweriesCount}
        filteredBreweriesCount={filteredBreweriesCount} // Pass filtered breweries count to stats
        clearStatFilters={clearFilters}
      />
      <BreweryList
        breweries={breweries}
        filteredCount={filteredBreweriesCount}
        searchQuery={searchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}
        clearFilters={clearFilters} // Pass clear function
      />
    </div>
  );
};

export default BreweryDashboard;
