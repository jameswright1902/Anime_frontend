import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/home';
import RecommendationsPage from '../routes/recommendations';
import TopCharacters from '../routes/topCharcters'; // Corrected import
import TopAnime from '../routes/topAnime'; // Corrected import

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/anime" element={<Home />} />
        <Route path="/schedules" element={<RecommendationsPage />} />
        <Route path="/top/characters" element={<TopCharacters />} /> {/* Add a route for the TopCharacters component */}
        <Route path="/top/anime" element={<TopAnime />} /> {/* Add a route for the TopAnime component */}
        {/* <Route path="/anime/:id" element={<AnimeDetails />} /> Route for displaying anime details */}


        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
