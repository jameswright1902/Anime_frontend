import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../routes/home'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} /> 
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
