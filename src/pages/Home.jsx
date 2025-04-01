import { useState, useEffect } from "react";
import BreweryDashboard from "../components/BreweryDashboard";
import { fetchBreweries } from "../api";

const Home = () => {
  const [breweries, setBreweries] = useState([]);
  const [filteredBreweriesCount, setFilteredBreweriesCount] = useState(10); // Default to 10 records

  useEffect(() => {
    const loadBreweries = async () => {
      try {
        const data = await fetchBreweries();
        setBreweries(data);
      } catch (error) {
        console.error("Failed to fetch breweries", error);
      }
    };

    loadBreweries();
  }, []);

  return (
    <div className="p-6">
      <BreweryDashboard
        breweries={breweries}
        filteredBreweriesCount={filteredBreweriesCount}
        setFilteredBreweriesCount={setFilteredBreweriesCount}
      />
    </div>
  );
};

export default Home;
