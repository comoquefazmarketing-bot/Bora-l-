/* @author Felipe Makarios | Creator - BORA LÁ */
import React, { useState, useEffect } from "react";
import { X, Home, Calculator, Users, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openSidebar", handleOpen);
    return () => window.removeEventListener("openSidebar", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex text-black font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      <div className="relative w-80 bg-white h-full shadow-2xl animate-in slide-in-from-left p-8 flex flex-col">
        {/* HEADER COM LOGO */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.webp" 
              alt="BORA LÁ Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-black italic text-2xl tracking-tighter uppercase">BORA LÁ.</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <X size={24}/>
          </button>
        </div>
        
        <nav className="space-y-4 flex-1">
          <button onClick={() => { navigate('/'); setIsOpen(false); }} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-black/5 group transition-all">
            <Home className="text-slate-400 group-hover:text-black" />
            <span className="font-black uppercase italic tracking-tighter">Iná­cio / Espaços</span>
          </button>
          
          <button onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('openCalc')); }} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-black/5 group transition-all">
            <Calculator className="text-slate-400 group-hover:text-black" />
            <span className="font-black uppercase italic tracking-tighter">Calculadora</span>
          </button>

          {/* NOVA OPá€¡ÃƒÆ’O: BLOG Lá */}
          <button onClick={() => { navigate('/blog'); setIsOpen(false); }} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-black/5 group transition-all">
            <BookOpen className="text-slate-400 group-hover:text-black" />
            <span className="font-black uppercase italic tracking-tighter">Blog Lá</span>
          </button>

          <div className="h-px bg-black/5 my-4" />

          {/* BOTÃƒÆ’O SEJA PARCEIRO */}
          <button 
            onClick={() => { navigate('/partners-selection'); setIsOpen(false); }} 
            className="w-full flex items-center justify-between gap-4 p-5 rounded-3xl bg-[#00BFA6] text-white shadow-lg shadow-[#00BFA6]/20 hover:scale-[1.02] active:scale-95 transition-all group"
          >
            <div className="flex items-center gap-4">
                <Users size={20} />
                <span className="font-black uppercase italic tracking-tighter">Seja Parceiro</span>
            </div>
            <ArrowRight size={18} />
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-black/5 text-center">
            <p className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em] italic">High Performance Events</p>
        </div>
      </div>
    </div>
  );
}