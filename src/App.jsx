import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Domínios Organizados (Arquitetura de Empresa)
import Home from "./domains/commercial/Home";
import Dashboard from "./domains/backoffice/Dashboard";
import Admin from "./domains/backoffice/Admin";
import ChatWithLia from "./domains/support/ChatWithLia";

// Componentes que ainda estão na pasta antiga (precisamos importar o RegisterSupplier)
import SpaceDetails from "./pages/SpaceDetails";
import MySpaces from "./pages/MySpaces";
import RegisterSupplier from "./pages/RegisterSupplier"; 

// Componentes Globais
import MandaLaBanner from "./components/MandaLaBanner";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/chat" element={<ChatWithLia />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          <Route path="/register-supplier" element={<RegisterSupplier />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* Banner Único e Conectado - Sensorial Tum Dum */}
        
      </div>
    </Router>
  );
}