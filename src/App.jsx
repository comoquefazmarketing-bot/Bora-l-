import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpaceForm from './components/spaces/SpaceForm';
import MyBookings from './pages/MyBookings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<div className="p-10 text-center"><h1>Bem-vindo ao Bora Lá</h1><p>Experiência Sensorial Ativa</p></div>} />
          <Route path="/admin/spaces" element={<SpaceForm />} />
          <Route path="/bookings" element={<MyBookings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;