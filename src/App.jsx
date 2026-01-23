import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpaceDetails from './pages/SpaceDetails';
import RegisterSpace from './pages/RegisterSpace';
import RegisterSupplier from './pages/RegisterSupplier';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Calculator from './services/Calculator';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-[#FDFCFB]">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        <div className="flex-1 flex flex-col">
          <Header onOpenMenu={() => setIsSidebarOpen(true)} />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/space/:id" element={<SpaceDetails />} />
              <Route path="/register-area" element={<RegisterSpace />} />
              <Route path="/register-supplier" element={<RegisterSupplier />} />
            </Routes>
          </main>
        </div>

        <Calculator />
      </div>
    </Router>
  );
}