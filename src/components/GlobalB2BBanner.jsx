/* @author Felipe Makarios | Creator of Bora Lá */
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Megaphone, MapPin, Star, Users } from 'lucide-react';

const slidesB2B = [
  { 
    id: 'anuncie', 
    dor: 'Sua marca merece brilhar?', 
    prof: 'Anuncie no Bora Lá', 
    bg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000',
    icon: <Megaphone size={12} className="text-[#00BFA6]" />,
    tag: "PUBLICIDADE",
    msg: "Olá Felipe, gostaria de saber mais sobre como anunciar minha marca no app BORA LÁ!"
  },
  { 
    id: 'indicacao', 
    dor: 'Conhece um lugar especial?', 
    prof: 'Indique uma Área', 
    bg: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000',
    icon: <MapPin size={12} className="text-[#00BFA6]" />,
    tag: "INDICAÇÃO",
    msg: "Olá Felipe, quero indicar uma área de lazer que ainda não está no app!"
  },
  { 
    id: 'churrasco', 
    dor: 'Quer lotar sua agenda?', 
    prof: 'Churrasqueiros de Elite', 
    bg: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000',
    icon: <Sparkles size={12} className="text-[#00BFA6]" />,
    tag: "CURADORIA",
    msg: "Olá Felipe, sou churrasqueiro e quero entrar para a curadoria do BORA LÁ!"
  },
  { 
    id: 'decor', 
    dor: 'Transforme cada evento', 
    prof: 'Decoradoras & Buffet', 
    bg: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000',
    icon: <Star size={12} className="text-[#00BFA6]" />,
    tag: "PARCERIA",
    msg: "Olá Felipe, trabalho com decoração/buffet e quero ser parceira oficial!"
  }
];

export default function GlobalB2BBanner() {
  const [current, setCurrent] = useState(0);
  const whatsNumber = "5517988031679";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesB2B.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (msg) => {
    const url = "https://wa.me/" + whatsNumber + "?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-20">
      <div 
        onClick={() => handleClick(slidesB2B[current].msg)}
        className="relative w-full h-[200px] sm:h-[240px] lg:h-[280px] rounded-[30px] lg:rounded-[50px] overflow-hidden bg-[#0a0a0a] text-white shadow-xl group cursor-pointer border border-white/5"
      >
        {slidesB2B.map((slide, index) => (
          <div 
            key={slide.id}
            className={"absolute inset-0 transition-all duration-[1200ms] " + (index === current ? "opacity-100 scale-100" : "opacity-0 scale-105")}
          >
            {/* Overlay de Imagem mais sofisticado */}
            <img src={slide.bg} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-[4s]" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
            
            <div className="absolute inset-0 px-8 lg:px-20 flex items-center">
              <div className="max-w-xl">
                {/* Tag sutil */}
                <div className="flex items-center gap-2 mb-4">
                   <div className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                     {slide.icon}
                   </div>
                   <span className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">{slide.tag}</span>
                </div>
                
                {/* Pergunta/Dor: Menor e elegante */}
                <p className="text-sm sm:text-base lg:text-lg font-light text-slate-300 mb-1 tracking-wide">
                  {slide.dor}
                </p>
                
                {/* Título Principal: Ajustado para não ser grosseiro */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white group-hover:text-[#00BFA6] transition-colors duration-500">
                  {slide.prof}
                </h2>

                {/* Botão de Ação sutil no Mobile */}
                <div className="mt-4 flex items-center gap-2 text-[#00BFA6] text-xs font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Saiba mais <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Indicadores Minimalistas no canto inferior */}
        <div className="absolute bottom-6 right-10 flex gap-2">
          {slidesB2B.map((_, i) => (
            <div 
              key={i} 
              className={"h-1 rounded-full transition-all duration-500 " + (i === current ? "w-6 bg-[#00BFA6]" : "w-1 bg-white/10")} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}