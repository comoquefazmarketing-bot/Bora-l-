/* @author Felipe Makarios | Creator - Bora Lá */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import SpaceDetails from './pages/SpaceDetails';
import PartnersSelection from './pages/PartnersSelection';
import RegisterSupplier from './pages/RegisterSupplier';
import Sidebar from './components/Sidebar';
import HPCalculator from './components/HPCalculator';
import GlobalB2BBanner from './components/GlobalB2BBanner';
import KarenChat from './components/KarenChat';
import { Flame, Menu, Calculator } from 'lucide-react';

const GlobalHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-black/5 py-4 px-6 lg:px-20 flex justify-between items-center h-20">
      {/* ESQUERDA: MENU COM TEXTO */}
      <div className="flex-1 flex justify-start">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('openSidebar'))} 
          className="flex items-center gap-2 group transition-all"
        >
          <div className="p-2 group-hover:bg-black/5 rounded-full transition-colors">
            <Menu size={24} className="text-black group-hover:rotate-90 transition-transform" />
          </div>
          <span className="font-black uppercase italic text-[10px] tracking-[0.2em] hidden sm:block text-black">MENU</span>
        </button>
      </div>

      {/* CENTRO: CALCULADORA DE CHURRASCO GLASS RED */}
      <div className="flex-1 flex justify-center">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('openCalc'))}
          className="relative flex items-center gap-3 bg-[#EE0000] text-white px-7 py-2.5 rounded-full transition-all shadow-[0_10px_20px_rgba(238,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(238,0,0,0.5)] hover:scale-105 active:scale-95 group overflow-hidden border border-white/30"
        >
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] z-20"></div>
          <Calculator size={18} className="text-white relative z-10" />
          <span className="font-black uppercase italic text-[11px] tracking-tighter relative z-10 whitespace-nowrap">Calculadora de Churrasco</span>
        </button>
      </div>

      {/* DIREITA: BORA LÁ COM TEXTO E CHAMA */}
      <div className="flex-1 flex justify-end items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
         <span className="font-black italic text-xl tracking-tighter uppercase hidden md:block text-black group-hover:text-[#00BFA6] transition-colors">BORA LÁ</span>
         <div className="w-10 h-10 bg-[#00BFA6] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shadow-[#00BFA6]/20">
            <Flame size={22} className="text-white" fill="currentColor" />
         </div>
      </div>
    </header>
  );
};

function App() {
  return (
    <Router>
      <Sidebar />
      <HPCalculator />
      <KarenChat />
      <GlobalHeader />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          <Route path="/partners-selection" element={<PartnersSelection />} />
          <Route path="/register-supplier" element={<RegisterSupplier />} />
        </Routes>
      </main>
      <GlobalB2BBanner />
      <Analytics />
    </Router>
  );
}
export default App;