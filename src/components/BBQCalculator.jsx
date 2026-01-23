/* @author Felipe Makarios | Lead Architect 
   PORTAL MANDA LÁ - UX/UI PREMIUM DARK DEFINITIVO
*/
import React, { useState, useEffect } from "react";
import { 
  Users, Utensils, Beer, Droplets, Flame, 
  Package, ChevronDown, Zap, ChevronRight, Minus, Plus 
} from "lucide-react";

export default function Calculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({ homens: 10, mulheres: 10, crianças: 5 });

  const suppliers = [
    { name: "Quality Bull", type: "Carnes Premium", icon: "🥩", phone: "5517996488662" },
    { name: "Adega Culere", type: "Bebidas & Gelo", icon: "🍺", phone: "5517996163845" },
    { name: "Zero Grau", type: "Gelo & Conveniência", icon: "❄️", phone: "5517997432279" },
    { name: "Piovani", type: "Supermercado", icon: "🛒", phone: "551735429999" }
  ];

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener("openCalc", handleOpen);
    return () => window.removeEventListener("openCalc", handleOpen);
  }, []);

  const updateCount = (type, val) => setCounts(prev => ({ ...prev, [type]: Math.max(0, prev[type] + val) }));
  
  const res = {
    carne: ((counts.homens * 0.45) + (counts.mulheres * 0.3) + (counts.crianças * 0.2)).toFixed(1),
    cerveja: (counts.homens * 6) + (counts.mulheres * 4),
    refri: Math.ceil((counts.homens * 0.5) + (counts.mulheres * 0.7) + (counts.crianças * 1)),
    carvão: Math.ceil(((counts.homens + counts.mulheres) * 0.4) / 4),
    gelo: Math.ceil((counts.homens + counts.mulheres + counts.crianças) / 8),
    descartáveis: Math.ceil((counts.homens + counts.mulheres + counts.crianças) * 1.5)
  };

  const sendWhats = (s) => {
    const msg = `*MANDA LÁ (Bora Lá)* 👋\n\nFiz meu cálculo e quero um orçamento:\n\n` +
                `🥩 Carne: *${res.carne}kg*\n` +
                `🍺 Cerveja: *${res.cerveja}un*\n` +
                `🥤 Bebida: *${res.refri}L*\n` +
                `🔥 Carvão: *${res.carvão}sc*\n` +
                `❄️ Gelo: *${res.gelo}sc*\n` +
                `🍽️ Descartáveis: *${res.descartáveis}un*\n\n` +
                `Consegue me atender?`;
    window.open(`https://wa.me/${s.phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className={`fixed top-0 left-1/2 -translate-x-1/2 z-[999] w-full max-w-5xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-y-0' : '-translate-y-[calc(100%-55px)]'}`}>
      <div className="bg-[#0A0A0A] rounded-b-[70px] border-x-[10px] border-b-[10px] border-white p-8 md:p-14 pt-24 relative shadow-[0_60px_150px_rgba(0,0,0,1)]">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-5">
            <div>
              <h2 className="text-white text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">MANDA LÁ</h2>
              <p className="text-[#00BFA6] font-black uppercase text-[10px] tracking-[0.4em] mb-8 italic">Calculadora Inteligente</p>
            </div>
            {['homens', 'mulheres', 'crianças'].map(type => (
              <div key={type} className="bg-white/5 p-6 rounded-[35px] border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-all">
                 <span className="text-white/40 font-black uppercase text-[10px] tracking-widest group-hover:text-[#00BFA6] transition-colors">{type}</span>
                 <div className="flex items-center gap-5">
                    <button onClick={() => updateCount(type, -1)} className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center hover:bg-red-500"><Minus size={16}/></button>
                    <span className="text-white font-black text-3xl italic min-w-[30px] text-center">{counts[type]}</span>
                    <button onClick={() => updateCount(type, 1)} className="w-10 h-10 rounded-xl bg-[#00BFA6] text-black flex items-center justify-center hover:scale-110"><Plus size={16}/></button>
                 </div>
              </div>
            ))}
          </div>
          <div className="flex-[1.5] space-y-10">
            <div className="bg-[#00BFA6] rounded-[50px] p-8 text-black grid grid-cols-2 md:grid-cols-3 gap-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><Zap size={100} /></div>
               <Item val={res.carne} unit="KG" label="Carnes" icon={<Utensils size={16}/>} />
               <Item val={res.cerveja} unit="UN" label="Cerveja" icon={<Beer size={16}/>} />
               <Item val={res.refri} unit="L" label="Bebidas" icon={<Droplets size={16}/>} />
               <Item val={res.carvão} unit="SC" label="Carvão" icon={<Flame size={16}/>} />
               <Item val={res.gelo} unit="SC" label="Gelo" icon={<Zap size={16}/>} />
               <Item val={res.descartáveis} unit="IT" label="Kits" icon={<Package size={16}/>} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suppliers.map((s, i) => (
                <button key={i} onClick={() => sendWhats(s)} className="flex items-center justify-between bg-white/5 border border-white/10 p-6 rounded-[40px] hover:bg-[#25D366] group transition-all">
                  <div className="flex items-center gap-5 text-left">
                    <span className="text-3xl group-hover:scale-125 transition-transform">{s.icon}</span>
                    <div>
                      <p className="text-white font-black uppercase text-sm italic leading-none group-hover:text-black">{s.name}</p>
                      <p className="text-[#00BFA6] font-bold text-[8px] uppercase mt-1 group-hover:text-black/60 tracking-widest">{s.type}</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-white/20 group-hover:text-black" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-white px-20 py-5 rounded-b-[45px] shadow-2xl flex items-center gap-5 border-x-[10px] border-b-[10px] border-white group transition-all">
          <span className="font-black text-[11px] uppercase tracking-[0.5em] text-black italic">
            {isOpen ? "FECHAR" : "CALCULADORA MANDA LÁ"}
          </span>
          <ChevronDown size={20} className={`text-black transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
}

function Item({ val, unit, label, icon }) {
  return (
    <div className="flex flex-col relative z-10 text-black">
      <div className="flex items-center gap-2 mb-1 opacity-60">
        {icon}
        <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-4xl font-black italic tracking-tighter leading-none">{val}<span className="text-[10px] ml-1 not-italic opacity-60">{unit}</span></p>
    </div>
  );
}