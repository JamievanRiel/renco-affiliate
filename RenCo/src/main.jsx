import React from "react";
import ReactDOM from "react-dom/client";
// Importeer HashRouter in plaats van BrowserRouter
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import RencoAffiliate from "./App.jsx";
import Top10SmartphonesPage from "./Top10SmartphonesPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Gebruik HashRouter om route-problemen op GitHub Pages te voorkomen */}
    <HashRouter>
      <Routes>
        {/* De homepage matcht nu altijd goed */}
        <Route path="/" element={<RencoAffiliate />} />

        {/* Je subpagina is nu bereikbaar via .../#/top-10-smartphones-2025 */}
        <Route path="/top-10-smartphones-2025" element={<Top10SmartphonesPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
