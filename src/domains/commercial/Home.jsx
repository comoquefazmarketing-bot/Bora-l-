import React, { useState, useEffect } from 'react';
import { spaces } from '../../data/spaces';
import SearchHero from './components/SearchHero';
import { Sparkles, MapPin, Calculator, Handshake, Megaphone } from 'lucide-react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slides dinâmicos combinando Áreas e Serviços
  const slides = [
    ...spaces.slice(0, 3).map(s => ({ 
      type: 'space', 
      url: s.images[0], 
      title: s.title,
      subtitle: 'TUDO O QUE VOCÊ MERECE ESTÁ AQUI.'
    })),
    { 
      type: 'service', 
      url: '/spaces/banner_churrasco.jpg', // Use uma imagem de churrasco de qualidade
      title: 'CALCULADORA CHURRASCO', 
      subtitle: 'GERE SUA LISTA COMPLETA EM 5 SEGUNDOS!',
      icon: <Calculator size={24} />,
      color: '#00BFA6'
    },
    { 
      type: 'service', 
      url: '/spaces/banner_anuncie.jpg', 
      title: 'ANUNCIE SUA ÁREA', 
      subtitle: 'RENDA EXTRA COM SEU ESPAÇO DE LAZER.',
      icon: <Megaphone size={24} />,
      color: '#FF5A1F'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans pb-24">
      {/* Banner Principal - Limitado e Elegante */}
      <section className="relative max-w-[1400px] mx-auto mt-4 h-[550px] overflow-hidden rounded-[50px] shadow-2xl bg-[#1A1A1A]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          >
            {/* Imagem com Overlay Suave */}
            <img src={slide.url} className="w-full h-full object-cover opacity-60" alt={slide.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/30"></div>
            
            {/* Conteúdo Centralizado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-[#00BFA6] uppercase tracking-[0.3em] mb-8 border border-white/20">
                <Sparkles size={14} /> Experiência Sensorial
              </div>
              
              <h2 className="text-white text-lg font-bold tracking-[0.2em] mb-4 opacity-80 uppercase">
                {slide.subtitle}
              </h2>
              
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none max-w-4xl uppercase italic">
                {slide.title}
              </h1>

              {slide.type === 'service' && (
                <button 
                  style={{ backgroundColor: slide.color }}
                  className="mt-10 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  {slide.icon} Começar Agora
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Paginação */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-12 bg-[#00BFA6]' : 'w-3 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Barra de Busca Flutuante */}
      <div className="relative z-40">
        <SearchHero />
      </div>

      {/* Grid de Espaços - Clean Style */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter italic">O que você procura?</h2>
          <span className="bg-[#F4F1EA] px-4 py-2 rounded-xl text-[10px] font-black text-[#8D7B68] uppercase">NH e Região</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {spaces.map(s => (
            <div key={s.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] mb-6 transition-all duration-500 group-hover:shadow-2xl">
                <img src={s.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={s.title} />
                <div className="absolute top-6 right-6 bg-white px-5 py-2 rounded-2xl text-xs font-black text-[#1A1A1A] shadow-xl border border-gray-50">
                  R$ {s.price}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tighter group-hover:text-[#00BFA6] transition-colors">{s.title}</h3>
                  <div className="flex items-center gap-1.5 mt-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={12} className="text-[#00BFA6]" /> {s.location}
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00BFA6]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}