/* @author Felipe Makarios | Lead Architect */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Store, Menu, X, Home, MapPin, Sparkles } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const frases = [
    "Churrasco hoje?",
    "Momento família?",
    "Partiu festa?",
    "Bora descansar?",
    "Criar memórias?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <style>{`
        @keyframes subtle-glow {
          0% { filter: drop-shadow(0 0 15px rgba(0, 191, 166, 0.2)); }
          50% { filter: drop-shadow(0 0 35px rgba(0, 191, 166, 0.5)); }
          100% { filter: drop-shadow(0 0 15px rgba(0, 191, 166, 0.2)); }
        }
        .animate-subtle-glow {
          animation: subtle-glow 6s ease-in-out infinite;
        }
      `}</style>

      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed left-6 top-6 z-[400] p-4 bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl shadow-xl border border-black/5 hover:scale-110 transition-transform active:scale-95 group"
      >
        <Menu size={24} className="group-hover:text-[#00BFA6] transition-colors" />
      </button>

      <div className={`fixed left-0 top-0 h-full bg-[#F4F1EA] transition-all duration-700 z-[450] shadow-2xl ${isOpen ? 'w-80' : 'w-0'} overflow-hidden border-r border-black/5`}>
        <div className="flex flex-col h-full py-10 px-8 w-80">
          
          <button onClick={() => setIsOpen(false)} className="self-end mb-4 text-[#8D7B68] hover:text-[#00BFA6] hover:rotate-90 transition-all">
            <X size={28} />
          </button>
          
          <div className="mb-10 text-center flex flex-col items-center">
            <div className={`relative w-full flex justify-center mb-6 transition-all duration-1000 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Logo com Glow Pulsante e Motion suave */}
              <img 
                src="/logo.png" 
                alt="Bora Lá" 
                className="h-32 md:h-40 w-auto rotate-90 animate-subtle-glow transition-transform hover:scale-105 duration-500" 
              />
            </div>
            
            <div className="h-6 overflow-hidden">
               <p className="text-[11px] font-black text-[#00BFA6] uppercase tracking-[0.4em] italic">
                {frases[index]}
               </p>
            </div>
            
            <h2 className="text-4xl font-black text-[#8D7B68] italic uppercase tracking-tighter mt-4">
              Bora Lá.
            </h2>
          </div>

          <nav className="flex-1 space-y-4">
            <button onClick={() => handleNav('/')} className="flex items-center gap-5 w-full font-black uppercase text-[11px] tracking-widest text-[#8D7B68] hover:text-[#00BFA6] transition-all group text-left">
              <div className="p-3 bg-white/50 rounded-xl group-hover:bg-[#00BFA6] group-hover:text-white transition-all shadow-sm">
                <Home size={20} />
              </div> 
              Início
            </button>
            
            <button onClick={() => handleNav('/', true)} className="flex items-center gap-5 w-full font-black uppercase text-[11px] tracking-widest text-[#8D7B68] hover:text-[#00BFA6] transition-all group text-left">
              <div className="p-3 bg-white/50 rounded-xl group-hover:bg-[#00BFA6] group-hover:text-white transition-all shadow-sm">
                <Calculator size={20} />
              </div>
              Calculadora
            </button>

            <button onClick={() => handleNav("/register-supplier")} className="flex items-center gap-5 w-full font-black uppercase text-[11px] tracking-widest text-[#8D7B68] hover:text-[#00BFA6] transition-all group text-left">
              <div className="p-3 bg-white/50 rounded-xl group-hover:bg-[#00BFA6] group-hover:text-white transition-all shadow-sm">
                <Store size={20} />
              </div>
              Seja Fornecedor
            </button>

            <button 
              onClick={() => handleNav('/register-area')} 
              className="relative flex items-center gap-5 w-full font-black uppercase text-[11px] tracking-widest text-white group mt-10 p-5 bg-[#00BFA6] rounded-[24px] hover:bg-[#8D7B68] transition-all shadow-lg overflow-hidden"
            >
              <MapPin size={20} className="animate-bounce" />
              <span className="relative z-10">Anuncie sua Área</span>
              <Sparkles size={16} className="absolute top-2 right-4 opacity-50" />
            </button>
          </nav>

          <div className="mt-auto pt-6 border-t border-black/5 text-center">
             <p className="text-[9px] font-black text-[#8D7B68]/40 uppercase tracking-[0.2em] italic mb-1">
               Manda Lá © 2026
             </p>
             <p className="text-[7px] font-bold text-[#8D7B68]/30 uppercase italic">
               Felipe Makarios | Creator
             </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[440]" 
        />
      )}
    </>
  );
}