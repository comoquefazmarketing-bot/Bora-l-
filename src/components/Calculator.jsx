import React, { useState, useEffect } from "react";
import { Calculator as CalcIcon, ChevronUp, ChevronDown, Users, Flame, Utensils } from "lucide-react";

export default function Calculator() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener("openCalc", handleOpen);
    return () => window.removeEventListener("openCalc", handleOpen);
  }, []);

  return (
    <div className={`fixed top-0 left-1/2 -translate-x-1/2 z-[999] w-full max-w-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
      ${isOpen ? 'translate-y-0' : '-translate-y-[calc(100%-48px)]'}`}>
      
      <div className="bg-slate-900 rounded-b-[50px] shadow-2xl border-x-[6px] border-b-[6px] border-white p-10 pt-16 relative">
        <div className="grid grid-cols-3 gap-6 text-white text-center font-black">
           <div>
             <Users className="mx-auto text-[#00BFA6] mb-2" size={20} />
             <p className="text-[9px] text-[#00BFA6] uppercase tracking-widest">Pessoas</p>
             <input type="number" className="w-full bg-white/10 rounded-xl mt-2 p-2 text-white text-center outline-none border border-white/10" placeholder="0" />
           </div>
           <div>
             <Flame className="mx-auto text-[#00BFA6] mb-2" size={20} />
             <p className="text-[9px] text-[#00BFA6] uppercase tracking-widest">Carnes</p>
             <p className="text-xl mt-2 italic">0.0<span className="text-xs ml-1">KG</span></p>
           </div>
           <div>
             <Utensils className="mx-auto text-[#00BFA6] mb-2" size={20} />
             <p className="text-[9px] text-[#00BFA6] uppercase tracking-widest">Carvão</p>
             <p className="text-xl mt-2 italic">0<span className="text-xs ml-1">UN</span></p>
           </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-white px-10 py-3 rounded-b-3xl shadow-xl flex items-center gap-3 border-x-4 border-b-4 border-white">
          <CalcIcon size={18} className="text-[#00BFA6]" />
          <span className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-900">{isOpen ? "FECHAR" : "BORA LÁ CALCULAR"}</span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </div>
  );
}