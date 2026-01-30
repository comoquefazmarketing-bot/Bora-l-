/* @author Felipe Makarios | Creator - Bora Lá */
import React, { useState, useEffect, useRef } from "react";
import { Flame, X, Zap, Info, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@vercel/analytics";

export default function HPCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({ homens: 10, mulheres: 10, criancas: 5 });
  const modalRef = useRef();

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden'; 
    };
    const handleClose = () => {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    };
    window.addEventListener("openCalc", handleOpen);
    return () => { window.removeEventListener("openCalc", handleOpen); handleClose(); };
  }, []);

  if (!isOpen) return null;

  const h = Number(counts.homens) || 0;
  const m = Number(counts.mulheres) || 0;
  const c = Number(counts.criancas) || 0;
  const t = h + m + c;

  const res = {
    carnes: ((h * 0.5) + (m * 0.4) + (c * 0.25)).toFixed(1),
    cerveja: (h + m) * 5,
    refri: Math.ceil(t * 0.6),
    carvao: Math.ceil(((h + m) * 0.5) / 5) || 1,
    gelo: Math.ceil(t / 8),
    descartaveis: Math.ceil(t * 1.5)
  };

  const enviarOrcamento = (p) => {
    track('Click_Parceiro', { parceiro: p.n, total: t });
    const texto = `Olá! Vi no *App Bora Lá* e gostaria de validar os preços:\n\n📊 *ESTIMATIVA PARA ${t} PESSOAS*\n🥩 Carne: ${res.carnes}kg\n🍺 Cerveja: ${res.cerveja}un\n🥤 Refri: ${res.refri}L\n🔥 Carvão: ${res.carvao}sc\n❄️ Gelo: ${res.gelo}sc\n🍽️ Descartáveis: ${res.descartaveis}un`;
    window.open(`https://wa.me/${p.t}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        // Esconde a barra de scroll lateral em todos os browsers
        className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-start md:items-center justify-center overflow-y-auto no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onClick={() => setIsOpen(false)}
      >
        <motion.div 
          initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#D1D5DB] w-full max-w-[1050px] min-h-screen md:min-h-0 md:rounded-[40px] shadow-2xl relative flex flex-col no-scrollbar touch-pan-y"
        >
          {/* HEADER FIXO - Impede o 'samba' do topo */}
          <div className="bg-[#1F2937] p-5 flex justify-between items-center px-6 md:px-10 border-b-4 border-black/20 sticky top-0 z-[10001] w-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#00BFA6] p-2 rounded-xl">
                <Flame size={20} className="text-white" fill="white" />
              </div>
              <span className="text-white font-mono font-black tracking-widest text-sm md:text-xl uppercase italic">Calculadora de Churrasco</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-white/50 hover:text-[#00BFA6]"><X size={32}/></button>
          </div>

          <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 bg-[#D1D5DB] overflow-x-hidden">
            {/* LADO ESQUERDO */}
            <div className="md:col-span-3 flex flex-col gap-5">
              <div className="bg-white/80 p-5 rounded-2xl border-l-8 border-[#00BFA6] shadow-md">
                <p className="text-[10px] font-black text-slate-600 uppercase italic">Ajuste os convidados abaixo para calcular.</p>
              </div>
              {['homens', 'mulheres', 'criancas'].map(k => (
                <div key={k} className="relative">
                  <span className="absolute left-4 top-2 text-[10px] font-black text-[#00BFA6] uppercase italic z-10">{k}</span>
                  <input type="number" value={counts[k]} onChange={(e) => setCounts({...counts, [k]: e.target.value})} 
                  className="w-full bg-[#111827] text-white font-mono text-3xl p-5 pt-8 rounded-2xl border-b-4 border-black/50 text-right outline-none"/>
                </div>
              ))}
            </div>

            {/* CENTRO (VISOR) */}
            <div className="md:col-span-6">
              <div className="bg-[#9CA986] rounded-[40px] border-[6px] border-[#4B5563] shadow-[inset_0_10px_20px_rgba(0,0,0,0.4)] p-8 md:p-10">
                <div className="grid grid-cols-2 gap-8 font-mono">
                  {[
                    { l: 'CARNE', v: res.carnes, u: 'kg' }, { l: 'CERVEJA', v: res.cerveja, u: 'un' },
                    { l: 'REFRI', v: res.refri, u: 'L' }, { l: 'CARVÃO', v: res.carvao, u: 'sc' },
                    { l: 'GELO', v: res.gelo, u: 'sc' }, { l: 'DESCART.', v: res.descartaveis, u: 'un' }
                  ].map(i => (
                    <div key={i.l} className="border-b-2 border-black/10 pb-2">
                      <p className="text-[12px] font-black text-[#1F2937] uppercase">{i.l}</p>
                      <p className="text-5xl font-black text-[#1F2937] tracking-tighter">{i.v}<span className="text-[12px] ml-1 opacity-50">{i.u}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="md:col-span-3 flex flex-col gap-5">
              <div className="bg-[#1F2937] p-5 rounded-2xl border-r-8 border-[#00BFA6] shadow-xl">
                <p className="text-[10px] font-black text-white/80 uppercase italic">Cote sua lista no WhatsApp abaixo.</p>
              </div>
              <div className="flex flex-col gap-3 pb-12 md:pb-0">
                {[{ n: 'Quality Bull', t: '5517996488662' }, { n: 'Adega Culere', t: '5517996163845' }, { n: 'Superm. Piovani', t: '5517992714861' }, { n: 'Zero Grau', t: '5517988116106' }].map(p => (
                  <button key={p.n} onClick={() => enviarOrcamento(p)}
                  className="w-full bg-[#111827] text-white font-mono text-[11px] p-6 rounded-2xl border-b-4 border-black/50 flex justify-between items-center active:bg-[#00BFA6] active:text-black transition-all">
                    <span className="font-black uppercase">{p.n}</span>
                    <Zap size={16} fill="currentColor" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#1F2937] p-4 text-center mt-auto md:rounded-b-[34px]">
             <p className="text-[9px] font-mono text-white/20 tracking-[10px] uppercase">Felipe Makarios</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}