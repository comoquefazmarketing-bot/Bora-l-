import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Store, Menu, X, Home, MapPin, Sparkles } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path, isCalc = false) => {
    setIsOpen(false);
    if (isCalc) {
      window.dispatchEvent(new CustomEvent('openCalc'));
    } else {
      navigate(path);
    }
  };

  return (
    <>
      {/* Botão Hambúrguer */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed left-6 top-6 z-[400] p-4 bg-white/90 backdrop-blur-md text-slate-900 rounded-2xl shadow-xl border border-black/5 hover:scale-110 transition-transform active:scale-95"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar - Largura reduzida para w-72 */}
      <div className={`fixed left-0 top-0 h-full bg-[#F4F1EA] transition-all duration-500 z-[450] shadow-2xl ${isOpen ? 'w-72' : 'w-0'} overflow-hidden`}>
        <div className="flex flex-col h-full py-12 px-8 w-72">
          <button onClick={() => setIsOpen(false)} className="self-end mb-10 opacity-30 hover:rotate-90 transition-transform">
            <X size={28} />
          </button>
          
          <div className="mb-14 text-center">
            <img src="/logo/logo.png" alt="Bora Lá" className="h-14 mx-auto mb-4" />
            <div className="h-[1px] w-8 bg-[#00BFA6] mx-auto mb-4 opacity-50"></div>
            <p className="text-[8px] font-black text-[#8D7B68] uppercase tracking-[0.4em]">Experiência Sensorial</p>
          </div>

          <nav className="flex-1 space-y-5">
            <button onClick={() => handleNav('/')} className="flex items-center gap-4 w-full font-black uppercase text-[10px] tracking-widest text-[#8D7B68] hover:text-[#00BFA6] transition-all group">
              <Home size={18} className="group-hover:-translate-y-1 transition-transform" /> Início
            </button>
            
            <button onClick={() => handleNav('/', true)} className="flex items-center gap-4 w-full font-black uppercase text-[10px] tracking-widest text-[#8D7B68] hover:text-[#00BFA6] transition-all group">
              <Calculator size={18} className="group-hover:rotate-12 transition-transform" /> Calculadora
            </button>

            <button onClick={() => handleNav("/register-supplier")} className="flex items-center gap-4 w-full font-black uppercase text-[10px] tracking-widest text-[#8D7B68] hover:text-[#00BFA6] transition-all group"> <Store size={18} /> Seja Fornecedor
            </button>

            {/* MENU DESTAQUE: ANUNCIE SUA ÁREA */}
            <button 
              onClick={() => handleNav('/register-area')} 
              className="relative flex items-center gap-4 w-full font-black uppercase text-[10px] tracking-widest text-[#00BFA6] group mt-10 p-4 bg-white/50 rounded-2xl border border-[#00BFA6]/10 hover:bg-[#00BFA6] hover:text-white transition-all shadow-sm"
            >
              <MapPin size={18} className="animate-bounce" />
              <span>Anuncie sua Área</span>
              <span className="absolute -top-2 -right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFA6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00BFA6]"></span>
              </span>
            </button>
          </nav>

          <div className="mt-auto pt-10 border-t border-black/5">
             <p className="text-[7px] font-black text-[#8D7B68]/40 uppercase tracking-[0.2em] text-center italic">
               Manda Lá © 2026
             </p>
          </div>
        </div>
      </div>

      {/* Backdrop mais sutil para não esconder o app totalmente */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[440] animate-in fade-in duration-300" 
        />
      )}
    </>
  );
}