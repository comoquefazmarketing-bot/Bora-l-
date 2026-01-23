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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* LOGO OFICIAL */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="Bora Lá" 
            className="w-32 md:w-56 h-auto drop-shadow-sm"
          />
        </div>

        {/* MENSAGEM DINÂMICA E BRANDING */}
        <div className="min-h-[160px] md:min-h-[220px] flex flex-col justify-center">
          <h2 className="text-slate-800 text-2xl md:text-4xl font-bold italic transition-opacity duration-500 mb-2">
            {frases[index]}
          </h2>
          <h1 className="text-[#00BFA6] text-7xl md:text-[150px] font-black italic uppercase tracking-tighter leading-[0.8]">
            Bora Lá.
          </h1>
        </div>

        {/* SUBTEXTO SENSORIAL (OPCIONAL) */}
        <p className="mt-8 text-slate-400 font-black uppercase tracking-[3px] text-xs md:text-sm italic">
          Experiências únicas começam aqui.
        </p>

      </div>
    </div>
  );
}