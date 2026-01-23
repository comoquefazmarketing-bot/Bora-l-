/* @author Felipe Makarios | Creator */
import React, { useState, useEffect } from 'react';
import SpaceCard from '../components/SpaceCard';

const spaces = [
  { id: "top-burguer", title: "TOP BURGUER - ÁREA DE LAZER", location: "Rua Manoel Neves, 969", price: "330", image: "/spaces/area de lazer top burguer/foto1.jpg" },
  { id: "sao-sebastiao", title: "CHÁCARA SÃO SEBASTIÃO", location: "Novo Horizonte - SP", price: "300", image: "/spaces/Chácara São Sebastião/foto1.jpg" },
  { id: "carlos-zara", title: "ÁREA DE LAZER CARLOS ZARA", location: "Av. Cônego Alfredo Reith, 1363", price: "600", image: "/spaces/Área de lazer Carlos Zara/foto1.jpg" },
  { id: "recanto-do-sol", title: "RECANTO DO SOL", location: "R. Alexandre Baraldo, 433", price: "Consultar", image: "/spaces/Recanto do Sol/foto1.jpg" },
  { id: "assolini", title: "ÁREA DE LAZER ASSOLINI", location: "R. Mário Benedicto da Silva, 1305", price: "Consultar", image: "/spaces/ÁREA DE LAZER ASSOLINI/foto1.jpg" },
  { id: "rancho-paradise", title: "RANCHO PARADISE BORBOREMA", location: "Borborema - SP", price: "380", image: "/spaces/Rancho Paradise Borborema/foto1.jpg" }
];

export default function Home() {
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-20 pt-16 md:pt-24">
      <div className="max-w-[1400px] mx-auto px-10">
        
        {/* BRANDING BORA LÁ */}
        <div className="mb-20 flex flex-col items-center md:items-start">
          <img 
            src="/logo.png" 
            alt="Bora Lá" 
            className="w-32 md:w-48 h-auto mb-10 rotate-90"
            onError={(e) => e.target.style.display = 'none'} 
          />
          
          <div className="min-h-[140px] md:min-h-[180px]">
            <p className="text-slate-800 text-2xl md:text-4xl font-bold italic transition-opacity duration-700">
              {frases[index]}
            </p>
            <h1 className="text-[#00BFA6] text-6xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.85] mt-8">
              Bora Lá.
            </h1>
          </div>
        </div>

        {/* LISTA DE ESPAÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {spaces.map(space => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>

        {/* RODAPÉ */}
        <div className="mt-24 border-t border-slate-100 pt-10 text-center md:text-left">
           <h2 className="text-3xl md:text-5xl font-black italic uppercase text-slate-200">
             LUGARES <span className="opacity-50">INCRÍVEIS.</span>
           </h2>
        </div>
      </div>
    </div>
  );
}