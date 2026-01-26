/* @author Felipe Makarios | Lead Architect - Bora LÃ¡ */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ImportaÃ§Ã£o das PÃ¡ginas que vocÃª enviou
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterArea from "./pages/RegisterSpace"; // Usando seu RegisterSpace.jsx
import RegisterSupplier from "./pages/RegisterSupplier";
import SpaceDetails from "./pages/SpaceDetails";
import Admin from "./pages/Admin";
import PartnersSelection from "./pages/PartnersSelection";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-area" element={<RegisterArea />} />
          <Route path="/register-supplier" element={<RegisterSupplier />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/partners-selection" element={<PartnersSelection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;