import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../routes/home';
import RecommendationsPage from '../routes/recommendations';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/recommendations" element={<RecommendationsPage />} /> 

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
