import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpaceDetails from './pages/SpaceDetails';
import RegisterSpace from './pages/RegisterSpace'; 
import RegisterSupplier from './pages/RegisterSupplier';
import Sidebar from './components/Sidebar';
import Calculator from './services/Calculator'; // Importando a calculadora correta

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#FDFCFB]">
        <Sidebar />
        {/* A Calculadora precisa estar aqui para ser global */}
        <Calculator /> 
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/space/:id" element={<SpaceDetails />} />
            <Route path="/register-area" element={<RegisterSpace />} />
            <Route path="/register-supplier" element={<RegisterSupplier />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}