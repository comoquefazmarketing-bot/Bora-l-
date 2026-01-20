import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./domains/commercial/Home";
import Dashboard from "./domains/backoffice/Dashboard";
import Admin from "./domains/backoffice/Admin";
import ChatWithLia from "./domains/support/ChatWithLia";
import SpaceDetails from "./pages/SpaceDetails";
import RegisterSupplier from "./pages/RegisterSupplier";
import Sidebar from "./components/Sidebar";
import MandaLaBanner from "./components/MandaLaBanner";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="flex-1 ml-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/chat" element={<ChatWithLia />} />
            <Route path="/space/:id" element={<SpaceDetails />} />
            <Route path="/register-supplier" element={<RegisterSupplier />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <MandaLaBanner />
      </div>
    </Router>
  );
}