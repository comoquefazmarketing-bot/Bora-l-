/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const clusterArticles = [
  { title: "O Método da Costela: 3h de Fogo e Alumínio", slug: "segredo-costela", tag: "Técnica", color: "border-[#EE0000]" },
  { title: "Checklist: O que não pode faltar na Chácara", slug: "checklist-chacara", tag: "Logística", color: "border-[#00BFA6]" },
  { title: "Guia da Calculadora: Planeje sem erros", slug: "calculadora-guia", tag: "Ferramenta", color: "border-white" }
];

export default function BlogClusterBanner() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#151515] py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="text-[#00BFA6]" size={28} />
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">MÉTODOS <span className="text-[#00BFA6]">BORA LÁ.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clusterArticles.map((art, i) => (
            <div key={i} onClick={() => { navigate(`/blog/${art.slug}`); window.scrollTo(0,0); }}
              className={`bg-[#1a1a1a] p-8 rounded-[45px] border-b-[12px] ${art.color} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group border border-white/5`}>
              <span className="text-[10px] font-black text-[#00BFA6] uppercase tracking-widest block mb-4 italic">{art.tag}</span>
              <h4 className="text-2xl font-black text-white uppercase italic leading-tight group-hover:text-[#00BFA6] transition-colors">{art.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}