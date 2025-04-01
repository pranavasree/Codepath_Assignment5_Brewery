import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
