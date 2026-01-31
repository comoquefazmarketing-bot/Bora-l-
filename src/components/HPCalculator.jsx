/* @author Felipe Makarios | Creator - Bora Lá */
import React, { useState, useEffect } from "react";
import { Flame, X, Zap, Terminal, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function HPCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({ homens: 10, mulheres: 10, criancas: 5 });

  useEffect(() => {
    const handleOpen = () => { 
      setIsOpen(true); 
      document.body.style.overflow = 'hidden'; 
    };
    window.addEventListener("openCalc", handleOpen);
    return () => window.removeEventListener("openCalc", handleOpen);
  }, []);

  if (!isOpen) return null;

  const h = Number(counts.homens) || 0;
  const m = Number(counts.mulheres) || 0;
  const c = Number(counts.criancas) || 0;
  const t = h + m + c;

  const suprimentos = [
    { label: 'CARNE PREMIUM', unit: 'KG', val: ((h * 0.5) + (m * 0.4) + (c * 0.2)).toFixed(1) },
    { label: 'CARVÃO VEGETAL', unit: 'KG', val: Math.ceil(t / 8 * 4) },
    { label: 'GELO FILTRADO', unit: 'KG', val: Math.ceil(t / 10 * 5) },
    { label: 'CERVEJA GELADA', unit: 'UN', val: (h * 5) + (m * 3) },
    { label: 'REFRIGERANTE', unit: 'UN', val: Math.ceil(t / 5) },
    { label: 'KITS COMPLETOS', unit: 'UN', val: Math.ceil(t * 1.3) }
  ];

  const enviarOrcamento = (p) => {
    const listaTxt = suprimentos.map(s => `• ${s.label}: ${s.val} ${s.unit}`).join('%0A');
    const msg = `Olá ${p.n}, vi no Bora Lá! 🚀 Orçamento para ${t} pessoas:%0A%0A${listaTxt}`;
    window.open(`https://wa.me/${p.t}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-10 bg-black/98 backdrop-blur-3xl overflow-y-auto">
      
      {/* CHASSI ADAPTATIVO: No mobile ele vira um "modal longo" */}
      <div className="bg-[#242424] w-full max-w-6xl rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[10px] border-[#111] shadow-2xl flex flex-col relative my-auto overflow-hidden">
        
        {/* HEADER COMPACTO MOBILE */}
        <div className="relative bg-[#c4a457] p-4 md:p-5 flex justify-between items-center border-b-4 border-black/30 overflow-hidden">
          <div className="relative z-10 flex items-center gap-3">
            <Flame className="text-black" size={24} fill="black" />
            <h2 className="text-black font-black text-lg md:text-2xl uppercase tracking-tighter italic">Calculadora</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="relative z-10 p-2 bg-black/10 rounded-full text-black active:scale-90 transition-all">
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* CONTEÚDO: Grid 1 coluna no mobile / 12 colunas no desktop */}
        <div className="p-4 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 bg-[#2a2a2a]">
          
          {/* PASSO 01: INPUTS (Design Touch-Friendly) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
             <div className="border-l-4 border-[#c4a457] pl-3 py-1">
                <h3 className="text-white font-bold italic text-sm md:text-base uppercase tracking-tighter">1. Quem vai?</h3>
             </div>
             <div className="grid grid-cols-1 gap-2 md:gap-3">
               {Object.keys(counts).map((k) => (
                 <div key={k} className="bg-[#151515] p-3 md:p-4 rounded-xl border-b-4 border-black flex items-center justify-between group">
                   <label className="text-[10px] font-black text-[#c4a457] uppercase tracking-widest">{k}</label>
                   <input type="number" value={counts[k]}
                     inputMode="numeric"
                     onChange={(e) => setCounts({...counts, [k]: e.target.value})}
                     className="bg-transparent text-3xl md:text-4xl font-mono font-bold text-white w-20 text-right outline-none focus:text-[#00BFA6]" />
                 </div>
               ))}
             </div>
          </div>

          {/* VISOR CENTRAL: RESPONSIVO (2 colunas no mobile / 3 no desktop) */}
          <div className="lg:col-span-6 flex flex-col min-h-[350px]">
            <div className="bg-[#0c1a17] rounded-[2rem] p-5 md:p-10 border-[4px] md:border-[6px] border-[#1a1a1a] shadow-[inset_0_0_60px_rgba(0,0,0,1)] flex flex-col justify-center h-full relative">
              
              <div className="hidden md:flex absolute top-4 left-6 items-center gap-2">
                <Terminal size={14} className="text-[#00BFA6] animate-pulse" />
                <span className="text-[#00BFA6] text-[9px] font-mono font-bold uppercase tracking-widest italic opacity-50">Logística Bora Lá</span>
              </div>

              {/* Ajuste de Grid para Mobile: 2 colunas para caber melhor */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-10 text-center">
                {suprimentos.map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[#00BFA6] text-[8px] md:text-[10px] font-black uppercase mb-1 md:mb-2 opacity-60">{item.label}</span>
                    <motion.div key={item.val} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="flex items-baseline gap-1">
                       <span className="font-mono font-black text-[#00BFA6] text-3xl md:text-5xl drop-shadow-[0_0_12px_rgba(0,191,166,0.4)] italic leading-none">{item.val}</span>
                       <span className="text-[#00BFA6]/40 text-[8px] font-bold uppercase">{item.unit}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PASSO 02: PARCEIROS (Botões Full-Width no Mobile) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
             <div className="bg-black/20 p-4 rounded-xl border-r-4 border-[#00BFA6]">
                <p className="text-white text-[11px] font-bold italic leading-tight">Envie a lista para nossos parceiros:</p>
             </div>
             <div className="grid grid-cols-1 gap-2">
               {[{ n: 'Quality Bull', t: '5517996488662' }, { n: 'Adega Culere', t: '5517996163845' }, { n: 'Superm. Piovani', t: '5517992714861' }, { n: 'Zero Grau Gelo', t: '5517988116106' }].map(p => (
                 <button key={p.n} onClick={() => enviarOrcamento(p)}
                   className="w-full bg-[#1e1e1e] active:bg-[#c4a457] text-white active:text-black p-4 rounded-xl font-black text-[10px] uppercase flex justify-between items-center border-b-4 border-black transition-all shadow-lg"
                 >
                   <span>{p.n}</span>
                   <Zap size={14} className="text-[#00BFA6] fill-current" />
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* FOOTER MOBILE-FRIENDLY */}
        <div className="p-3 bg-black/60 flex justify-between items-center px-6 md:px-12 border-t border-white/5 font-mono text-[9px] md:text-[10px]">
          <p className="text-white/30 uppercase tracking-tighter">Creator: <span className="text-white font-bold">Felipe Makarios</span></p>
          <p className="text-[#c4a457] font-black italic uppercase">Bora Lá NH</p>
        </div>
      </div>
    </div>
  );
}