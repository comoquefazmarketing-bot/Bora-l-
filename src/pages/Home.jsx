/* @author Felipe Makarios | Lead Architect */
import React from 'react';
import SpaceCard from '../components/SpaceCard';

const spaces = [
  { id: "top-burguer", title: "TOP BURGUER - ÁREA DE LAZER", location: "Rua Manoel Neves, 969", price: "330", image: "/spaces/area de lazer top burguer/foto1.jpg" },
  { id: "sao-sebastiao", title: "CHÁCARA SÃO SEBASTIÃO", location: "Novo Horizonte - SP", price: "300", image: "/spaces/Chácara São Sebastião/foto1.jpg" },
  { id: "carlos-zara", title: "ÁREA DE LAZER CARLOS ZARA", location: "Av. Cônego Alfredo Reith, 1363", price: "600", image: "/spaces/Área de lazer Carlos Zara/foto1.jpg" },
  { id: "recanto-do-sol", title: "RECANTO DO SOL", location: "R. Alexandre Baraldo, 433", price: "Consultar", image: "/spaces/Recanto do Sol/foto1.jpg" },
  { id: "assolini", title: "ÁREA DE LAZER ASSOLINI", location: "R. Mário Benedicto da Silva, 1305", price: "Consultar", image: "/spaces/ÁREA DE LAZER ASSOLINI/foto1.jpg" },
  { id: "rancho-paradise", title: "RANCHO PARADISE BORBOREMA", location: "Borborema - SP", price: "Consultar", image: "/spaces/Rancho Paradise Borborema/foto1.jpg" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-20 pt-32">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="mb-20">
          <p className="text-[#00BFA6] font-black uppercase tracking-[0.5em] text-[10px] mb-4 italic">Portal Manda Lá</p>
          <h2 className="text-[50px] md:text-[80px] font-black uppercase italic tracking-tighter leading-none">
            LUGARES <span className="text-[#00BFA6]">INCRÍVEIS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {spaces.map(space => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </div>
    </div>
  );
}