import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Home page with brewery list and stats
import Details from "./pages/Details"; // Details page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brewery/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
