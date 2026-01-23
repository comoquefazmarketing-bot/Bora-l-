/* @author Felipe Makarios | Lead Architect */
import React, { useState, useEffect } from "react";
import { Calculator as CalcIcon, X, ArrowRight, Wallet, Flame, Home } from "lucide-react";

export default function Calculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({ homens: 10, mulheres: 10, criancas: 5 });

  const suppliers = [
    { name: "Adega Culere", icon: "🍺", phone: "5517996163845" },
    { name: "Zero Grau", icon: "❄️", phone: "5517997432279" },
    { name: "Quality Bull", icon: "🥩", phone: "5517996488662" },
    { name: "Piovani", icon: "🛒", phone: "551735429999" }
  ];

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openCalc", handleOpen);
    return () => window.removeEventListener("openCalc", handleOpen);
  }, []);

  const totalPessoas = (Number(counts.homens) || 0) + (Number(counts.mulheres) || 0) + (Number(counts.criancas) || 0);

  const res = {
    carne: ((counts.homens * 0.45) + (counts.mulheres * 0.3) + (counts.criancas * 0.2)).toFixed(1),
    cerveja: (counts.homens * 6) + (counts.mulheres * 4),
    refri: Math.ceil((counts.homens * 0.5) + (counts.mulheres * 0.7) + (counts.criancas * 1)),
    carvao: Math.ceil(((counts.homens + counts.mulheres) * 0.4) / 4),
    gelo: Math.ceil(totalPessoas / 8),
    descartaveis: totalPessoas
  };

  const handleInputChange = (key, value) => {
    const val = value === "" ? "" : Math.max(0, parseInt(value) || 0);
    setCounts({ ...counts, [key]: val });
  };

  const sendWhats = (s) => {
    const msg = `Ola ${s.name}! Vi meu calculo no portal Bora La e gostaria de um orcamento:\n\n🥩 Carne: ${res.carne}kg\n🍺 Cerveja: ${res.cerveja}un\n🥤 Bebida: ${res.refri}L\n🔥 Carvao: ${res.carvao}sc\n❄️ Gelo: ${res.gelo}sc\n🍽️ Descartaveis: ${res.descartaveis}un`;
    window.open(`https://wa.me/${s.phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      {/* OVERLAY PARA FECHAR AO CLICAR FORA */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-1/2 -translate-x-1/2 z-[999] w-full max-w-5xl transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-[calc(100%-48px)]'}`}>
        <div className="bg-[#1A1A1A] rounded-b-[50px] md:rounded-b-[70px] border-x-[4px] md:border-x-[8px] border-b-[4px] md:border-b-[8px] border-white p-6 md:p-10 pt-16 md:pt-24 relative text-white shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide">
          
          {/* HEADER DA CALCULADORA NO MOBILE */}
          <div className="flex items-center justify-between mb-6 md:hidden">
             <button onClick={() => window.location.href = '/'} className="p-2 bg-white/10 rounded-full"><Home size={20}/></button>
             <button onClick={() => setIsOpen(false)} className="p-2 bg-red-500 rounded-full"><X size={20}/></button>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8 pb-4 border-b border-white/5">
            <Flame size={16} className="text-[#00BFA6] animate-pulse" />
            <p className="text-[10px] md:text-[11px] font-black uppercase italic tracking-[1px] md:tracking-[2px] text-white/60 text-center">
              Reúna a galera, prepare o braseiro e garanta o essencial.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-start">
            {/* COLUNA CONVIDADOS */}
            <div className="w-full lg:w-[35%] space-y-3">
               <h2 className="text-2xl md:text-3xl font-black italic uppercase underline decoration-[#00BFA6] decoration-4 mb-4">Convidados</h2>
               {Object.keys(counts).map(k => (
                 <div key={k} className="flex justify-between items-center bg-white/5 p-3 md:p-4 rounded-2xl md:rounded-3xl border border-white/5">
                   <span className="font-black uppercase text-[10px] tracking-widest text-white/50">{k === 'criancas' ? 'Crianças' : k}</span>
                   <div className="flex gap-2 items-center">
                     <button onClick={() => handleInputChange(k, (Number(counts[k]) || 0) - 1)} className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl font-black">-</button>
                     <input 
                      type="number" 
                      value={counts[k]} 
                      onChange={(e) => handleInputChange(k, e.target.value)}
                      className="w-12 md:w-16 bg-transparent border-b border-[#00BFA6] text-center font-black italic text-xl md:text-2xl text-[#00BFA6] focus:outline-none"
                     />
                     <button onClick={() => handleInputChange(k, (Number(counts[k]) || 0) + 1)} className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl font-black">+</button>
                   </div>
                 </div>
               ))}
            </div>

            {/* COLUNA RESULTADOS */}
            <div className="w-full lg:w-[65%] space-y-6">
              <div className="bg-[#00BFA6] rounded-[30px] md:rounded-[40px] p-6 md:p-8 text-slate-900 grid grid-cols-3 gap-3 font-black italic text-center shadow-lg">
                <div className="border-b border-black/10 pb-2 md:border-none"><p className="text-[9px] uppercase opacity-70">Carne</p><span className="text-xl md:text-2xl">{res.carne}k</span></div>
                <div className="border-b border-black/10 pb-2 md:border-none"><p className="text-[9px] uppercase opacity-70">Cerva</p><span className="text-xl md:text-2xl">{res.cerveja}u</span></div>
                <div className="border-b border-black/10 pb-2 md:border-none"><p className="text-[9px] uppercase opacity-70">Refri</p><span className="text-xl md:text-2xl">{res.refri}L</span></div>
                <div><p className="text-[9px] uppercase opacity-70">Carvao</p><span className="text-xl md:text-2xl">{res.carvao}s</span></div>
                <div><p className="text-[9px] uppercase opacity-70">Gelo</p><span className="text-xl md:text-2xl">{res.gelo}s</span></div>
                <div><p className="text-[9px] uppercase opacity-70">Descart.</p><span className="text-xl md:text-2xl">{res.descartaveis}</span></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {suppliers.map((s, i) => (
                  <div key={i} onClick={() => sendWhats(s)} className="bg-white/5 p-4 rounded-[25px] md:rounded-[35px] text-center cursor-pointer hover:bg-[#25D366] transition-all group border border-white/5 flex flex-col items-center justify-center min-h-[100px]">
                    <span className="text-3xl md:text-4xl block mb-1">{s.icon}</span>
                    <p className="text-[9px] font-black uppercase text-white group-hover:text-black">{s.name}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 md:p-6 bg-[#00BFA6]/10 border border-[#00BFA6]/20 rounded-[30px] md:rounded-[40px] flex gap-4 items-center">
                 <div className="bg-[#00BFA6] p-2 md:p-3 rounded-xl text-black shrink-0">
                   <Wallet size={20} />
                 </div>
                 <div>
                   <p className="text-[11px] md:text-sm font-black uppercase text-[#00BFA6] italic">GANHE TEMPO, saiba quanto vai gastar!</p>
                   <p className="text-[10px] md:text-[12px] leading-tight text-white/90 font-bold uppercase italic">Use o cálculo e gere orçamento nos parceiros.</p>
                 </div>
              </div>
            </div>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-white px-10 md:px-16 py-4 md:py-5 rounded-b-[30px] md:rounded-b-[45px] font-black text-[10px] md:text-xs uppercase text-black shadow-2xl border-x-[4px] md:border-x-[8px] border-b-[4px] md:border-b-[8px] border-white hover:bg-[#00BFA6] transition-all">
            {isOpen ? "FECHAR" : "CALCULADORA DE CHURRASCO"}
          </button>
        </div>
      </div>
    </>
  );
}