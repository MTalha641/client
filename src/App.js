import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LakesSection from './LakesSection';
import HomePage from './HomePage';
import ExplorePakistan from './ExplorePakistan';
import SaifUlMalook from './SaifUlMalook';
import Attabad from './Attabad'; // Add import for AttabadLake component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-pakistan" element={<ExplorePakistan />} />
        <Route path="/saif-ul-malook" element={<SaifUlMalook />} />
        <Route path="/attabad-lake" element={<Attabad />} /> {/* Add route for AttabadLake */}
        {/* <Route path="/shangrila-lake" element={<ShangrilaLake />} /> */}
        <Route path="*" element={<LakesSection />} />
      </Routes>
    </Router>
  );
};

export default App;
