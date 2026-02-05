/* @author Felipe Makarios | Widget DinÃ¡Â¢mica */
import React from 'react';
import { CONTENT_HUB } from '../data/contentHub';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function GlobalContentUpdate() {
  // Pega o artigo mais recente ou marcado como global
  const featured = CONTENT_HUB.artigos.find(a => a.isGlobal) || CONTENT_HUB.artigos[0];

  return (
    <div className="bg-[#1F2937] text-white p-6 rounded-[30px] shadow-2xl flex flex-col md:flex-row items-center gap-6 border-b-8 border-[#00BFA6]">
      <div className="bg-[#00BFA6] p-4 rounded-2xl ">
        <Sparkles size={24} />
      </div>
      <div className="flex-1">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#00BFA6]">Destaque BORA LÃ</span>
        <h4 className="text-xl font-black uppercase italic leading-tight">{featured.title}</h4>
      </div>
      <button className="bg-white text-black px-6 py-3 rounded-full font-black uppercase text-[10px] hover:bg-[#00BFA6] hover:text-white transition-all">
        Ver Agora
      </button>
    </div>
  );
}