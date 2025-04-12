import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-56 w-full min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-900 text-white p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brewery/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
