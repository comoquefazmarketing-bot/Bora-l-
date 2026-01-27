/* @author Felipe Makarios | Creator - Bora Lá */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpaceDetails from './pages/SpaceDetails';
import Sidebar from './components/Sidebar';
import HPCalculator from './components/HPCalculator';
import GlobalB2BBanner from './components/GlobalB2BBanner';

function App() {
  return (
    <Router>
      {/* COMPONENTES GLOBAIS */}
      <Sidebar />
      <HPCalculator />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
      </Routes>

      {/* BANNER GLOBAL B2B - APARECE NO FIM DE TODAS AS PAGINAS */}
      <GlobalB2BBanner />
    </Router>
  );
}

export default App;