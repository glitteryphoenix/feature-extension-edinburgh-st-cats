import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>  {/* ✅ This is the ONLY place `BrowserRouter` should be used */}
    <App />
  </BrowserRouter>
);

