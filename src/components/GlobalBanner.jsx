import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GlobalBanner() {
  const navigate = useNavigate();

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-20">
      <div 
        onClick={() => navigate('/parceiros')} 
        className="relative w-full rounded-[60px] overflow-hidden bg-black text-white p-10 lg:p-20 group cursor-pointer shadow-2xl border border-white/5"
      >
        {/* Background com Overlay Profissional */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2000')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6">
            CHURRASQUEIROS, DJs <br/> 
            <span className="text-[#00BFA6]">& PROFISSIONAIS DE EVENTOS</span>
          </h2>
          
          <p className="text-slate-300 font-bold uppercase text-sm lg:text-lg italic tracking-widest mb-10 max-w-2xl leading-tight">
            SUA MÃO DE OBRA É O QUE FAZ A FESTA ACONTECER. <br className="hidden lg:block"/>
            VENHA SER UM PARCEIRO E ESTEJA ONDE OS CLIENTES ESTÃO.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#00BFA6] text-white px-10 py-6 rounded-[30px] font-black uppercase italic text-xl hover:bg-white hover:text-black transition-all shadow-xl active:scale-95">
              QUERO TRABALHAR MAIS
            </button>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hidden md:block">
              BORA LÁ B2B SOLUTIONS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}