import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpaceDetails from "./pages/SpaceDetails";
import LeadForm from "./pages/LeadForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        <Route path="/quero-anunciar" element={<LeadForm />} />
      </Routes>
    </Router>
  );
}