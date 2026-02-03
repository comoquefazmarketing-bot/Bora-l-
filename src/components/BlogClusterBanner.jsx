/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const clusterArticles = [
  { title: "Novo Horizonte 2026: Capital das Áreas de Lazer", slug: "master-novo-horizonte", tag: "Especial", color: "border-[#FACC15]" },
  { title: "A Revolução Digital do Lazer em NH", slug: "revolucao-lazer-novo-horizonte", tag: "Business", color: "border-[#00BFA6]" },
  { title: "Por que sua costela ainda não desmancha?", slug: "segredo-costela", tag: "Gastronomia", color: "border-[#FF4500]" },
  { title: "O Guia Anti-Vexame: Não esqueça o básico", slug: "checklist-chacara", tag: "Logística", color: "border-[#1F2937]" },
  { title: "As Melhores Áreas de Lazer de NH", slug: "melhores-areas-lazer-nh", tag: "Review", color: "border-[#00BFA6]" },
  { title: "Calculadora de Churrasco: O Guia", slug: "calculadora-churrasco", tag: "Tech", color: "border-[#00BFA6]" }
];

export default function BlogClusterBanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const filtered = clusterArticles.filter(art => !location.pathname.includes(art.slug)).slice(0, 3);

  return (
    <section className="bg-slate-50 py-20 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="text-[#00BFA6]" size={28} />
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-[#1F2937]">
            Explorar mais do <span className="text-[#00BFA6]">Bora Lá.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((art, i) => (
            <div key={i} onClick={() => { navigate(`/blog/${art.slug}`); window.scrollTo(0,0); }}
              className={`bg-white p-8 rounded-[45px] border-b-[12px] ${art.color} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group`}>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic">{art.tag}</span>
              <h4 className="text-2xl font-black text-[#1F2937] uppercase italic leading-tight group-hover:text-[#00BFA6] transition-colors">{art.title}</h4>
              <div className="mt-8 flex justify-end">
                <div className="bg-slate-100 p-3 rounded-full group-hover:bg-[#00BFA6] group-hover:text-white transition-colors"><ArrowRight size={20} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}