import React, { useState } from 'react';
import { Menu, Calculator, X, ChevronDown, Home, Calendar, Heart, Store, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openCalculator = () => {
    window.dispatchEvent(new CustomEvent('openCalc'));
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-[110] w-80 bg-white shadow-2xl transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border-r border-black/5`}>
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <span className="font-black italic text-3xl tracking-tighter text-slate-900 underline decoration-[#00BFA6] decoration-4">BORA LÁ.</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
              <X size={26} />
            </button>
          </div>
          <nav className="flex-1 space-y-4">
            <button onClick={() => {navigate('/'); setIsSidebarOpen(false);}} className="w-full flex items-center gap-4 p-4 font-black uppercase italic tracking-tighter text-lg hover:text-[#00BFA6]"><Home size={22}/> Início</button>
            <button onClick={() => {navigate('/reservar'); setIsSidebarOpen(false);}} className="w-full flex items-center gap-4 p-4 font-black uppercase italic tracking-tighter text-lg hover:text-[#00BFA6]"><Calendar size={22}/> Reservar</button>
            <button onClick={() => {navigate('/favoritos'); setIsSidebarOpen(false);}} className="w-full flex items-center gap-4 p-4 font-black uppercase italic tracking-tighter text-lg hover:text-[#00BFA6]"><Heart size={22}/> Favoritos</button>
            <button onClick={() => {navigate("/register-supplier"); setIsSidebarOpen(false);}} className="w-full flex items-center gap-4 p-4 font-black uppercase italic tracking-tighter text-lg hover:text-[#00BFA6]"><Store size={22}/> Seja um fornecedor</button>
            <div className="pt-6">
              <button onClick={() => {navigate("/register-area"); setIsSidebarOpen(false);}} className="w-full flex items-center justify-center gap-3 bg-[#1A1A1A] text-white p-5 rounded-2xl font-black uppercase italic tracking-tighter text-sm hover:bg-[#00BFA6] transition-all shadow-xl">
                <PlusCircle size={20} className="text-[#00BFA6]"/> Anuncie sua Área
              </button>
            </div>
          </nav>
          <div className="mt-auto pt-10 border-t border-slate-100">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-1">Felipe Makarios</p>
            <p className="text-[10px] font-bold text-[#00BFA6]">Criador do App</p>
          </div>
        </div>
      </div>

      {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[105]" />}

      <header className="fixed top-0 left-0 right-0 z-[100] px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-1/4">
            <button onClick={() => setIsSidebarOpen(true)} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-black/5 active:scale-95">
              <Menu size={28} className="text-slate-900" />
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <button onClick={openCalculator} className="flex items-center gap-4 bg-white border border-black/5 px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all group">
              <Calculator size={20} className="text-[#00BFA6]" />
              <span className="font-black uppercase italic tracking-tighter text-sm text-slate-800">CALCULADORA DE CHURRASCO</span>
              <ChevronDown size={18} className="text-slate-400 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
          <div className="w-1/4" />
        </div>
      </header>
    </>
  );
}