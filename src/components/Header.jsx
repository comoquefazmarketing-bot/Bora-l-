/* @author Felipe Makarios | Creator - BORA LÁ */
import React from 'react';
import { Menu, Calculator, ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header({ onOpenMenu }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isNotHome = location.pathname !== '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button onClick={onOpenMenu} className="w-12 h-12 bg-[#00BFA6] text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all">
          <Menu size={24} />
        </button>

        <div onClick={() => navigate('/')} className="cursor-pointer text-center">
          <h1 className="text-xl font-black italic uppercase tracking-tighter text-slate-900">
            BORA <span className="text-[#00BFA6]">LÁ.</span>
          </h1>
          {isNotHome && (
            <span onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="text-[9px] font-bold text-[#00BFA6] uppercase flex items-center justify-center gap-1 cursor-pointer">
              <ChevronLeft size={10} /> Voltar
            </span>
          )}
        </div>

        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('openCalc'))}
          className="bg-[#EE0000] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase italic shadow-md active:scale-95 transition-all"
        >
          Calculadora de Churrasco
        </button>
      </div>
    </header>
  );
}