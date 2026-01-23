import React from 'react';
import { Calculator, Handshake, Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-[#1A1A1A] rounded-b-[60px] shadow-2xl">
      {/* Background com Overlay para destacar o texto */}
      <div className="absolute inset-0 z-0">
        <img src="/spaces/area de lazer top burguer/capa.jpg" className="w-full h-full object-cover opacity-30" alt="Bora Lá" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-[#00BFA6] px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-bounce">
          <Sparkles size={14} /> Marketplace de Experiências
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
          TUDO O QUE VOCÊ <br/> <span className="text-[#00BFA6]">MERECE ESTÁ AQUI.</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button className="group bg-[#00BFA6] text-white px-10 py-6 rounded-[24px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all flex items-center gap-3 shadow-xl">
            <Calculator className="group-hover:rotate-12 transition-transform" /> 
            Calculadora de Diária
          </button>
          <button className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-6 rounded-[24px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all flex items-center gap-3 shadow-xl">
            <Handshake className="group-hover:-rotate-12 transition-transform" /> 
            Seja Parceiro
          </button>
        </div>
      </div>
    </section>
  );
}