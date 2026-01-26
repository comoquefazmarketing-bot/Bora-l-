/* @author Felipe Makarios | Creator - Bora Lá */
import React, { useState, useEffect, useRef } from "react";
import { Flame, X, MessageSquare, Zap, AlertCircle, HelpCircle } from "lucide-react";

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
    return () => {
      window.removeEventListener("openCalc", handleOpen);
      handleClose();
    };
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
    const texto = `Olá! Vi seu anúncio no *App Bora Lá* e gostaria de validar os preços para meu churrasco:\n\n` +
                  `📊 *ESTIMATIVA PARA ${t} PESSOAS*\n` +
                  `🥩 Carne: ${res.carnes}kg\n` +
                  `🍺 Cerveja: ${res.cerveja}un\n` +
                  `🥤 Refri: ${res.refri}L\n` +
                  `🔥 Carvão: ${res.carvao}sc\n` +
                  `❄️ Gelo: ${res.gelo}sc\n` +
                  `🍽️ Descartáveis: ${res.descartaveis}un\n\n` +
                  `_Podemos confirmar os valores?_`;
    
    window.open(`https://wa.me/${p.t}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 overflow-hidden"
         ref={modalRef} onClick={(e) => e.target === modalRef.current && setIsOpen(false)}>
      
      <div className="bg-[#E2E2D8] w-full max-w-[1060px] max-h-[95vh] rounded-[30px] sm:rounded-[50px] border-[4px] sm:border-[6px] border-[#1A1A1A] flex flex-col shadow-2xl animate-in zoom-in duration-300 overflow-hidden">
        
        {/* HEADER */}
        <div className="bg-[#1A1A1A] p-4 flex justify-between items-center text-white px-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-[#00BFA6] p-1.5 rounded-lg">
                <Flame size={18} fill="white" stroke="none" />
            </div>
            <span className="font-black italic uppercase tracking-tighter text-sm sm:text-xl">Calculadora Bora Lá</span>
          </div>
          <button onClick={() => { setIsOpen(false); document.body.style.overflow = 'unset'; }} className="hover:text-[#00BFA6] transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-10 grid grid-cols-12 gap-4 sm:gap-8 overflow-y-auto overflow-x-hidden">
          
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-white/40 p-5 rounded-[30px] border border-black/5">
                <div className="flex items-center gap-2 mb-2 text-[#00BFA6]">
                    <HelpCircle size={16} strokeWidth={3} />
                    <span className="font-black uppercase italic text-[10px] tracking-widest">Como funciona?</span>
                </div>
                <p className="text-[10px] font-bold text-slate-600 uppercase italic leading-tight">
                    Nossa calculadora estima o consumo ideal para seu evento.
                </p>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                {['homens', 'mulheres', 'criancas'].map(k => (
                    <div key={k} className="bg-white p-3 rounded-2xl border-b-4 border-black/10 flex flex-col lg:flex-row justify-between items-center shadow-sm">
                        <span className="text-[10px] font-black uppercase italic text-slate-400">{k}</span>
                        <input type="number" value={counts[k]} onChange={(e) => setCounts({...counts, [k]: e.target.value})} className="w-full lg:w-12 text-center lg:text-right font-black text-lg outline-none bg-transparent" />
                    </div>
                ))}
            </div>
          </div>

          {/* VISOR VERDE - FONTE AUMENTADA AQUI */}
          <div className="col-span-12 lg:col-span-6 bg-[#9CA986] rounded-[45px] p-6 sm:p-8 shadow-inner border-b-[8px] border-black/10">
             <div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono">
                {[
                    { l: 'Carne', v: res.carnes, u: 'kg' }, { l: 'Cerveja', v: res.cerveja, u: 'un' },
                    { l: 'Refri', v: res.refri, u: 'L' }, { l: 'Carvão', v: res.carvao, u: 'sc' },
                    { l: 'Gelo', v: res.gelo, u: 'sc' }, { l: 'Descart.', v: res.descartaveis, u: 'un' }
                ].map(i => (
                    <div key={i.l} className="flex flex-col items-center border-b border-black/5 pb-2">
                        {/* Aumentei para text-[14px] e opacity-60 para melhor leitura */}
                        <p className="text-[14px] font-black opacity-60 uppercase">{i.l}</p>
                        <p className="text-2xl sm:text-4xl font-black tracking-tighter">{i.v}<span className="text-xs ml-0.5">{i.u}</span></p>
                    </div>
                ))}
             </div>
          </div>

          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-[#1A1A1A] p-4 rounded-3xl border-l-4 border-[#00BFA6]">
                <div className="flex items-center gap-1.5 mb-1 text-[#00BFA6]">
                    <Zap size={14} fill="currentColor" />
                    <span className="font-black uppercase italic text-[9px] text-white">Bora Orçar?</span>
                </div>
                <p className="text-[9px] font-bold text-slate-400 uppercase leading-tight italic">
                    Escolha um fornecedor para enviar sua lista pronta.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-2">
                {[
                    { n: 'Quality Bull', t: '5517996488662', i: '🥩' },
                    { n: 'Adega Culere', t: '5517996163845', i: '🍺' },
                    { n: 'P. Piovani', t: '551735429999', i: '🛒' },
                    { n: 'Zero Grau', t: '5517997432279', i: '❄️' }
                ].map(p => (
                    <button key={p.n} onClick={() => enviarOrcamento(p)} className="w-full flex items-center justify-between bg-white p-3.5 rounded-2xl border-b-4 border-black/10 hover:bg-[#00BFA6] group transition-all active:scale-95 shadow-md">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">{p.i}</span>
                            <span className="text-[10px] font-black uppercase group-hover:text-white tracking-tighter">{p.n}</span>
                        </div>
                        <MessageSquare size={16} className="text-[#25D366] group-hover:text-white" fill="currentColor" />
                    </button>
                ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}