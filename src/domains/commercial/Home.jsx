import React from 'react';
import SpaceCard from '../../components/SpaceCard';
import MandaLaBanner from '../../components/MandaLaBanner';
import spacesData from '../../data/spaces.json';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Cabeçalho de Boas-vindas */}
      <header className="py-12 px-6">
        <h2 className="text-4xl md:text-6xl font-black text-[#8D7B68] tracking-tighter mb-4">
          EXPLORE <br/> <span className="text-[#00BFA6]">SEU PRÓXIMO REFÚGIO</span>
        </h2>
        <p className="text-[#8D7B68]/60 font-bold uppercase tracking-[0.3em] text-xs">
          Curadoria exclusiva Felipe Makarios
        </p>
      </header>

      {/* Grid de Cards Premium */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {spacesData.map(space => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </section>

      {/* Banner de Marketing no Final da Listagem */}
      <MandaLaBanner />
    </div>
  );
}