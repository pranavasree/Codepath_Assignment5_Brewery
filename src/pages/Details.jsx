import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBreweryById } from "../api";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // Get brewery id from URL
  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchBreweryById(id);
        setBrewery(data);
      } catch (err) {
        setError("Failed to fetch brewery details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white/10 text-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-pink-300 mb-4">
        The {brewery.name} Details
      </h2>
      <div className="space-y-2">
        <p>
          <strong>Type:</strong> {brewery.brewery_type}
        </p>
        <p>
          <strong>City:</strong> {brewery.city}
        </p>
        <p>
          <strong>State:</strong> {brewery.state}
        </p>
        <p>
          <strong>Phone:</strong> {brewery.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={brewery.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300"
          >
            {brewery.website_url}
          </a>
        </p>
      </div>
      <div className="flex justify-center bg-pink-200 text-black rounded-lg p-2 mt-6 font-bold">
        <Link to="/" className="flex items-center space-x-1">
          <BiArrowBack />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Details;
