/* @author Felipe Makarios | Creator & Lead Architect - BORA LÁ / Manda Lá */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, Truck, Menu, X, Calculator, MapPin, ChevronRight
} from "lucide-react";
import { spacesData } from "../../data/spaces";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      
      {/* HEADER MOBILE - ESSENCIAL PARA O PAI FICAR ON NO CELULAR */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white border-b sticky top-0 z-[100]">
        <img src="/logo.png" alt="BORA LÁ" className="h-8" />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* SIDEBAR RESPONSIVA */}
      <aside className={`
        fixed inset-y-0 left-0 z-[150] w-72 bg-white border-r transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:flex md:flex-col
      `}>
        <div className="p-8 h-full flex flex-col">
          <img src="/logo.png" alt="BORA LÁ" className="w-32 mb-12 hidden md:block" />
          
          <nav className="space-y-4 flex-1">
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-900 text-white font-bold uppercase text-xs tracking-widest">
              <Home size={20} /> Explorar
            </button>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 hover:bg-slate-50 font-bold uppercase text-xs tracking-widest transition-all">
              <Truck size={20} className="text-[#FF4500]" /> Manda Lá
            </button>
          </nav>

          <div className="mt-auto p-4 bg-slate-50 rounded-3xl border border-slate-100">
             <div className="flex items-center gap-3 mb-2">
                <Calculator className="text-[#00BFA6]" size={18}/>
                <span className="font-black text-[10px] uppercase tracking-tighter">Calculadora</span>
             </div>
             <button className="w-full py-3 bg-[#FF4500] text-white rounded-xl text-[10px] font-black uppercase">Anuncie Aqui</button>
          </div>
        </div>
      </aside>

      {/* CONTEÃšDO PRINCIPAL */}
      <main className="flex-1 p-4 md:p-10 lg:p-16 overflow-x-hidden">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
            Explorar <span className="text-[#00BFA6]">Espaços</span>
          </h1>
        </header>

        {/* GRID QUE SE ADAPTA: 1 COLUNA NO CELULAR, 3 NO PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-20">
          {spacesData.map((space) => (
            <div 
              key={space.id} 
              onClick={() => navigate(`/space/${space.id}`)}
              className="group cursor-pointer bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={`${space.imagesFolder}foto1.webp`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={space.title} 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase italic tracking-tighter">{space.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] mt-1 font-bold">
                  <MapPin size={12} /> Novo Horizonte, SP
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* OVERLAY PARA O MENU MOBILE */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[140] md:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}