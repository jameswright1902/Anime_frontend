import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecommendationsPage from "../src/routes/recommendations";
import TopCharacters from "../src/routes/topCharcters"; // Corrected import
import TopAnime from "../src/routes/topAnime"; // Corrected import
import Navbar from "../src/components/nav";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "../src/components/loginform";
import RegistrationForm from "../src/components/registrationform";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TopAnime />} />
          <Route path="/schedules" element={<RecommendationsPage />} />
          <Route path="/top/characters" element={<TopCharacters />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>    
  </React.StrictMode>
);
