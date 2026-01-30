/* @author Felipe Makarios | Creator - Bora Lá */
import React, { useState, useEffect, useRef } from "react";
import { Flame, X, Zap, Info, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HPCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({ homens: 10, mulheres: 10, criancas: 5 });
  const modalRef = useRef();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
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
    const texto = `Olá! Vi no *App Bora Lá* e gostaria de validar os preços:\n\n📊 *ESTIMATIVA PARA ${t} PESSOAS*\n🥩 Carne: ${res.carnes}kg\n🍺 Cerveja: ${res.cerveja}un\n🥤 Refri: ${res.refri}L\n🔥 Carvão: ${res.carvao}sc\n❄️ Gelo: ${res.gelo}sc\n🍽️ Descartáveis: ${res.descartaveis}un`;
    window.open(`https://wa.me/${p.t}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-4"
        ref={modalRef} onClick={(e) => e.target === modalRef.current && setIsOpen(false)}
      >
        <motion.div 
          initial={{ scale: 0.95 }} animate={{ scale: 1 }}
          className="bg-[#D1D5DB] w-full max-w-[1050px] rounded-[40px] border-[6px] border-[#374151] shadow-2xl overflow-hidden"
        >
          {/* HEADER */}
          <div className="bg-[#1F2937] p-5 flex justify-between items-center px-8 border-b-4 border-black/20">
            <div className="flex items-center gap-3">
              <div className="bg-[#00BFA6] p-2 rounded-xl">
                <Flame size={20} className="text-white" fill="white" />
              </div>
              <span className="text-white font-mono font-black tracking-[2px] text-xl uppercase italic">Calculadora de Churrasco</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white"><X size={30}/></button>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#D1D5DB] items-stretch">
            
            {/* LADO ESQUERDO: TEXTO CURTO + INPUTS */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="bg-white/70 p-5 rounded-2xl border-l-8 border-[#00BFA6] shadow-sm flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-[#1F2937]">
                  <Info size={16} className="text-[#00BFA6]" />
                  <span className="font-black text-[10px] uppercase tracking-widest">Como Usar</span>
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase italic leading-tight">
                  Ajuste o número de convidados abaixo para calcular os itens do seu churrasco.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {['homens', 'mulheres', 'criancas'].map(k => (
                  <div key={k} className="relative group">
                    <span className="absolute left-5 top-2 text-[10px] font-black text-[#00BFA6] uppercase italic z-10">{k}</span>
                    <input 
                      type="number" value={counts[k]} 
                      onChange={(e) => setCounts({...counts, [k]: e.target.value})} 
                      className="w-full bg-[#111827] text-white font-mono text-3xl p-5 pt-8 rounded-2xl border-b-4 border-black/40 text-right outline-none focus:border-[#00BFA6]" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CENTRO: VISOR LCD */}
            <div className="md:col-span-6">
              <div className="bg-[#9CA986] h-full rounded-[35px] border-[5px] border-[#4B5563] shadow-[inset_0_8px_20px_rgba(0,0,0,0.3)] p-10 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-x-10 gap-y-10 font-mono">
                  {[
                      { l: 'CARNE', v: res.carnes, u: 'kg' }, { l: 'CERVEJA', v: res.cerveja, u: 'un' },
                      { l: 'REFRI', v: res.refri, u: 'L' }, { l: 'CARVÃO', v: res.carvao, u: 'sc' },
                      { l: 'GELO', v: res.gelo, u: 'sc' }, { l: 'DESCART.', v: res.descartaveis, u: 'un' }
                  ].map(i => (
                      <div key={i.l} className="border-b-2 border-black/10 pb-2">
                        <p className="text-[12px] font-black text-[#1F2937] uppercase mb-1">{i.l}</p>
                        <p className="text-5xl font-black text-[#1F2937] tracking-tighter leading-none">{i.v}<span className="text-[11px] ml-1 uppercase opacity-50">{i.u}</span></p>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* LADO DIREITO: TEXTO CURTO + PARCEIROS */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="bg-[#1F2937] p-5 rounded-2xl border-r-8 border-[#00BFA6] shadow-xl flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-[#00BFA6]">
                  <ShoppingCart size={16} />
                  <span className="font-black text-[10px] uppercase tracking-widest">Bora Orçar?</span>
                </div>
                <p className="text-[10px] font-black text-white/70 uppercase italic leading-tight">
                  Selecione um fornecedor abaixo para cotar sua lista automaticamente via WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {[
                    { n: 'Quality Bull', t: '5517996488662' },
                    { n: 'Adega Culere', t: '5517996163845' },
                    { n: 'Superm. Piovani', t: '5517992714861' },
                    { n: 'Zero Grau', t: '5517988116106' }
                ].map(p => (
                  <motion.button 
                    whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}
                    key={p.n} onClick={() => enviarOrcamento(p)}
                    className="w-full bg-[#111827] text-white font-mono text-[11px] p-5 rounded-2xl border-b-4 border-black/40 flex justify-between items-center group transition-all"
                  >
                    <span className="font-black uppercase tracking-tighter">{p.n}</span>
                    <Zap size={14} fill="#00BFA6" className="text-[#00BFA6]" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#1F2937] p-3 text-center">
             <p className="text-[9px] font-mono text-white/20 tracking-[10px] uppercase">Engineering by Felipe Makarios</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}