/* @author Felipe Makarios | Creator & Lead Architect - Bora Lá / Manda Lá */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, ArrowRight, X, Beer, Utensils, 
  Droplets, Flame, MessageSquare, User, UserPlus, Baby, Package, Store, PartyPopper
} from 'lucide-react';

export default function MandaLaBanner() {
  const navigate = useNavigate();
  const [showCalc, setShowCalc] = useState(false);
  const [counts, setCounts] = useState({ men: 10, women: 10, kids: 5 });

  const updateCount = (type, val) => {
    setCounts(prev => ({ ...prev, [type]: Math.max(0, prev[type] + val) }));
  };

  const totalPeople = counts.men + counts.women + counts.kids;

  const calc = {
    carne: ((counts.men * 0.45) + (counts.women * 0.3) + (counts.kids * 0.2)).toFixed(1),
    cerveja: (counts.men * 6) + (counts.women * 4),
    refriAgua: Math.ceil((counts.men * 0.5) + (counts.women * 0.7) + (counts.kids * 1)),
    gelo: Math.ceil(totalPeople / 6) * 5,
    carvao: Math.ceil(((counts.men + counts.women) * 0.5) / 5) * 5,
    descartaveis: Math.ceil(totalPeople * 1.5)
  };

  const suppliers = [
    { name: "Adega do Marcão", type: "Gelada & Gelo", icon: "🍺", color: "bg-yellow-400" },
    { name: "Casa de Carnes Boi de Ouro", type: "Churrasco Premium", icon: "🥩", color: "bg-red-500" },
    { name: "Empório da Vila", type: "Tudo para Festa", icon: "🥳", color: "bg-purple-500" }
  ];

  return (
    <>
      {/* BARRA ROBUSTA E ALEGRE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-6xl px-6">
        <div className="bg-[#1A1A1A] rounded-[45px] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.7)] border-4 border-[#00BFA6] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          
          {/* Brilho de Fundo Decorativo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4500] blur-[80px] opacity-20"></div>
          
          <div onClick={() => setShowCalc(true)} className="flex items-center gap-8 pl-4 cursor-pointer group flex-1">
            <div className="bg-gradient-to-br from-[#00BFA6] to-[#008f7a] p-6 rounded-[30px] text-white shadow-2xl group-hover:rotate-12 transition-all">
              <Calculator size={32} strokeWidth={3} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <PartyPopper size={16} className="text-[#FF4500]" />
                <span className="text-[#00BFA6] font-black uppercase text-[10px] tracking-[0.4em]">Planeje agora</span>
              </div>
              <h4 className="text-white text-3xl font-black uppercase italic tracking-tighter leading-none">
                Calculadora <span className="text-[#00BFA6]">de Festa</span>
              </h4>
              <p className="text-white/40 text-[11px] font-bold uppercase mt-2 tracking-widest">Gere sua lista completa em 5 segundos!</p>
            </div>
          </div>

          <div className="flex items-center gap-8 pr-4">
             <div className="hidden lg:flex flex-col items-end">
                <span className="text-[#FF4500] font-black text-[11px] uppercase tracking-widest italic">Venda no Manda Lá</span>
                <p className="text-white/30 text-[9px] font-bold uppercase mt-1">Sua empresa em destaque</p>
             </div>
             <button 
                onClick={() => navigate('/register-supplier')}
                className="bg-[#FF4500] text-white px-12 py-7 rounded-[30px] font-black uppercase text-sm tracking-[0.2em] flex items-center gap-4 hover:scale-105 transition-all shadow-[0_15px_40px_rgba(255,69,0,0.4)] border-b-4 border-black/20"
              >
                Anuncie Aqui <ArrowRight size={20} strokeWidth={3} />
              </button>
          </div>
        </div>
      </div>

      {/* MODAL SENSORIAL ROBUSTO */}
      {showCalc && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/90 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-6xl rounded-[70px] relative shadow-2xl flex flex-col md:flex-row overflow-hidden border-[15px] border-white max-h-[95vh]">
            
            {/* LADO A: CONVIDADOS */}
            <div className="bg-[#FDFCFB] p-12 md:w-[42%] border-r-4 border-[#F0EFEA] overflow-y-auto">
              <button onClick={() => setShowCalc(false)} className="text-[#B2B0AB] hover:text-[#1A1A1A] flex items-center gap-2 font-black text-[11px] uppercase tracking-[0.3em] mb-12">
                <X size={24}/> Fechar
              </button>
              
              <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.9] text-[#1A1A1A] mb-12">
                A festa <br/><span className="text-[#00BFA6]">começa aqui.</span>
              </h2>

              <div className="space-y-5">
                {[
                  { label: 'Homens', key: 'men', icon: <User size={28}/> },
                  { label: 'Mulheres', key: 'women', icon: <UserPlus size={28}/> },
                  { label: 'Crianças', key: 'kids', icon: <Baby size={28}/> }
                ].map((item) => (
                  <div key={item.key} className="bg-white p-8 rounded-[40px] border-2 border-[#F0EFEA] flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-5 text-[#1A1A1A]">
                      <div className="text-[#00BFA6] bg-[#00BFA6]/10 p-4 rounded-2xl">{item.icon}</div>
                      <span className="font-black uppercase text-sm tracking-widest">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <button onClick={() => updateCount(item.key, -1)} className="w-12 h-12 rounded-2xl bg-[#F0EFEA] flex items-center justify-center font-black text-2xl hover:bg-red-500 hover:text-white transition-all">-</button>
                      <span className="text-3xl font-black italic w-10 text-center">{counts[item.key]}</span>
                      <button onClick={() => updateCount(item.key, 1)} className="w-12 h-12 rounded-2xl bg-[#F0EFEA] flex items-center justify-center font-black text-2xl hover:bg-[#00BFA6] hover:text-white transition-all">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LADO B: LISTA + FORNECEDORES AGORA */}
            <div className="p-12 md:w-[58%] overflow-y-auto bg-white">
              <div className="mb-10">
                <span className="text-[#FF4500] font-black uppercase text-[11px] tracking-[0.5em]">Checklist Bora Lá</span>
                <h3 className="text-4xl font-black uppercase italic tracking-tighter mt-2 leading-none">Sua lista está <span className="text-[#FF4500]">PRONTA!</span></h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  { l: 'Carnes', v: `${calc.carne}kg`, i: <Utensils size={24}/>, c: 'bg-red-50' },
                  { l: 'Cervejas', v: `${calc.cerveja}un`, i: <Beer size={24}/>, c: 'bg-yellow-50' },
                  { l: 'Bebidas', v: `${calc.refriAgua}L`, i: <Droplets size={24}/>, c: 'bg-blue-50' },
                  { l: 'Gelo', v: `${calc.gelo}kg`, i: <Flame size={24}/>, c: 'bg-cyan-50' },
                  { l: 'Carvão', v: `${calc.carvao}kg`, i: <Flame size={24}/>, c: 'bg-orange-50' },
                  { l: 'Descartáveis', v: `${calc.descartaveis}un`, i: <Package size={24}/>, c: 'bg-purple-50' }
                ].map((item, i) => (
                  <div key={i} className={`${item.c} p-6 rounded-[35px] border border-black/5 flex items-center gap-6`}>
                    <div className="text-[#1A1A1A]">{item.i}</div>
                    <div>
                      <p className="text-[9px] font-black uppercase text-[#B2B0AB] tracking-widest">{item.l}</p>
                      <p className="text-xl font-black italic text-[#1A1A1A] leading-none mt-1">{item.v}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* VITRINE IMEDIATA */}
              <div className="space-y-4">
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#1A1A1A] mb-6 border-l-4 border-[#FF4500] pl-4">Pedir Agora (Manda Lá)</h4>
                {suppliers.map((s, idx) => (
                  <div key={idx} className="bg-[#FDFCFB] p-6 rounded-[40px] border-2 border-[#F0EFEA] flex items-center justify-between hover:border-[#FF4500] hover:translate-x-2 transition-all cursor-pointer shadow-sm">
                    <div className="flex items-center gap-6">
                      <div className={`${s.color} w-16 h-16 rounded-[22px] flex items-center justify-center text-3xl shadow-lg`}>
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase italic tracking-tighter text-[#1A1A1A]">{s.name}</p>
                        <p className="text-[9px] font-black uppercase text-[#B2B0AB] mt-1 tracking-widest">{s.type}</p>
                      </div>
                    </div>
                    <button className="bg-[#1A1A1A] text-white px-8 py-5 rounded-[22px] font-black uppercase text-[10px] tracking-widest flex items-center gap-3 hover:bg-[#25D366] transition-all shadow-xl">
                      <MessageSquare size={16} /> Cotar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}