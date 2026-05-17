import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./i18n/index.js";   // init i18next before render
import "./index.css";

// Font Awesome is loaded via CDN in index.html
// Icons work directly with class names: <i className="fa-solid fa-leaf" />

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
