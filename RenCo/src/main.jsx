import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import RencoAffiliate from "./App.jsx";
import Top10SmartphonesPage from "./Top10SmartphonesPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* homepage */}
        <Route path="/" element={<RencoAffiliate />} />

        {/* top 10 smartphones */}
        <Route path="/top-10-smartphones-2025" element={<Top10SmartphonesPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
