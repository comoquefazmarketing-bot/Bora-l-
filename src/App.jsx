import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./domains/commercial/Home";
import SpaceDetails from "./pages/SpaceDetails";
import MySpaces from "./pages/MySpaces";
import Dashboard from "./domains/backoffice/Dashboard";
import Admin from "./domains/backoffice/Admin";
import ChatWithLia from "./domains/support/ChatWithLia";
function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-[#FDFDFD]">
        <Routes>
          {/* Feed Principal */}
          <Route path="/" element={<Home />} />
          
          {/* Rota Original e Rota que o seu Feed está chamando (/space/) */}
          <Route path="/details/:id" element={<SpaceDetails />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          
          {/* Gestão e Cadastro */}
          <Route path="/my-spaces" element={<MySpaces />} />
          <Route path="/register-supplier" element={<RegisterSupplier />} />

          {/* Redirecionar qualquer erro para a Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <MandaLaBanner />
      </div>
    </Router>
  );
}

export default App;