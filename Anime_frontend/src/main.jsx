import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/home";
import RecommendationsPage from "../routes/recommendations";
import TopCharacters from "../routes/topCharcters"; // Corrected import
import TopAnime from "../routes/topAnime"; // Corrected import
import Navbar from "../components/nav";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/anime" element={<Home />} />
        <Route path="/schedules" element={<RecommendationsPage />} />
        <Route path="/top/characters" element={<TopCharacters />} />
        <Route path="/top/anime" element={<TopAnime />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
