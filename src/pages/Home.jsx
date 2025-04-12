import { useState, useEffect } from "react";
import BreweryDashboard from "../components/BreweryDashboard";
const Home = () => {
  const [breweries, setBreweries] = useState([]);
  const [filteredBreweriesCount, setFilteredBreweriesCount] = useState(10);

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
    <div>
      <BreweryDashboard
        breweries={breweries}
        filteredBreweriesCount={filteredBreweriesCount}
        setFilteredBreweriesCount={setFilteredBreweriesCount}
      />
    </div>
  );
};

export default Home;
