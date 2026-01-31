/* @author Felipe Makarios | Creator - Bora Lá */
import React, { useState, useEffect } from "react";
import { Flame, X, Zap, Terminal, Star, Sparkles, Users, TrendingDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HPCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({ homens: 10, mulheres: 10, criancas: 5 });

  useEffect(() => {
    const handleOpen = () => { setIsOpen(true); document.body.style.overflow = 'hidden'; };
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
    const msg = `Olá ${p.n}, vi no Bora Lá! 🚀 Orçamento para ${t} pessoas:%0A%0A${listaTxt}%0A%0AConsegue o melhor preço?`;
    window.open(`https://wa.me/${p.t}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-3xl overflow-hidden font-sans">
      <div className="bg-[#242424] w-full max-w-6xl rounded-[2.5rem] border-[10px] border-[#111] shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] flex flex-col relative my-auto">
        
        {/* HEADER GOLD COM SUBTITLE EMOCIONAL (Sugestão 1) */}
        <div className="relative bg-[#c4a457] p-4 md:p-5 flex justify-between items-center border-b-6 border-black/30 overflow-hidden">
          <motion.div initial={{ x: '-150%' }} animate={{ x: '500%' }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none" />
          <div className="relative z-10 flex flex-col italic">
            <div className="flex items-center gap-3">
              <Flame className="text-black" size={24} fill="black" />
              <h2 className="text-black font-black text-xl md:text-3xl uppercase tracking-tighter leading-none">Calculadora de Churrasco</h2>
            </div>
            <p className="text-black/70 text-[10px] md:text-[12px] font-bold uppercase tracking-tight ml-9 mt-1">Churrasco sem erro, sem desperdício e sem dor de cabeça.</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="relative z-10 hover:bg-black/10 p-2 rounded-full text-black transition-all"><X size={28} strokeWidth={3} /></button>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#2a2a2a]">
          
          {/* PASSO 01: INPUTS */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-center">
             <div className="border-l-6 border-[#c4a457] pl-4">
                <span className="text-[#c4a457] text-[10px] font-black uppercase tracking-[0.3em] block mb-1">Passo 01</span>
                <h3 className="text-white font-bold italic text-base">Quem vai pro braseiro?</h3>
             </div>
             {Object.keys(counts).map((k) => (
               <div key={k} className="bg-[#151515] p-3 px-5 rounded-2xl border-b-4 border-black flex items-center justify-between hover:bg-[#1a1a1a] transition-all">
                 <label className="text-[10px] font-black text-[#c4a457] uppercase">{k}</label>
                 <input type="number" value={counts[k]}
                   onChange={(e) => setCounts({...counts, [k]: e.target.value})}
                   className="bg-transparent text-3xl font-mono font-bold text-white w-20 text-right outline-none focus:text-[#00BFA6]" />
               </div>
             ))}
          </div>

          {/* VISOR CENTRAL COM FEEDBACK VISUAL (Sugestão 2) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-[#0c1a17] rounded-[2.5rem] p-6 md:p-8 border-[6px] border-[#1a1a1a] shadow-[inset_0_0_80px_rgba(0,0,0,1)] flex flex-col justify-center h-full relative overflow-hidden">
              
              {/* SELO DE ECONOMIA (Sugestão 3) */}
              <div className="absolute top-4 right-6 flex items-center gap-1.5 bg-[#00BFA6]/10 border border-[#00BFA6]/20 px-3 py-1 rounded-full">
                <TrendingDown size={12} className="text-[#00BFA6]" />
                <span className="text-[#00BFA6] text-[9px] font-black uppercase tracking-widest italic">Economia de até 20%</span>
              </div>

              <div className="grid grid-cols-3 gap-x-6 gap-y-10 text-center mt-4">
                {suprimentos.map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[#00BFA6] text-[10px] font-black uppercase mb-2 opacity-60">{item.label}</span>
                    <motion.div key={item.val} initial={{ scale: 1.2, filter: "brightness(2)" }} animate={{ scale: 1, filter: "brightness(1)" }} transition={{ duration: 0.3 }}
                      className="flex items-baseline gap-1"
                    >
                       <span className="font-mono font-black text-[#00BFA6] text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(0,191,166,0.5)] italic leading-none">{item.val}</span>
                       <span className="text-[#00BFA6]/40 text-[9px] font-bold uppercase">{item.unit}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PASSO 02: PARCEIROS */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-center">
             <div className="bg-black/20 p-4 rounded-2xl border-r-4 border-[#00BFA6]">
                <p className="text-white text-xs font-bold italic leading-tight">Envie para nossos parceiros e economize agora:</p>
             </div>
             <div className="space-y-2">
               {[{ n: 'Quality Bull', t: '5517996488662' }, { n: 'Adega Culere', t: '5517996163845' }, { n: 'Superm. Piovani', t: '5517992714861' }, { n: 'Zero Grau Gelo', t: '5517988116106' }].map(p => (
                 <button key={p.n} onClick={() => enviarOrcamento(p)}
                   className="w-full bg-[#1e1e1e] hover:bg-[#c4a457] text-white hover:text-black p-3.5 rounded-xl font-black text-[10px] uppercase flex justify-between items-center border-b-4 border-black transition-all active:scale-95 group shadow-lg"
                 >
                   <span>{p.n}</span>
                   <Zap size={14} className="text-[#00BFA6] group-hover:text-black fill-current" />
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-black/60 flex justify-between items-center px-12 border-t border-white/5 font-mono text-[10px]">
          <p className="text-white/30 uppercase tracking-widest">Creator: <span className="text-white font-black italic">Felipe Makarios</span></p>
          <p className="text-[#c4a457] font-black italic tracking-widest uppercase">Bora Lá NH • V2.6</p>
        </div>
      </div>
    </div>
  );
}