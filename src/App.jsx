// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import SearchResults from './pages/SearchResults'; // Import the SearchResults component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
        <Route path="/search/:query" element={<SearchResults />} /> {/* New route for search results */}
      </Routes>
    </Router>
  );
}

export default App;
