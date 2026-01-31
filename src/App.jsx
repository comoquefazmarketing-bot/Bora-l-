import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ'; // Importação da FAQ
import SpaceDetails from './pages/SpaceDetails';
import PartnersSelection from './pages/PartnersSelection';
import RegisterSupplier from './pages/RegisterSupplier';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Sidebar from './components/Sidebar';
import HPCalculator from './components/HPCalculator';
import GlobalB2BBanner from './components/GlobalB2BBanner';
import KarenChat from './components/KarenChat';
import { Flame, Menu, Calculator } from 'lucide-react';

const GlobalHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-black/5 py-4 px-6 lg:px-20 flex justify-between items-center h-20">
      <div className="flex-1 flex justify-start">
        <button onClick={() => window.dispatchEvent(new CustomEvent('openSidebar'))} className="flex items-center gap-2">
          <Menu size={24} className="text-black" />
          <span className="font-black uppercase italic text-[10px] tracking-[0.2em] hidden sm:block text-black">MENU</span>
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <button onClick={() => window.dispatchEvent(new CustomEvent('openCalc'))} className="bg-[#EE0000] text-white px-7 py-2.5 rounded-full shadow-lg flex items-center gap-3 active:scale-95 transition-all">
          <Calculator size={18} />
          <span className="font-black uppercase italic text-[11px] whitespace-nowrap">Calculadora de Churrasco</span>
        </button>
      </div>
      <div className="flex-1 flex justify-end items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
         <span className="font-black italic text-xl uppercase text-black">BORA LÁ</span>
         <div className="w-10 h-10 bg-[#00BFA6] rounded-xl flex items-center justify-center shadow-lg">
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
      <main className="relative pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          <Route path="/partners-selection" element={<PartnersSelection />} />
          <Route path="/register-supplier" element={<RegisterSupplier />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <GlobalB2BBanner />
    </Router>
  );
}
export default App;