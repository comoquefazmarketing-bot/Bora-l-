import React from "react";
import { Truck, Home, Search, Heart, User } from "lucide-react";

export default function Sidebar() {
  
  // Função que faz a mágica: Avisa o app para abrir a calculadora
  const handleMandaLa = () => {
    const event = new CustomEvent("openCalc");
    window.dispatchEvent(event);
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-24 bg-white border-r border-slate-100 flex flex-col items-center py-10 z-[200]">
      <div className="flex flex-col gap-12">
        {/* Outros botões... */}
        <button onClick={() => window.location.href = "/"} className="text-slate-300 hover:text-[#00BFA6] transition-all">
          <Home size={28} />
        </button>

        {/* BOTÃO MANDA LÁ (O CAMINHÃO) */}
        <button 
          onClick={handleMandaLa} 
          className="flex flex-col items-center gap-2 group"
        >
          <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-[#00BFA6] group-hover:text-white transition-all shadow-sm">
            <Truck size={28} />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-[#00BFA6]">Manda Lá</span>
        </button>

        {/* Outros botões... */}
      </div>
    </aside>
  );
}