import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NovaDashboard from './components/NovaDashboard';
import DreamPortal from './components/DreamPortal';
import LegacyU from './components/LegacyU';
import ScrollHunt from './components/ScrollHunt';
import WhatIfArena from './components/WhatIfArena';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova" element={<NovaDashboard />} />
        <Route path="/dream" element={<DreamPortal />} />
        <Route path="/legacyu" element={<LegacyU />} />
        <Route path="/scrollhunt" element={<ScrollHunt />} />
        <Route path="/whatif" element={<WhatIfArena />} />
      </Routes>
    </Router>
  );
}

export default App;
