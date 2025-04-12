import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-gradient-to-br from-[#1a1f3c] to-[#0e1328] text-white rounded-xl shadow-xl backdrop-blur-md">
      <h2 className="text-4xl font-extrabold text-purple-300 mb-4 text-center tracking-wide">
        About This Brewery App 🍻
      </h2>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        This app is a modern dashboard built to explore breweries across the
        United States using live data from the{" "}
        <a
          href="https://api.openbrewerydb.org/v1/breweries"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 underline hover:text-amber-300 transition"
        >
          Open Brewery DB API
        </a>
        . It offers a seamless and intuitive way to browse, search, and filter
        through different types of breweries by name, city, state, and category.
      </p>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        Key features include:
      </p>
      <ul className="list-disc list-inside text-gray-200 text-base mb-6 space-y-2">
        <li>
          📍 Dynamic search and filtering by city, state, and brewery type
        </li>
        <li>
          📊 A live stats dashboard with insights like the most common brewery
          type and contact availability
        </li>
        <li>📋 Paginated list of breweries with direct detail navigation</li>
        <li>🌐 Styled using Tailwind CSS with a clean, dark-themed layout</li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Whether you're a beer enthusiast, developer, or data lover, this project
        shows how powerful and user-friendly open data APIs can be when paired
        with modern React-based UI.
      </p>

      {/* Return to Home Button */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-pink-300 hover:bg-purple-600 text-gray-800 font-semibold rounded-lg shadow-md transition duration-300"
        >
          ⬅ Return to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
