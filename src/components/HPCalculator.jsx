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
      if (window.trackCalculadora) window.trackCalculadora("abriu", "modal");
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

  const enviarOrcamento = (p) => {
    if (window.trackOrcamento) window.trackOrcamento(p.n, t);
    track('Click_Parceiro', { parceiro: p.n, total: t });
    const msg = `Olá ${p.n}, vi no Bora Lá! Preciso de orçamento para churrasco (${t} pessoas).`;
    window.open(`https://wa.me/${p.t}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#111827] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto border border-white/10 shadow-2xl">
        <div className="p-6 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-2">
            <Flame className="text-[#00BFA6]" size={24} />
            <h2 className="text-xl font-black text-white uppercase italic">Calculadora de Churrasco</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 text-white/50 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            {Object.keys(counts).map((k) => (
              <div key={k} className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{k}</label>
                <input 
                  type="number" 
                  value={counts[k]}
                  onChange={(e) => {
                    setCounts({...counts, [k]: e.target.value});
                    if (window.trackCalculadora) window.trackCalculadora("ajustou_convidados", k);
                  }}
                  className="bg-black/50 border border-white/10 p-4 rounded-xl text-white font-mono focus:border-[#00BFA6] outline-none"
                />
              </div>
            ))}
          </div>

          <div className="md:col-span-3 flex flex-col gap-5">
            <div className="bg-[#1F2937] p-5 rounded-2xl border-r-8 border-[#00BFA6] shadow-xl">
              <p className="text-[10px] font-black text-white/80 uppercase italic">Cote sua lista no WhatsApp abaixo.</p>
            </div>
            <div className="flex flex-col gap-3 pb-12">
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
      </div>
    </div>
  );
}