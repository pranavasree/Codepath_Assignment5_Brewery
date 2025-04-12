import { Link } from "react-router-dom";
import { FiHome, FiSearch, FiInfo } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="h-screen w-56 bg-gradient-to-b from-[#0a0f2c] to-[#1b1d3a] bg-opacity-80 text-white p-6 fixed left-0 top-0 shadow-lg backdrop-blur-md border-r border-purple-900">
      <h1 className="text-2xl font-bold mb-10 tracking-wide text-purple-300">
        Brewery Dash
      </h1>
      <nav className="flex flex-col space-y-6 text-lg">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-200"
        >
          <FiHome />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/search"
          className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-200"
        >
          <FiSearch />
          <span>Search</span>
        </Link>
        <Link
          to="/about"
          className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-200"
        >
          <FiInfo />
          <span>About</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
