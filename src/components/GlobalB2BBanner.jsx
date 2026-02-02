import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const slidesB2B = [
  { id: 'churrasco', dor: 'AGENDA VAZIA?', prof: 'CHURRASQUEIROS', bg: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000' },
  { id: 'decor', dor: 'QUER MAIS EVENTOS?', prof: 'DECORADORAS', bg: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000' },
  { id: 'buffet', dor: 'SEU SABOR NO TOPO?', prof: 'BUFFETS & CONFEITEIRAS', bg: 'https://images.unsplash.com/photo-1530101128243-575b52a0a13b?q=80&w=2000' },
  { id: 'dj', dor: 'PICKUP PARADA?', prof: 'DJs & SONORIZAÃ‡ÃƒO', bg: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000' },
  { id: 'infantil', dor: 'RECREAÃ‡ÃƒO PARADA?', prof: 'FESTAS INFANTIS', bg: 'https://images.unsplash.com/photo-1533450718591-29d45635f0a9?q=80&w=2000' },
  { id: 'cerimonial', dor: 'ORGANIZAÃ‡ÃƒO DE ELITE?', prof: 'CERIMONIALISTAS', bg: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000' }
];

export default function GlobalB2BBanner() {
  const [current, setCurrent] = useState(0);
  const linkWhats = "https://wa.me/5517988031679?text=" + encodeURIComponent("Olá Felipe, vi o banner B2B no app BORA LÁ e quero ser um parceiro profissional!");

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slidesB2B.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-20">
      <div 
        onClick={() => window.open(linkWhats, '_blank')}
        className="relative w-full h-[280px] lg:h-[320px] rounded-[40px] lg:rounded-[60px] overflow-hidden bg-black text-white shadow-2xl group cursor-pointer border border-white/10"
      >
        {slidesB2B.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.bg} className="w-full h-full object-cover opacity-25 grayscale group-hover:grayscale-0 transition-all duration-[3s]" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            
            <div className="absolute inset-0 px-8 lg:px-16 flex items-center justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3 opacity-60">
                   <Sparkles size={14} className="text-[#00BFA6]" />
                   <span className="text-[10px] font-black tracking-[0.3em] uppercase">B2B PARTNER</span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold uppercase italic text-slate-400 mb-1">{slide.dor}</h3>
                <h2 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none text-[#00BFA6]">
                  {slide.prof}
                </h2>
              </div>

              <div className="hidden md:flex flex-col items-end gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[30px] border border-white/10 group-hover:bg-[#00BFA6] transition-all duration-500">
                  <ArrowRight size={32} className="text-white group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Mini Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slidesB2B.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-700 ${i === current ? 'w-8 bg-[#00BFA6]' : 'w-2 bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}