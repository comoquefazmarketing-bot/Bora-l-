/* @author Felipe Makarios | Lead Architect */
import React, { useState, useEffect } from 'react';

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const frases = [
    "Fazer um churrasco memorável?",
    "Passar um momento com a família?",
    "Celebrar com os amigos?",
    "Sair da rotina e descansar?",
    "Criar memórias incríveis?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-10 md:py-16 px-6 overflow-hidden bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* LOGO E BRANDING */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-10">
          <img 
            src="/logo/logo.png" 
            alt="Bora Lá Logo" 
            className="w-24 md:w-32 h-auto drop-shadow-[0_0_10px_rgba(0,191,166,0.5)]"
            onError={(e) => e.target.style.display = 'none'} 
          />
          <div className="flex flex-col">
            <p className="text-[#00BFA6] font-black uppercase tracking-[4px] text-[10px] md:text-xs italic mb-2 text-center md:text-left">
              Portal Manda Lá apresenta:
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4">
              <h2 className="text-white text-xl md:text-3xl font-bold italic text-center md:text-left min-h-[40px]">
                {frases[index]}
              </h2>
              <span className="text-[#00BFA6] text-4xl md:text-6xl font-black italic uppercase tracking-tighter animate-pulse">
                Bora Lá.
              </span>
            </div>
          </div>
        </div>

        {/* TÍTULO PRINCIPAL DE IMPACTO */}
        <div className="mt-4">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none text-center md:text-left">
            <span className="text-white">LUGARES </span>
            <span className="text-[#00BFA6] drop-shadow-[0_0_20px_rgba(0,191,166,0.4)]">INCRÍVEIS.</span>
          </h2>
        </div>

      </div>
      
      {/* ELEMENTO SENSORIAL DE FUNDO */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00BFA6]/10 to-transparent pointer-events-none" />
    </div>
  );
}