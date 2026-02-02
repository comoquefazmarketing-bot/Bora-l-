/* @author Felipe Makarios | Creator & Lead Architect */
import React, { useState, useEffect } from "react";
import { Flame } from "lucide-react";

export default function Calculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({ homens: 10, mulheres: 10, criancas: 5 });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openCalc", handleOpen);
    const handleEsc = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener("openCalc", handleOpen);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const totalPessoas = (Number(counts.homens) || 0) + (Number(counts.mulheres) || 0) + (Number(counts.criancas) || 0);

  const res = {
    carne: ((counts.homens * 0.45) + (counts.mulheres * 0.3) + (counts.criancas * 0.2)).toFixed(1),
    cerveja: (counts.homens * 6) + (counts.mulheres * 4),
    refri: Math.ceil((counts.homens * 0.5) + (counts.mulheres * 0.7) + (counts.criancas * 1)),
    carvao: Math.ceil(((counts.homens + counts.mulheres) * 0.4) / 4),
    gelo: Math.ceil(totalPessoas / 8),
  };

  const handleInputChange = (key, value) => {
    const val = value === "" ? "" : Math.max(0, parseInt(value) || 0);
    setCounts({ ...counts, [key]: val });
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* BACKDROP */}
      <div 
        onClick={() => setIsOpen(false)}
        style={{ 
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', 
          backdropFilter: 'blur(8px)', zIndex: 9999998,
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.5s ease'
        }}
      />

      {/* CONTAINER PRINCIPAL */}
      <div 
        style={{ 
          position: 'fixed', left: '50%', top: 0, width: '96%', maxWidth: '1000px',
          zIndex: 9999999, transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
          transform: isOpen ? 'translate(-50%, 0)' : 'translate(-50%, -100%)',
        }}
      >
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="bg-[#1A1A1A] rounded-b-[50px] md:rounded-b-[80px] border-x-[5px] md:border-x-[10px] border-b-[5px] md:border-b-[10px] border-white p-6 pt-12 relative text-white shadow-2xl"
          style={{ maxHeight: '90vh', overflowY: 'auto' }}
        >
          {/* FRASES EDUCATIVAS ATUALIZADAS */}
          <div className="text-center mb-8 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Flame size={26} className="text-[#00BFA6]" />
              <h2 className="font-black italic uppercase text-xl tracking-tighter">Bora pro Churrasco!</h2>
            </div>
            <p className="text-[#00BFA6] font-bold text-[11px] md:text-sm uppercase tracking-[1px] px-4 leading-tight">
              Aqui você calcula seu churrasco e ja tem acesso aos melhores fornecedores
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-6">
            {/* ETAPA 1 */}
            <div className="w-full lg:w-1/3 space-y-4">
               <p className="font-black uppercase text-[10px] text-white/40 border-l-4 border-[#00BFA6] pl-2 tracking-widest">1. Quem vai colar?</p>
               {['homens', 'mulheres', 'criancas'].map(k => (
                 <div key={k} className="flex justify-between items-center bg-white/5 p-4 rounded-[25px] border border-white/10">
                   <span className="font-black uppercase text-sm text-white/60">{k}</span>
                   <div className="flex gap-4 items-center">
                     <button onClick={() => handleInputChange(k, (Number(counts[k]) || 0) - 1)} className="w-10 h-10 bg-white/10 rounded-xl font-black text-xl active:bg-[#00BFA6]">-</button>
                     <span className="text-2xl font-black text-[#00BFA6] min-w-[30px] text-center">{counts[k]}</span>
                     <button onClick={() => handleInputChange(k, (Number(counts[k]) || 0) + 1)} className="w-10 h-10 bg-white/10 rounded-xl font-black text-xl active:bg-[#00BFA6]">+</button>
                   </div>
                 </div>
               ))}
            </div>

            {/* ETAPA 2 */}
            <div className="w-full lg:w-2/3 space-y-6">
              <p className="font-black uppercase text-[10px] text-white/40 border-l-4 border-[#00BFA6] pl-2 tracking-widest">2. O que garantir:</p>
              <div className="bg-[#00BFA6] rounded-[35px] p-6 text-black grid grid-cols-3 gap-y-6 gap-x-2 font-black italic text-center shadow-xl">
                <div><p className="text-[10px] uppercase opacity-70">Carne</p><span className="text-2xl">{res.carne}kg</span></div>
                <div><p className="text-[10px] uppercase opacity-70">Cerva</p><span className="text-2xl">{res.cerveja}u</span></div>
                <div><p className="text-[10px] uppercase opacity-70">Refri</p><span className="text-2xl">{res.refri}L</span></div>
                <div><p className="text-[10px] uppercase opacity-70">Carvão</p><span className="text-2xl">{res.carvao}s</span></div>
                <div><p className="text-[10px] uppercase opacity-70">Gelo</p><span className="text-2xl">{res.gelo}s</span></div>
                <div><p className="text-[10px] uppercase opacity-70">Galera</p><span className="text-2xl">{totalPessoas}</span></div>
              </div>

              {/* FORNECEDORES EMOJIS */}
              <div className="grid grid-cols-4 gap-3 pt-2">
                {[ 
                  {n:"Adega", i:"Ã°Å¸ÂÂº"}, 
                  {n:"Zero Grau", i:"Ã¢Ââ€žÃ¯Â¸Â"}, 
                  {n:"Quality", i:"🥩"}, 
                  {n:"Piovani", i:"Ã°Å¸â€ºâ€™"} 
                ].map((s, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-[25px] text-center border border-white/5 shadow-md">
                    <span className="text-3xl mb-1 block">{s.i}</span>
                    <p className="text-[9px] font-black uppercase text-white/50 tracking-tighter">{s.n}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ABA BRANCA EXTERNA (ETIQUETA) */}
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '-2px' }}>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} 
              style={{
                backgroundColor: 'white', color: 'black', fontWeight: '900', fontSize: '12px',
                padding: '16px 36px', borderRadius: '0 0 32px 32px', border: 'none',
                boxShadow: '0 15px 40px rgba(0,0,0,0.7)', textTransform: 'uppercase',
                whiteSpace: 'nowrap', cursor: 'pointer'
              }}
            >
              {isOpen ? "FECHAR" : "CALCULADORA DE CHURRASCO"}
            </button>
        </div>
      </div>
    </>
  );
}