import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../routes/home';
import RecommendationsPage from '../routes/recommendations';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/recommendations" element={<RecommendationsPage />} /> 

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
